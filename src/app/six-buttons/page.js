"use client"

import { useState } from "react"
import Button from "../../components/Button"
import ImageCarousel from "../../components/image-carousel"
import Navbar from "../../components/navbar"

// Using only 6 button colors
const buttonColors = [
  {
    color: "bg-gradient-to-r from-red-500 to-red-600",
    gradient: "from-red-500 to-red-600",
    title: "Nature Gallery",
    description: "A collection of beautiful nature landscapes from around the world.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    color: "bg-gradient-to-r from-blue-500 to-blue-600",
    gradient: "from-blue-500 to-blue-600",
    title: "Ocean Life",
    description: "Explore the wonders of marine life and underwater ecosystems.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    color: "bg-gradient-to-r from-green-500 to-green-600",
    gradient: "from-green-500 to-green-600",
    title: "Forest Adventures",
    description: "Journey through dense forests and discover hidden wildlife.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    color: "bg-gradient-to-r from-purple-500 to-purple-600",
    gradient: "from-purple-500 to-purple-600",
    title: "Night Sky",
    description: "Stunning views of stars, galaxies, and cosmic phenomena.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    color: "bg-gradient-to-r from-pink-500 to-pink-600",
    gradient: "from-pink-500 to-pink-600",
    title: "Floral Collection",
    description: "Beautiful flowers and plants from gardens around the world.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    color: "bg-gradient-to-r from-indigo-500 to-indigo-600",
    gradient: "from-indigo-500 to-indigo-600",
    title: "Mountain Peaks",
    description: "Majestic mountain ranges and breathtaking summit views.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
]

export default function SixButtons() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false)
  const [selectedButton, setSelectedButton] = useState(null)

  const handleButtonClick = (index) => {
    setSelectedButton(index)
    setIsCarouselOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">6 Button Layout</h2>

          {/* Desktop View - Semi-circle Layout */}
          <div className="hidden md:block relative h-[60vh] max-h-[600px] mb-8">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="relative w-[600px] h-[300px]">
                {buttonColors.map((button, index) => {
                  // For 6 buttons, we'll create a semi-circle
                  const angle = (Math.PI / (buttonColors.length - 1)) * index
                  const radius = 300
                  const x = Math.cos(angle) * radius
                  const y = -Math.sin(angle) * radius

                  return (
                    <Button
                      key={index}
                      color={button.color}
                      onClick={() => handleButtonClick(index)}
                      style={{
                        position: "absolute",
                        left: `${x + radius}px`,
                        top: `${y + radius}px`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile View - Grid Layout */}
          <div className="md:hidden grid grid-cols-2 gap-8 justify-items-center">
            {buttonColors.map((button, index) => (
              <Button key={index} color={button.color} onClick={() => handleButtonClick(index)} />
            ))}
          </div>
        </div>
      </div>

      {isCarouselOpen && selectedButton !== null && (
        <ImageCarousel
          buttonIndex={selectedButton}
          images={buttonColors[selectedButton].images}
          title={buttonColors[selectedButton].title}
          description={buttonColors[selectedButton].description}
          colorGradient={buttonColors[selectedButton].gradient}
          onClose={() => setIsCarouselOpen(false)}
        />
      )}
    </div>
  )
}

