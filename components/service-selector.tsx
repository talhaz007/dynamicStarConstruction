"use client"

import { cn } from "@/lib/utils"

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

interface ServiceSelectorProps {
  services: Service[]
  selectedService: Service
  onSelectService: (service: Service) => void
}

export function ServiceSelector({ services, selectedService, onSelectService }: ServiceSelectorProps) {
  return (
    <div className="flex flex-col space-y-6 md:space-y-8">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onSelectService(service)}
            className={cn(
              "relative rounded-full px-6 py-2 text-sm font-medium transition-colors duration-150 md:text-base",
              selectedService.id === service.id
                ? "bg-lime-500 text-white"
                : "bg-gray-100 text-steel-600 hover:bg-lime-500/10 active:bg-lime-500/20",
            )}
          >
            {service.name}
          </button>
        ))}
      </div>

      {/* <div className="text-center">
        <p className="mx-auto max-w-2xl text-lg text-steel-600">{selectedService.description}</p>
      </div> */}
    </div>
  )
} 