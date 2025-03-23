"use client"

import { useState } from "react"
import Button from "../../components/Button"
import ImageCarousel from "../../components/image-carousel"
import Navbar from "../../components/navbar"

const buttonColors = [
  {
    color: "bg-gradient-to-r from-red-500 to-red-600",
    gradient: "from-red-500 to-red-600",
    title: "Urban Architecture",
    description: "Modern and historical buildings from cities around the world.",
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
    title: "Technology Innovations",
    description: "Cutting-edge technology and futuristic concepts.",
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
    title: "Sustainable Living",
    description: "Eco-friendly practices and green technology solutions.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    color: "bg-gradient-to-r from-yellow-400 to-yellow-500",
    gradient: "from-yellow-400 to-yellow-500",
    title: "Desert Landscapes",
    description: "Stunning desert scenery and unique geological formations.",
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
    title: "Space Exploration",
    description: "Images from space missions and astronomical discoveries.",
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
    title: "Art & Culture",
    description: "Artistic expressions and cultural celebrations from around the world.",
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
    title: "Historical Moments",
    description: "Significant events and landmarks throughout human history.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    color: "bg-gradient-to-r from-orange-500 to-orange-600",
    gradient: "from-orange-500 to-orange-600",
    title: "Culinary Delights",
    description: "Delicious food and culinary traditions from different cultures.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
]

export default function EightButtons() {
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
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Life@SSA Students</h2>

          {/* Desktop View - Circle Layout */}
          <div className="hidden md:block relative h-[60vh] max-h-[600px] mb-8">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="relative w-[700px] h-[350px]">
                {buttonColors.map((button, index) => {
                  const angle = (Math.PI / (buttonColors.length - 1)) * index
                  const radius = 350
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

          {/* Mobile View - Different Layout */}
          <div className="md:hidden">
            {/* Top Row - 3 buttons */}
            <div className="flex justify-center gap-4 mb-8">
              {buttonColors.slice(0, 3).map((button, index) => (
                <Button key={index} color={button.color} onClick={() => handleButtonClick(index)} />
              ))}
            </div>

            {/* Middle Row - 2 buttons with more space */}
            <div className="flex justify-between px-12 mb-8">
              {buttonColors.slice(3, 5).map((button, index) => (
                <Button key={index + 3} color={button.color} onClick={() => handleButtonClick(index + 3)} />
              ))}
            </div>

            {/* Bottom Row - 3 buttons */}
            <div className="flex justify-center gap-4">
              {buttonColors.slice(5, 8).map((button, index) => (
                <Button key={index + 5} color={button.color} onClick={() => handleButtonClick(index + 5)} />
              ))}
            </div>
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

