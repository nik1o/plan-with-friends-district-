"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Share2, Star, Navigation, Phone } from "lucide-react"

export function RestaurantDetailPage({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState("all-offers")

  // For demo purposes, we'll just use the first restaurant
  const restaurant = {
    id: 1,
    name: "Starbucks Coffee",
    image: "/placeholder.svg?height=250&width=375",
    rating: 4.2,
    costForTwo: 400,
    distance: 1.2,
    discount: 20,
  }

  return (
    <div className="flex flex-col h-screen bg-[#121212] text-white">
      {/* Hero Image */}
      <div className="relative h-64 w-full">
        <Image src={restaurant.image || "/placeholder.svg"} alt={restaurant.name} fill className="object-cover" />
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
          <Link href="/">
            <div className="bg-black/50 rounded-full p-2">
              <ArrowLeft className="w-5 h-5" />
            </div>
          </Link>
          <div className="bg-black/50 rounded-full p-2">
            <Share2 className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="p-4">
        <h1 className="text-xl font-semibold">{restaurant.name}</h1>
        <div className="flex items-center mt-1 space-x-2 text-sm">
          <div className="flex items-center bg-[#267E3E] px-1.5 py-0.5 rounded text-white">
            <Star className="w-3 h-3 mr-0.5 fill-white" />
            <span>{restaurant.rating}</span>
          </div>
          <span>{restaurant.distance} km</span>
          <span>₹{restaurant.costForTwo} for two</span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-4">
          <button className="flex flex-col items-center">
            <div className="bg-[#1E1E1E] rounded-full p-2 mb-1">
              <Navigation className="w-5 h-5" />
            </div>
            <span className="text-xs">Directions</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="bg-[#1E1E1E] rounded-full p-2 mb-1">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs">Call now</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="bg-[#1E1E1E] rounded-full p-2 mb-1">
              <Share2 className="w-5 h-5" />
            </div>
            <span className="text-xs">Share</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-4 space-x-6 border-b border-[#2A2A2A] overflow-x-auto scrollbar-hide">
        <TabButton
          label="All offers"
          isActive={activeTab === "all-offers"}
          onClick={() => setActiveTab("all-offers")}
        />
        <TabButton label="Menu" isActive={activeTab === "menu"} onClick={() => setActiveTab("menu")} />
        <TabButton label="Gallery" isActive={activeTab === "gallery"} onClick={() => setActiveTab("gallery")} />
        <TabButton label="Reviews" isActive={activeTab === "reviews"} onClick={() => setActiveTab("reviews")} />
        <TabButton label="About" isActive={activeTab === "about"} onClick={() => setActiveTab("about")} />
      </div>

      {/* Content Area (placeholder) */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="bg-[#1E1E1E] rounded-xl p-4 mb-4">
          <h3 className="font-semibold mb-2">50% OFF up to ₹100</h3>
          <p className="text-sm text-[#DDD]">Use code WELCOME50</p>
        </div>
        <div className="bg-[#1E1E1E] rounded-xl p-4">
          <h3 className="font-semibold mb-2">20% OFF up to ₹200</h3>
          <p className="text-sm text-[#DDD]">Use code ZOMATO20</p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-4 border-t border-[#2A2A2A]">
        <Link href={`/plan/${id}/create`}>
          <button className="w-full bg-[#E23744] text-white py-3 rounded-lg font-semibold">Plan with Friends</button>
        </Link>
      </div>
    </div>
  )
}

function TabButton({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      className={`py-3 font-semibold text-sm whitespace-nowrap relative ${isActive ? "text-[#E23744]" : "text-[#AAA]"}`}
      onClick={onClick}
    >
      {label}
      {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E23744]" />}
    </button>
  )
}
