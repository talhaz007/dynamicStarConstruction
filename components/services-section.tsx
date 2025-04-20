"use client"

import { useState } from "react"

import { ServiceSelector } from "./service-selector"
import { ServiceGallery } from "./service-gallery"

// Sample data structure for services and their images
const services = [
  {
    id: "siding",
    name: "Siding",
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
    name: "Roofing",
    description: "Complete roofing solutions including shingle, metal, and flat roof installation.",
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
        src: "/images/services/paver-new.JPG",
        alt: "pavers",
        title: "Pavers Steps",
      },
      {
        src: "/images/services/pavers-2.JPG",
        alt: "pavers",
        title: "Pavers",
      },
    //   {
    //     src: "/images/services/pavers-3.JPG",
    //     alt: "pavers",
    //     title: "Pavers Steps",
    //   },
    ],
  },
  {
    id: "masonry",
    name: "Brickwork & Pointing",
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
  {
    id: "painting",
    name: "Painting",
    description: "Professional interior and exterior painting services using premium paints and materials for a flawless, long-lasting finish.",
    images: [
      {
        src: "/images/services/painting-1.jpg",
        alt: "Exterior house painting",
        title: "Exterior House Painting",
      },
      {
        src: "/images/services/painting-2.jpg",
        alt: "Interior room painting",
        title: "Interior Painting Services",
      },
    ],
  },
  {
    id: "leak-repair",
    name: "Leak Repair",
    description: "Professional leak detection and repair services for roofs, basements, and plumbing systems to protect your home from water damage.",
    images: [
      {
        src: "/images/services/leak-1.png",
        alt: "Roof leak repair",
        title: "Roof Leak Detection & Repair",
      },
    ],
  },
  {
    id: "power-washing",
    name: "Power Washing",
    description: "Professional power washing services to remove dirt, grime, mold, and mildew from exterior surfaces, restoring your property's appearance and preventing damage.",
    images: [
      {
        src: "/images/services/cleaning.webp",
        alt: "House exterior power washing",
        title: "Exterior House Cleaning",
      },
    ],
  },
  {
    id: "composite-decking",
    name: "Composite Decking",
    description: "High-quality composite decking installation that provides the beauty of natural wood with enhanced durability, low maintenance, and resistance to rot, insects, and weathering.",
    images: [
      {
        src: "/images/services/deck-1.JPG",
        alt: "Composite deck installation",
        title: "Modern Composite deck",
      },
      {
        src: "/images/services/deck-2.JPG",
        alt: "Composite deck",
        title: "Composite Deck",
      },
      {
        src: "/images/services/deck-3.JPG",
        alt: "Composite deck",
        title: "Composite Deck",
      },
    ],
  },
  {
    id: "concrete",
    name: "Concrete Driveways & Sidewalks",
    description: "Professional installation and repair of concrete driveways and sidewalks, providing durability, curb appeal, and long-lasting performance for your property.",
    images: [
      {
        src: "/images/services/concrete-1.jpg",
        alt: "Concrete driveway installation",
        title: "Custom Concrete Driveway",
      },
    ],
  },
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState(services[0])

  // Handle service selection immediately without any animations
  const handleServiceSelect = (service) => {
    setSelectedService(service);
  }

  return (
    <div className="space-y-12">
      <ServiceSelector 
        services={services} 
        selectedService={selectedService} 
        onSelectService={handleServiceSelect} 
      />

      <div>
        <ServiceGallery service={selectedService} />
      </div>
    </div>
  )
} 