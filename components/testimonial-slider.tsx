"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Hometown, ST",
    image: "/images/testimonial-1.webp",
    text: "We couldn't be happier with our new siding and windows. The team was professional, clean, and completed the work ahead of schedule. Our home looks brand new and we've already noticed savings on our energy bills!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    location: "Springfield, ST",
    image: "/images/testimonial-2.webp",
    text: "After getting quotes from several contractors, we chose Premium Home Exteriors for our roof replacement. Their attention to detail and quality materials made all the difference. No more leaks and our home looks fantastic!",
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Williams",
    location: "Oakwood, ST",
    image: "/images/testimonial-3.webp",
    text: "The masonry work they did on our front entrance transformed our home's curb appeal. The stonework is beautiful and the crew was respectful of our property throughout the entire project. Highly recommend!",
    rating: 5,
  },
]

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  const next = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((current + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <Card className="overflow-hidden border-none bg-gradient-to-br from-steel-800 to-steel-900 shadow-2xl">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
            <div className="mb-8 flex-shrink-0 md:mb-0">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-lime-400 p-1">
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-6 flex items-center">
                <Quote className="mr-2 h-8 w-8 text-lime-400" strokeWidth={1.5} />
              </div>
              <p className="mb-8 text-xl italic leading-relaxed text-gray-200 transition-opacity duration-300">
                {testimonials[current].text}
              </p>
              <div>
                <p className="font-display text-lg font-semibold text-white">{testimonials[current].name}</p>
                <p className="text-sm text-gray-300">{testimonials[current].location}</p>
              </div>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 flex justify-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-none bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
          onClick={() => {
            setAutoplay(false)
            prev()
          }}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <div className="flex items-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index ? "w-8 bg-lime-400" : "w-2.5 bg-white/30"
              }`}
              onClick={() => {
                setAutoplay(false)
                setCurrent(index)
              }}
            >
              <span className="sr-only">Testimonial {index + 1}</span>
            </button>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-none bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
          onClick={() => {
            setAutoplay(false)
            next()
          }}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}
