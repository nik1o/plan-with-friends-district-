"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CreditCard, Wallet, QrCode } from "lucide-react"

export function PaymentEntryPage({ id }: { id: string }) {
  const [paymentMethod, setPaymentMethod] = useState<string>("card")

  return (
    <div className="flex flex-col h-screen bg-[#121212] text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#2A2A2A]">
        <Link href={`/plan/${id}/review`}>
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-lg font-semibold">Plan with Friends</h1>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full ${step === 5 ? "bg-[#E23744]" : step < 5 ? "bg-[#E23744]" : "bg-[#444]"}`}
            />
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="bg-[#1E1E1E] rounded-xl overflow-hidden mb-4">
          {/* Credit Card */}
          <div className="border-b border-[#2A2A2A]">
            <div className="flex items-center p-4" onClick={() => setPaymentMethod("card")}>
              <div
                className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                  paymentMethod === "card" ? "border-[#E23744]" : "border-[#555]"
                }`}
              >
                {paymentMethod === "card" && <div className="w-3 h-3 rounded-full bg-[#E23744]" />}
              </div>
              <CreditCard className="w-5 h-5 mr-3" />
              <span className="font-semibold">Credit / Debit Card</span>
            </div>

            {paymentMethod === "card" && (
              <div className="px-4 pb-4 pl-12">
                <div className="mb-3">
                  <label className="block text-sm text-[#AAA] mb-1">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full bg-[#2A2A2A] border border-[#444] rounded-lg px-3 py-2 text-white"
                  />
                </div>
                <div className="flex space-x-3 mb-3">
                  <div className="flex-1">
                    <label className="block text-sm text-[#AAA] mb-1">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full bg-[#2A2A2A] border border-[#444] rounded-lg px-3 py-2 text-white"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-[#AAA] mb-1">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full bg-[#2A2A2A] border border-[#444] rounded-lg px-3 py-2 text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#AAA] mb-1">Name on Card</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#2A2A2A] border border-[#444] rounded-lg px-3 py-2 text-white"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Wallet */}
          <div className="border-b border-[#2A2A2A]">
            <div className="flex items-center p-4" onClick={() => setPaymentMethod("wallet")}>
              <div
                className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                  paymentMethod === "wallet" ? "border-[#E23744]" : "border-[#555]"
                }`}
              >
                {paymentMethod === "wallet" && <div className="w-3 h-3 rounded-full bg-[#E23744]" />}
              </div>
              <Wallet className="w-5 h-5 mr-3" />
              <span className="font-semibold">Wallet</span>
            </div>

            {paymentMethod === "wallet" && (
              <div className="px-4 pb-4 pl-12">
                <div className="flex items-center justify-between p-3 bg-[#2A2A2A] rounded-lg mb-2">
                  <span>District Pay</span>
                  <span className="text-sm text-[#AAA]">Balance: ₹1,500</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#2A2A2A] rounded-lg mb-2">
                  <span>Paytm</span>
                  <span className="text-sm text-[#AAA]">Link Account</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#2A2A2A] rounded-lg">
                  <span>PhonePe</span>
                  <span className="text-sm text-[#AAA]">Link Account</span>
                </div>
              </div>
            )}
          </div>

          {/* UPI */}
          <div>
            <div className="flex items-center p-4" onClick={() => setPaymentMethod("upi")}>
              <div
                className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                  paymentMethod === "upi" ? "border-[#E23744]" : "border-[#555]"
                }`}
              >
                {paymentMethod === "upi" && <div className="w-3 h-3 rounded-full bg-[#E23744]" />}
              </div>
              <QrCode className="w-5 h-5 mr-3" />
              <span className="font-semibold">UPI</span>
            </div>

            {paymentMethod === "upi" && (
              <div className="px-4 pb-4 pl-12">
                <div className="mb-3">
                  <label className="block text-sm text-[#AAA] mb-1">UPI ID</label>
                  <input
                    type="text"
                    placeholder="username@upi"
                    className="w-full bg-[#2A2A2A] border border-[#444] rounded-lg px-3 py-2 text-white"
                  />
                </div>
                <div className="text-center p-4">
                  <p className="text-sm text-[#AAA] mb-2">Or scan QR code with any UPI app</p>
                  <div className="w-40 h-40 bg-white mx-auto flex items-center justify-center">
                    <span className="text-black text-xs">QR Code Placeholder</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-[#2A2A2A]">
        <Link href={`/plan/${id}/confirmation`}>
          <button className="w-full bg-[#E23744] text-white py-3 rounded-lg font-semibold">Confirm & Pay ₹2,092</button>
        </Link>
      </div>
    </div>
  )
}
