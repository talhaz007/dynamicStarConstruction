"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Service = {
  id: string
  name: string
  description: string
  images: Array<{
    src: string
    alt: string
    title: string
  }>
}

interface ServiceGalleryProps {
  service: Service
}

export function ServiceGallery({ service }: ServiceGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Reset selected image index when service changes
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [service.id]);

  const selectedImage = service.images[selectedImageIndex]

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? service.images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev === service.images.length - 1 ? 0 : prev + 1))
  }

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index)
  }

  return (
    <div className="space-y-6">
      {/* Featured Image */}
      <div className="relative mx-auto aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={selectedImage?.src || "/placeholder.svg"}
          alt={selectedImage?.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority={true}
        />

        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10 rounded-full bg-white/80 text-steel-900 opacity-80 backdrop-blur-sm hover:bg-white"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous image</span>
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10 rounded-full bg-white/80 text-steel-900 opacity-80 backdrop-blur-sm hover:bg-white"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-4 h-10 w-10 rounded-full bg-white/80 text-steel-900 opacity-80 backdrop-blur-sm hover:bg-white"
            >
              <Maximize className="h-5 w-5" />
              <span className="sr-only">View full size</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl">
            <DialogHeader>
              <DialogTitle>{selectedImage?.title}</DialogTitle>
              <DialogDescription>{service?.name} - Project Showcase</DialogDescription>
            </DialogHeader>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
              <Image
                src={selectedImage?.src || "/placeholder.svg"}
                alt={selectedImage?.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </DialogContent>
        </Dialog>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
          <h3 className="text-xl font-semibold">{selectedImage?.title}</h3>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mx-auto max-w-4xl">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300">
          {service.images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative aspect-video w-40 shrink-0 snap-center cursor-pointer overflow-hidden rounded-lg border-2 transition-all duration-200 md:w-48",
                selectedImageIndex === index ? "border-lime-500" : "border-transparent hover:border-lime-500/50",
              )}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 192px"
                priority={index < 3}
              />
              {selectedImageIndex === index && <div className="absolute inset-0 bg-lime-500/10" />}
            </div>
          ))}
        </div>
      </div>

      {/* Image Counter */}
      <div className="text-center text-sm text-steel-600">
        {selectedImageIndex + 1} of {service.images.length}
      </div>
    </div>
  )
} 