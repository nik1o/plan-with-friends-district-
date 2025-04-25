"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, Star } from "lucide-react"

export function DiningListingPage() {
  const [activeTab, setActiveTab] = useState("dining")

  return (
    <div className="flex flex-col h-screen bg-[#121212] text-white">
      {/* Search Bar */}
      <div className="px-4 pt-12 pb-3">
        <div className="flex items-center bg-[#1E1E1E] rounded-full px-4 py-2.5">
          <Search className="w-5 h-5 text-[#999]" />
          <input
            type="text"
            placeholder="Search for 'Lunch Places in Town'"
            className="bg-transparent border-none outline-none ml-2 text-sm flex-1 text-[#DDD]"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-4 space-x-6 border-b border-[#2A2A2A]">
        <TabButton label="For you" isActive={activeTab === "for-you"} onClick={() => setActiveTab("for-you")} />
        <TabButton label="Dining" isActive={activeTab === "dining"} onClick={() => setActiveTab("dining")} />
        <TabButton label="IPL" isActive={activeTab === "ipl"} onClick={() => setActiveTab("ipl")} />
        <TabButton label="Events" isActive={activeTab === "events"} onClick={() => setActiveTab("events")} />
        <TabButton label="Movies" isActive={activeTab === "movies"} onClick={() => setActiveTab("movies")} />
      </div>

      {/* Filters */}
      <div className="flex items-center px-4 py-3 space-x-3 overflow-x-auto scrollbar-hide">
        <div className="flex items-center space-x-1 bg-[#1E1E1E] px-3 py-1.5 rounded-full text-sm whitespace-nowrap">
          <span>Filters</span>
          <span className="text-xs bg-[#E23744] rounded-full w-5 h-5 flex items-center justify-center">3</span>
        </div>
        <div className="bg-[#1E1E1E] px-3 py-1.5 rounded-full text-sm whitespace-nowrap">50% OFF</div>
        <div className="bg-[#1E1E1E] px-3 py-1.5 rounded-full text-sm whitespace-nowrap">Near & Top Rated</div>
        <div className="bg-[#1E1E1E] px-3 py-1.5 rounded-full text-sm whitespace-nowrap">Pure Veg</div>
        <div className="bg-[#1E1E1E] px-3 py-1.5 rounded-full text-sm whitespace-nowrap">Outdoor Seating</div>
      </div>

      {/* Restaurant Cards */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        {restaurants.map((restaurant) => (
          <Link href={`/restaurant/${restaurant.id}`} key={restaurant.id}>
            <div className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-md relative">
              <div className="relative h-48 w-full">
                <Image
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                />
                {restaurant.discount && (
                  <div className="absolute bottom-3 right-0 bg-[#E23744] text-white px-2 py-1 text-xs font-semibold">
                    Flat {restaurant.discount}% OFF
                  </div>
                )}
              </div>
              <div className="p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-base">{restaurant.name}</h3>
                    <div className="flex items-center text-sm text-[#DDD] mt-1 space-x-2">
                      <div className="flex items-center bg-[#267E3E] px-1.5 py-0.5 rounded text-white">
                        <Star className="w-3 h-3 mr-0.5 fill-white" />
                        <span className="text-xs">{restaurant.rating}</span>
                      </div>
                      <span>₹{restaurant.costForTwo} for two</span>
                      <div className="flex items-center text-[#AAA]">
                        <MapPin className="w-3 h-3 mr-0.5" />
                        <span className="text-xs">{restaurant.distance} km</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-[#E23744] border border-[#E23744] rounded-lg px-2 py-1 text-xs font-semibold">
                    Plan with Friends
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function TabButton({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      className={`py-3 font-semibold text-sm relative ${isActive ? "text-[#E23744]" : "text-[#AAA]"}`}
      onClick={onClick}
    >
      {label}
      {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E23744]" />}
    </button>
  )
}

const restaurants = [
  {
    id: 1,
    name: "Starbucks Coffee",
    image: "/placeholder.svg?height=192&width=375",
    rating: 4.2,
    costForTwo: 400,
    distance: 1.2,
    discount: 20,
  },
  {
    id: 2,
    name: "The Bombay Canteen",
    image: "/placeholder.svg?height=192&width=375",
    rating: 4.5,
    costForTwo: 1200,
    distance: 2.5,
    discount: 15,
  },
  {
    id: 3,
    name: "Social",
    image: "/placeholder.svg?height=192&width=375",
    rating: 4.1,
    costForTwo: 800,
    distance: 0.8,
    discount: 30,
  },
]
