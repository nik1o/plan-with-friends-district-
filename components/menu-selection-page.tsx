"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronDown, ChevronUp, Minus, Plus } from "lucide-react"

export function MenuSelectionPage({ id }: { id: string }) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["starters"])
  const [quantities, setQuantities] = useState<Record<string, number>>({})

  const toggleSection = (section: string) => {
    if (expandedSections.includes(section)) {
      setExpandedSections(expandedSections.filter((s) => s !== section))
    } else {
      setExpandedSections([...expandedSections, section])
    }
  }

  const updateQuantity = (itemId: string, delta: number) => {
    const currentQuantity = quantities[itemId] || 0
    const newQuantity = Math.max(0, currentQuantity + delta)

    setQuantities({
      ...quantities,
      [itemId]: newQuantity,
    })
  }

  // Calculate totals
  const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0)
  const totalAmount = Object.entries(quantities).reduce((sum, [itemId, qty]) => {
    const item = [...menuItems.starters, ...menuItems.mains, ...menuItems.drinks].find((item) => item.id === itemId)
    return sum + (item ? item.price * qty : 0)
  }, 0)

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
        <Link href={`/plan/${id}/invite`}>
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-lg font-semibold">Plan with Friends</h1>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full ${step === 3 ? "bg-[#E23744]" : step < 3 ? "bg-[#E23744]" : "bg-[#444]"}`}
            />
          ))}
        </div>
      </div>

      {/* Restaurant Banner */}
      <div className="p-4 bg-[#1E1E1E]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
              <Image src={restaurant.image || "/placeholder.svg"} alt={restaurant.name} fill className="object-cover" />
            </div>
            <h2 className="font-semibold">{restaurant.name}</h2>
          </div>
          <button className="text-sm text-[#E23744]">Change</button>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="flex-1 overflow-y-auto">
        {/* Starters Section */}
        <div className="border-b border-[#2A2A2A]">
          <div className="flex items-center justify-between p-4" onClick={() => toggleSection("starters")}>
            <h3 className="font-semibold">Starters</h3>
            {expandedSections.includes("starters") ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>

          {expandedSections.includes("starters") && (
            <div className="px-4 pb-4">
              {menuItems.starters.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  quantity={quantities[item.id] || 0}
                  onIncrease={() => updateQuantity(item.id, 1)}
                  onDecrease={() => updateQuantity(item.id, -1)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Mains Section */}
        <div className="border-b border-[#2A2A2A]">
          <div className="flex items-center justify-between p-4" onClick={() => toggleSection("mains")}>
            <h3 className="font-semibold">Mains</h3>
            {expandedSections.includes("mains") ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>

          {expandedSections.includes("mains") && (
            <div className="px-4 pb-4">
              {menuItems.mains.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  quantity={quantities[item.id] || 0}
                  onIncrease={() => updateQuantity(item.id, 1)}
                  onDecrease={() => updateQuantity(item.id, -1)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Drinks Section */}
        <div className="border-b border-[#2A2A2A]">
          <div className="flex items-center justify-between p-4" onClick={() => toggleSection("drinks")}>
            <h3 className="font-semibold">Drinks</h3>
            {expandedSections.includes("drinks") ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>

          {expandedSections.includes("drinks") && (
            <div className="px-4 pb-4">
              {menuItems.drinks.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  quantity={quantities[item.id] || 0}
                  onIncrease={() => updateQuantity(item.id, 1)}
                  onDecrease={() => updateQuantity(item.id, -1)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-[#2A2A2A]">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm">
            <span>4 people • </span>
            <span>₹{totalAmount} total • </span>
            <span>₹{totalAmount > 0 ? Math.round(totalAmount / 4) : 0} each</span>
          </div>
        </div>
        <Link href={`/plan/${id}/review`}>
          <button
            className={`w-full py-3 rounded-lg font-semibold ${
              totalItems > 0 ? "bg-[#E23744] text-white" : "bg-[#555] text-[#AAA]"
            }`}
            disabled={totalItems === 0}
          >
            Next: Review
          </button>
        </Link>
      </div>
    </div>
  )
}

function MenuItem({
  item,
  quantity,
  onIncrease,
  onDecrease,
}: {
  item: any
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}) {
  return (
    <div className="flex items-center py-3 border-b border-[#2A2A2A] last:border-0">
      <div className="relative w-16 h-16 rounded-lg overflow-hidden mr-3">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-[#AAA]">{item.description}</p>
        <p className="text-sm font-semibold mt-1">₹{item.price}</p>
      </div>
      <div className="flex items-center">
        <button
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            quantity > 0 ? "bg-[#E23744]" : "bg-[#333] text-[#777]"
          }`}
          onClick={onDecrease}
          disabled={quantity === 0}
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button className="w-8 h-8 rounded-full bg-[#E23744] flex items-center justify-center" onClick={onIncrease}>
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

const menuItems = {
  starters: [
    {
      id: "s1",
      name: "Garlic Bread",
      description: "Toasted bread with garlic butter",
      price: 199,
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      id: "s2",
      name: "Bruschetta",
      description: "Toasted bread with tomatoes and herbs",
      price: 249,
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      id: "s3",
      name: "Chicken Wings",
      description: "Spicy chicken wings with dip",
      price: 349,
      image: "/placeholder.svg?height=64&width=64",
    },
  ],
  mains: [
    {
      id: "m1",
      name: "Margherita Pizza",
      description: "Classic cheese and tomato pizza",
      price: 399,
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      id: "m2",
      name: "Pasta Alfredo",
      description: "Creamy pasta with parmesan",
      price: 349,
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      id: "m3",
      name: "Chicken Burger",
      description: "Grilled chicken with lettuce and mayo",
      price: 299,
      image: "/placeholder.svg?height=64&width=64",
    },
  ],
  drinks: [
    {
      id: "d1",
      name: "Cappuccino",
      description: "Espresso with steamed milk",
      price: 199,
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      id: "d2",
      name: "Fresh Lime Soda",
      description: "Refreshing lime soda with mint",
      price: 149,
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      id: "d3",
      name: "Chocolate Shake",
      description: "Rich chocolate milkshake",
      price: 249,
      image: "/placeholder.svg?height=64&width=64",
    },
  ],
}
