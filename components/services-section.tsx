"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { ServiceSelector } from "./service-selector"
import { ServiceGallery } from "./service-gallery"

// Sample data structure for services and their images
const services = [
  {
    id: "siding",
    name: "Siding Installation",
    description: "Premium vinyl, fiber cement, and wood siding options installed by certified professionals to protect and beautify your home.",
    images: [
      {
        src: "/images/services/siding-1.jpg",
        alt: "Vinyl siding installation",
        title: "Modern Vinyl Siding",
      },
      {
        src: "/images/services/siding-2.jpg",
        alt: "Fiber cement siding",
        title: "Durable Fiber Cement Siding",
      },
      {
        src: "/images/services/siding-3.jpg",
        alt: "Wood siding installation",
        title: "Classic Wood Siding",
      },
    ],
  },
  {
    id: "roofing",
    name: "Roofing & Gutters",
    description: "Complete roofing solutions including shingle, metal, and flat roof installation with seamless gutter systems.",
    images: [
      {
        src: "/images/services/roofing-1.jpg",
        alt: "Shingle roof installation",
        title: "Premium Shingle Roofing",
      },
      {
        src: "/images/services/roofing-2.jpg",
        alt: "Metal roof installation",
        title: "Durable Metal Roofing",
      },
      {
        src: "/images/services/roofing-3.jpg",
        alt: "Gutter installation",
        title: "Seamless Gutter Systems",
      },
    ],
  },
  {
    id: "pavers",
    name: "Pavers",
    description: "Durable and stylish outdoor pavers designed to elevate your landscape. Ideal for patios, walkways, and driveways, they offer long-lasting performance and aesthetic appeal with minimal maintenance.",
    images: [
      {
        src: "/images/services/pavers-1.JPG",
        alt: "pavers",
        title: "Pavers Steps",
      },
      {
        src: "/images/services/pavers-2.JPG",
        alt: "pavers",
        title: "Pavers",
      },
      {
        src: "/images/services/pavers-3.JPG",
        alt: "pavers",
        title: "Pavers Steps",
      },
    ],
  },
  {
    id: "masonry",
    name: "Brickwork & Masonry",
    description: "Expert masonry services including brick repair, stone installation, and decorative concrete work.",
    images: [
      {
        src: "/images/services/masonry-1.JPG",
        alt: "Brick repair",
        title: "Brick Repair & Restoration",
      },
      {
        src: "/images/services/masonry-2.JPG",
        alt: "Stone installation",
        title: "Natural Stone Installation",
      },
      {
        src: "/images/services/masonry-3.JPG",
        alt: "Decorative concrete",
        title: "Decorative Concrete Work",
      },
    ],
  },
  {
    id: "stairs",
    name: "Exterior Stairs",
    description: "Expert stair installation and repair services, ensuring safety and aesthetic appeal in your home.",
    images: [
      {
        src: "/images/services/stairs-1.JPG",
        alt: "stairs",
        title: "Stairs",
      },
      {
        src: "/images/services/stairs-2.JPG",
        alt: "stairs",
        title: "Stairs",
      },
      {
        src: "/images/services/stairs-3.JPG",
        alt: "stairs",
        title: "Stairs",
      },
    ],
  },
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState(services[0])

  return (
    <div className="space-y-12">
      <ServiceSelector services={services} selectedService={selectedService} onSelectService={setSelectedService} />

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedService.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ServiceGallery service={selectedService} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
} 