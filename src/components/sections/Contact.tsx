import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Container, Card, Button, Input, Map, DateInput } from '@components/ui'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import type { ContactFormData } from '@/types'

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string()
    .min(8, 'Phone number must be at least 8 digits')
    .regex(/^[\d\s+()-]+$/, 'Please enter a valid phone number'),
  preferredDate: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').optional(),
})

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    values: [
      { display: '+995 577 311 043', href: 'tel:+995577311043' },
      { display: '+44 776 770 1844', href: 'tel:+447767701844' },
    ],
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@m25.ge',
    href: 'mailto:info@m25.ge',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '25 Mtatsminda St, Tbilisi',
    href: 'https://maps.google.com/?q=25+Mtatsminda+St,+Tbilisi&hl=en',
  },
]

export const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Form data:', data)

    setIsSubmitting(false)
    setIsSuccess(true)
    reset()

    // Hide success message after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
    }, 3000)
  }

  return (
    <section id="contact" className="section-spacing bg-bg-soft" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Contact Us</span>
          <h2 className="mb-6 text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((info) => (
              <Card key={info.label} className="group hover:border-brand/50 transition-colors">
                {'values' in info ? (
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand/10 rounded-xl group-hover:bg-brand/20 transition-colors">
                      <info.icon className="w-5 h-5 text-brand" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted mb-1">{info.label}</p>
                      <div className="space-y-1">
                        {info.values.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block font-medium hover:text-brand transition-colors"
                          >
                            {item.display}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-brand/10 rounded-xl group-hover:bg-brand/20 transition-colors">
                      <info.icon className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-sm text-muted mb-1">{info.label}</p>
                      <p className="font-medium group-hover:text-brand transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                )}
              </Card>
            ))}

            {/* Interactive Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-64"
            >
              <Map
                latitude={41.6938}
                longitude={44.8015}
                zoom={16}
                className="h-full shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="relative overflow-hidden">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      {...register('firstName')}
                      placeholder="Enter your first name"
                      error={errors.firstName?.message}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      {...register('lastName')}
                      placeholder="Enter your last name"
                      error={errors.lastName?.message}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="Enter your email address"
                    error={errors.email?.message}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      placeholder="Enter your phone number"
                      error={errors.phone?.message}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <DateInput
                      id="preferredDate"
                      label="Preferred Visit Date"
                      {...register('preferredDate')}
                      min={new Date().toISOString().split('T')[0]}
                      error={errors.preferredDate?.message}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    {...register('company')}
                    placeholder="Enter your company name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={4}
                    placeholder="Please describe your requirements"
                    className="input-field resize-none"
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-card/95 backdrop-blur-sm flex items-center justify-center"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: 'spring' }}
                      >
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted">We'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
