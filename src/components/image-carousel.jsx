"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function ImageCarousel({ buttonIndex, images, title, description, onClose, colorGradient }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl overflow-hidden">
        <div className={`bg-gradient-to-r ${colorGradient} p-4 flex justify-between items-center`}>
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-700 mb-6">{description}</p>

          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Carousel image ${index + 1}`}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          <div className="flex justify-end mt-6">
            <button
              onClick={onClose}
              className={`bg-gradient-to-r ${colorGradient} text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-200`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

