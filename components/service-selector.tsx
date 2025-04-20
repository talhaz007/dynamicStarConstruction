"use client"

import { motion } from "framer-motion"

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
              "relative rounded-full px-6 py-2 text-sm font-medium transition-all md:text-base",
              "hover:bg-lime-500/10",
              selectedService.id === service.id
                ? "bg-lime-500 text-white"
                : "bg-gray-100 text-steel-600",
            )}
          >
            {selectedService.id === service.id && (
              <motion.div
                layoutId="activeServiceIndicator"
                className="absolute inset-0 rounded-full bg-lime-500"
                initial={false}
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{service.name}</span>
          </button>
        ))}
      </div>

      {/* <div className="text-center">
        <p className="mx-auto max-w-2xl text-lg text-steel-600">{selectedService.description}</p>
      </div> */}
    </div>
  )
} 