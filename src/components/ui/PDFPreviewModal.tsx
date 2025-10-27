import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download } from 'lucide-react'
import { Button } from './Button'

interface PDFPreviewModalProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
  fileName?: string
}

export const PDFPreviewModal = ({
  isOpen,
  onClose,
  pdfUrl,
  fileName = 'document.pdf'
}: PDFPreviewModalProps) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex flex-col"
          >
            <div className="bg-card rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full border border-white/10">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-bg">
                <h3 className="text-lg font-bold truncate">{fileName}</h3>
                <div className="flex items-center gap-2">
                  <a
                    href={pdfUrl}
                    download={fileName}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button variant="secondary" size="sm" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </a>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto bg-bg-soft">
                <iframe
                  src={pdfUrl}
                  className="w-full h-full"
                  title="PDF Preview"
                  style={{ border: 'none', minHeight: '500px' }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
