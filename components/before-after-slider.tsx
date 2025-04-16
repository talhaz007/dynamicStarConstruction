"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  height?: number
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  height = 400,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      setSliderPosition(Math.min(Math.max(x, 0), 100))
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement> | TouchEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100
      setSliderPosition(Math.min(Math.max(x, 0), 100))
    }
  }

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false)
    }

    const handleMouseMoveGlobal = (e: MouseEvent) => {
      if (isDragging) {
        handleMouseMove(e)
      }
    }

    window.addEventListener("mouseup", handleMouseUpGlobal)
    window.addEventListener("mousemove", handleMouseMoveGlobal)

    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal)
      window.removeEventListener("mousemove", handleMouseMoveGlobal)
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-xl"
      style={{ height: `${height}px` }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Full) */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={afterImage || "/placeholder.svg"}
          alt={afterLabel}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-4 right-4 rounded-full bg-lime-500 px-3 py-1 text-sm font-medium text-white">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div className="absolute inset-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image
          src={beforeImage || "/placeholder.svg"}
          alt={beforeLabel}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-4 left-4 rounded-full bg-steel-800 px-3 py-1 text-sm font-medium text-white">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Control */}
      <div
        className="absolute bottom-0 top-0 z-10 w-1 cursor-ew-resize bg-white"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-lime-500 shadow-lg">
          <ArrowRight className="h-4 w-4 -rotate-180 text-white" />
          <ArrowRight className="h-4 w-4 text-white" />
        </div>
      </div>
    </div>
  )
}
