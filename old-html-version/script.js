

// --- Lightbox zoom & pan ---
(function(){
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if(!lb || !img) return;
  let scale = 1, startX = 0, startY = 0, tx = 0, ty = 0, dragging = false;

  function apply(){ img.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`; }

  img.addEventListener('click', (e)=>{
    // toggle zoom
    if(scale === 1){ scale = 2; } else { scale = 1; tx = 0; ty = 0; }
    apply();
  });

  img.addEventListener('mousedown', (e)=>{
    if(scale === 1) return;
    dragging = true; startX = e.clientX - tx; startY = e.clientY - ty;
    e.preventDefault();
  });
  window.addEventListener('mousemove', (e)=>{
    if(!dragging) return;
    tx = e.clientX - startX; ty = e.clientY - startY; apply();
  });
  window.addEventListener('mouseup', ()=> dragging = false);

  img.addEventListener('wheel', (e)=>{
    e.preventDefault();
    const delta = Math.sign(e.deltaY);
    scale = Math.min(3, Math.max(1, scale - delta*0.1));
    apply();
  }, {passive:false});
})();


// Show 'No images' message if floor plans grid is empty
document.addEventListener('DOMContentLoaded', ()=>{
  const grid = document.querySelector('#floorplans .plans-grid');
  const msg = document.querySelector('#floorplans .no-plans-msg');
  if(grid && msg){
    const hasItems = grid.querySelectorAll('.plan').length > 0;
    msg.style.display = hasItems ? 'none' : 'block';
  }
});


// --- PDF.js rendering for Floor Plans ---
(function(){
  const container = document.getElementById('pdf-floorplans');
  if(!container) return;
  // Load PDF.js dynamically from CDN (keeps bundle small)
  const script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
  script.onload = initPdf;
  document.head.appendChild(script);

  function initPdf(){
    if(!window['pdfjsLib']) return;
    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    const url = "assets/M25-Exclusive-Business-Center.pdf";
    const targetPages = [9,12,14,16,17,18]; // 1-indexed
    pdfjsLib.getDocument(url).promise.then((pdf)=>{
      targetPages.forEach((pageNum)=>{
        pdf.getPage(pageNum).then((page)=>{
          const viewport = page.getViewport({ scale: 0.35 }); // small thumbs
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          const holder = document.createElement('a');
          holder.href = url + "#page=" + pageNum;
          holder.target = "_blank";
          holder.className = "pdf-thumb";
          holder.setAttribute('aria-label', "Open PDF page " + pageNum);

          holder.appendChild(canvas);
          container.appendChild(holder);

          page.render({ canvasContext: ctx, viewport }).promise.then(()=>{
            // Optional: analytics hook
            if(window.__track){ holder.addEventListener('click', ()=> __track('pdf_page_open', {page: pageNum})); }
          });
        });
      });
    });
  }
})();
