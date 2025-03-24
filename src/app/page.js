"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "../components/navbar"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to 8-button layout by default
    router.push("life@ssa-students")
  }, [router])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Life@SSA Loading</h1>
          <p className="text-gray-600 mb-8">Loading default layout...</p>
        </div>
      </div>
    </div>
  )
}

