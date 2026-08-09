"use client"

import { useEffect, useState } from "react"

export default function Time() {
  const [timeNow, setTimeNow] = useState("")

  useEffect(() => {
    const update = () => setTimeNow(new Date().toLocaleTimeString())
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="time hidden sm:block fixed bottom-0 right-0 z-[9999] ">
      <div className="m-5 py-2 px-4 bg-white/5 backdrop-blur-md text-[#E5E5E5] rounded-full text-sm border border-[#00FF00]/20">
        <p>Pune IST, India — {timeNow}</p>
      </div>
    </div>
  )
}