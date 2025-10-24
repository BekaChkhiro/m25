import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Container, Badge } from '@components/ui'
import { ZoomIn } from 'lucide-react'
import { floorPlanImages, presentationImages, renderImages } from '@data/galleries'
import type { GalleryImage } from '@/types'

type GalleryFilter = 'all' | 'plan' | 'presentation' | 'render'

const filters = [
  { id: 'all' as GalleryFilter, label: 'All Images', count: 119 },
  { id: 'plan' as GalleryFilter, label: 'Floor Plans', count: 6 },
  { id: 'presentation' as GalleryFilter, label: 'Presentation', count: 21 },
  { id: 'render' as GalleryFilter, label: 'Renders', count: 92 },
]

export const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const allImages: GalleryImage[] = [
    ...floorPlanImages,
    ...presentationImages,
    ...renderImages,
  ]

  const filteredImages = activeFilter === 'all'
    ? allImages
    : allImages.filter(img => img.category === activeFilter)

  const lightboxSlides = filteredImages.map(img => ({
    src: img.src,
    alt: img.alt,
    title: img.caption,
  }))

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="gallery" className="section-spacing" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge mb-4">Gallery</span>
          <h2 className="mb-6">
            <span className="gradient-text">Visual Tour</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto mb-8">
            Explore our modern business center through detailed floor plans and
            architectural renders.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-brand text-[#001324] shadow-glow'
                    : 'bg-card border border-white/10 text-text hover:border-brand/50'
                }`}
              >
                {filter.label}
                <span className="ml-2 text-sm opacity-70">({filter.count})</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredImages.slice(0, 24).map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="group relative aspect-square overflow-hidden rounded-xl bg-card border border-white/10 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <ZoomIn className="w-8 h-8 text-brand mx-auto mb-2" />
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>

              {/* Category Badge */}
              {activeFilter === 'all' && (
                <div className="absolute top-3 left-3">
                  <Badge variant={image.category === 'plan' ? 'brand' : 'default'}>
                    {image.category}
                  </Badge>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Info */}
        {filteredImages.length > 24 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-muted mb-4">
              Showing 24 of {filteredImages.length} images
            </p>
            <p className="text-sm text-muted">
              Click any image to view full gallery in lightbox
            </p>
          </motion.div>
        )}
      </Container>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
        styles={{
          container: { backgroundColor: 'rgba(12, 15, 20, 0.95)' },
        }}
      />
    </section>
  )
}
