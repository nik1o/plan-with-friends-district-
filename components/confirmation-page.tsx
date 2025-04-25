"use client"

import Link from "next/link"
import { CheckCircle, Calendar, Clock, MapPin } from "lucide-react"

export function ConfirmationPage({ id }: { id: string }) {
  return (
    <div className="flex flex-col h-screen bg-[#121212] text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#2A2A2A]">
        <div className="w-5" />
        <h1 className="text-lg font-semibold">Plan with Friends</h1>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div key={step} className="w-2 h-2 rounded-full bg-[#E23744]" />
          ))}
        </div>
      </div>

      {/* Success Animation */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <CheckCircle className="w-24 h-24 text-[#E23744] mb-6" />
        <h2 className="text-2xl font-semibold mb-2">Payment Successful!</h2>
        <p className="text-[#AAA] mb-8">Your split-pay group booking is confirmed.</p>

        {/* Details Card */}
        <div className="bg-[#1E1E1E] rounded-xl p-4 w-full max-w-xs">
          <h3 className="font-semibold mb-3">Friday Team Dinner</h3>
          <div className="grid gap-2 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-[#AAA]" />
              <span>Fri, 22 Apr</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-[#AAA]" />
              <span>7:30 PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-[#AAA]" />
              <span>Starbucks Coffee</span>
            </div>
            <div className="border-t border-[#2A2A2A] pt-2 mt-2">
              <div className="flex justify-between">
                <span>Total paid</span>
                <span className="font-semibold">₹2,092</span>
              </div>
              <div className="flex justify-between">
                <span>Your share</span>
                <span className="font-semibold">₹523</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="p-4 grid gap-3">
        <Link href="/my-plans">
          <button className="w-full bg-[#E23744] text-white py-3 rounded-lg font-semibold">View My Plans</button>
        </Link>
        <Link href="/">
          <button className="w-full text-[#DDD] py-2">Back to Dining</button>
        </Link>
      </div>
    </div>
  )
}
