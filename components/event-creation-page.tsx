"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export function EventCreationPage({ id }: { id: string }) {
  const [eventName, setEventName] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  // For demo purposes
  const restaurant = {
    id: 1,
    name: "Starbucks Coffee",
    image: "/placeholder.svg?height=40&width=40",
  }

  return (
    <div className="flex flex-col h-screen bg-[#121212] text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#2A2A2A]">
        <Link href={`/restaurant/${id}`}>
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-lg font-semibold">Plan with Friends</h1>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div key={step} className={`w-2 h-2 rounded-full ${step === 1 ? "bg-[#E23744]" : "bg-[#444]"}`} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        <div className="bg-[#1E1E1E] rounded-xl p-4 shadow-md">
          <div className="mb-4">
            <label className="block text-sm text-[#AAA] mb-1">Event Name</label>
            <input
              type="text"
              placeholder="Friday Team Dinner"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="w-full bg-[#2A2A2A] border border-[#444] rounded-lg px-3 py-2 text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-[#AAA] mb-1">Date & Time</label>
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <div className="flex items-center bg-[#2A2A2A] border border-[#444] rounded-lg px-3 py-2">
                  <Calendar className="w-4 h-4 text-[#AAA] mr-2" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-transparent border-none outline-none text-white w-full"
                  />
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="flex items-center bg-[#2A2A2A] border border-[#444] rounded-lg px-3 py-2">
                  <Clock className="w-4 h-4 text-[#AAA] mr-2" />
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-transparent border-none outline-none text-white w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#AAA] mb-1">Restaurant</label>
            <div className="flex items-center bg-[#2A2A2A] border border-[#444] rounded-lg px-3 py-2">
              <div className="relative w-8 h-8 mr-2 rounded-full overflow-hidden">
                <Image
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span>{restaurant.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-[#2A2A2A]">
        <Link href={`/plan/${id}/invite`}>
          <button className="w-full bg-[#E23744] text-white py-3 rounded-lg font-semibold">Next: Invite</button>
        </Link>
      </div>
    </div>
  )
}
