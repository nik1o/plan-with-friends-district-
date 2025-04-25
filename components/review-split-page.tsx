"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Edit2 } from "lucide-react"

export function ReviewSplitPage({ id }: { id: string }) {
  const [showAdjustModal, setShowAdjustModal] = useState(false)

  return (
    <div className="flex flex-col h-screen bg-[#121212] text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#2A2A2A]">
        <Link href={`/plan/${id}/menu`}>
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-lg font-semibold">Plan with Friends</h1>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full ${step === 4 ? "bg-[#E23744]" : step < 4 ? "bg-[#E23744]" : "bg-[#444]"}`}
            />
          ))}
        </div>
      </div>

      {/* Event Summary */}
      <div className="p-4 bg-[#1E1E1E]">
        <div className="flex items-center mb-2">
          <div className="flex -space-x-2 mr-3">
            {[1, 2, 3, 4].map((person) => (
              <div key={person} className="relative w-8 h-8 rounded-full border-2 border-[#1E1E1E] overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=32&width=32`}
                  alt={`Person ${person}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <h2 className="font-semibold">Friday Team Dinner</h2>
        </div>
        <div className="flex text-sm text-[#AAA]">
          <div className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Fri, 22 Apr</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>7:30 PM</span>
          </div>
        </div>
      </div>

      {/* Bill Details */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="bg-[#1E1E1E] rounded-xl p-4 mb-4">
          <h3 className="font-semibold mb-3">Bill Details</h3>

          {/* Person 1 */}
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="relative w-6 h-6 rounded-full overflow-hidden mr-2">
                <Image src="/placeholder.svg?height=24&width=24" alt="Rahul" fill className="object-cover" />
              </div>
              <span className="font-medium">Rahul</span>
            </div>
            <div className="pl-8 text-sm">
              <div className="flex justify-between mb-1">
                <span className="text-[#AAA]">Garlic Bread x1</span>
                <span>₹199</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-[#AAA]">Cappuccino x1</span>
                <span>₹199</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-[#2A2A2A]">
                <span>Subtotal</span>
                <span className="font-semibold">₹398</span>
              </div>
            </div>
          </div>

          {/* Person 2 */}
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="relative w-6 h-6 rounded-full overflow-hidden mr-2">
                <Image src="/placeholder.svg?height=24&width=24" alt="Priya" fill className="object-cover" />
              </div>
              <span className="font-medium">Priya</span>
            </div>
            <div className="pl-8 text-sm">
              <div className="flex justify-between mb-1">
                <span className="text-[#AAA]">Pasta Alfredo x1</span>
                <span>₹349</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-[#AAA]">Fresh Lime Soda x1</span>
                <span>₹149</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-[#2A2A2A]">
                <span>Subtotal</span>
                <span className="font-semibold">₹498</span>
              </div>
            </div>
          </div>

          {/* Person 3 */}
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="relative w-6 h-6 rounded-full overflow-hidden mr-2">
                <Image src="/placeholder.svg?height=24&width=24" alt="Amit" fill className="object-cover" />
              </div>
              <span className="font-medium">Amit</span>
            </div>
            <div className="pl-8 text-sm">
              <div className="flex justify-between mb-1">
                <span className="text-[#AAA]">Chicken Burger x1</span>
                <span>₹299</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-[#AAA]">Chocolate Shake x1</span>
                <span>₹249</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-[#2A2A2A]">
                <span>Subtotal</span>
                <span className="font-semibold">₹548</span>
              </div>
            </div>
          </div>

          {/* Person 4 */}
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="relative w-6 h-6 rounded-full overflow-hidden mr-2">
                <Image src="/placeholder.svg?height=24&width=24" alt="Neha" fill className="object-cover" />
              </div>
              <span className="font-medium">Neha</span>
            </div>
            <div className="pl-8 text-sm">
              <div className="flex justify-between mb-1">
                <span className="text-[#AAA]">Margherita Pizza x1</span>
                <span>₹399</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-[#AAA]">Bruschetta x1</span>
                <span>₹249</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-[#2A2A2A]">
                <span>Subtotal</span>
                <span className="font-semibold">₹648</span>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between pt-3 border-t border-[#2A2A2A] font-semibold">
            <span>Total</span>
            <span>₹2,092</span>
          </div>
        </div>

        {/* Adjust Split */}
        <button
          className="flex items-center justify-center w-full py-3 text-[#E23744]"
          onClick={() => setShowAdjustModal(true)}
        >
          <Edit2 className="w-4 h-4 mr-2" />
          Adjust split
        </button>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-[#2A2A2A]">
        <Link href={`/plan/${id}/payment`}>
          <button className="w-full bg-[#E23744] text-white py-3 rounded-lg font-semibold">Next: Pay</button>
        </Link>
      </div>

      {/* Adjust Split Modal */}
      {showAdjustModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1E1E1E] rounded-xl w-full max-w-sm">
            <div className="p-4 border-b border-[#2A2A2A]">
              <h3 className="font-semibold">Adjust Split</h3>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="block text-sm text-[#AAA] mb-2">Rahul</label>
                <div className="flex items-center">
                  <span className="mr-2">₹</span>
                  <input
                    type="number"
                    defaultValue="398"
                    className="w-full bg-[#2A2A2A] border border-[#444] rounded-lg px-3 py-2 text-white"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-[#AAA] mb-2">Priya</label>
                <div className="flex items-center">
                  <span className="mr-2">₹</span>
                  <input
                    type="number"
                    defaultValue="498"
                    className="w-full bg-[#2A2A2A] border border-[#444] rounded-lg px-3 py-2 text-white"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-[#AAA] mb-2">Amit</label>
                <div className="flex items-center">
                  <span className="mr-2">₹</span>
                  <input
                    type="number"
                    defaultValue="548"
                    className="w-full bg-[#2A2A2A] border border-[#444] rounded-lg px-3 py-2 text-white"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-[#AAA] mb-2">Neha</label>
                <div className="flex items-center">
                  <span className="mr-2">₹</span>
                  <input
                    type="number"
                    defaultValue="648"
                    className="w-full bg-[#2A2A2A] border border-[#444] rounded-lg px-3 py-2 text-white"
                  />
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-[#2A2A2A] flex space-x-3">
              <button
                className="flex-1 bg-transparent border border-[#444] text-white py-2 rounded-lg font-semibold"
                onClick={() => setShowAdjustModal(false)}
              >
                Cancel
              </button>
              <button
                className="flex-1 bg-[#E23744] text-white py-2 rounded-lg font-semibold"
                onClick={() => setShowAdjustModal(false)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
