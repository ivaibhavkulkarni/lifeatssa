"use client"

export default function Button({ color, onClick, style }) {
  return (
    <button
      onClick={onClick}
      className={`${color} w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      style={style}
    >
      <span className="sr-only">Interactive button</span>
    </button>
  )
}

