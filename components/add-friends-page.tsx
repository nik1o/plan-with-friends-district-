"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Search, Check } from "lucide-react"

export function AddFriendsPage({ id }: { id: string }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])

  const toggleContact = (contactId: string) => {
    if (selectedContacts.includes(contactId)) {
      setSelectedContacts(selectedContacts.filter((id) => id !== contactId))
    } else {
      setSelectedContacts([...selectedContacts, contactId])
    }
  }

  return (
    <div className="flex flex-col h-screen bg-[#121212] text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#2A2A2A]">
        <Link href={`/plan/${id}/create`}>
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-lg font-semibold">Plan with Friends</h1>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full ${step === 2 ? "bg-[#E23744]" : step < 2 ? "bg-[#E23744]" : "bg-[#444]"}`}
            />
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="flex items-center bg-[#1E1E1E] rounded-lg px-3 py-2">
          <Search className="w-5 h-5 text-[#999]" />
          <input
            type="text"
            placeholder="Search contacts"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none ml-2 text-sm flex-1 text-[#DDD]"
          />
        </div>
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto px-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center py-3 border-b border-[#2A2A2A]"
            onClick={() => toggleContact(contact.id)}
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
              <Image src={contact.avatar || "/placeholder.svg"} alt={contact.name} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{contact.name}</h3>
              <p className="text-sm text-[#AAA]">{contact.phone}</p>
            </div>
            <div
              className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                selectedContacts.includes(contact.id) ? "bg-[#E23744] border-[#E23744]" : "border-[#555]"
              }`}
            >
              {selectedContacts.includes(contact.id) && <Check className="w-4 h-4 text-white" />}
            </div>
          </div>
        ))}
      </div>

      {/* Share Link */}
      <div className="p-4 border-t border-[#2A2A2A]">
        <button className="w-full text-[#DDD] text-center py-2 mb-4">Or share invite link</button>
        <Link href={`/plan/${id}/menu`}>
          <button
            className={`w-full py-3 rounded-lg font-semibold ${
              selectedContacts.length > 0 ? "bg-[#E23744] text-white" : "bg-[#555] text-[#AAA]"
            }`}
            disabled={selectedContacts.length === 0}
          >
            Next: Menu
          </button>
        </Link>
      </div>
    </div>
  )
}

const contacts = [
  {
    id: "1",
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "Priya Patel",
    phone: "+91 87654 32109",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "Amit Kumar",
    phone: "+91 76543 21098",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    name: "Neha Singh",
    phone: "+91 65432 10987",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    name: "Vikram Malhotra",
    phone: "+91 54321 09876",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "6",
    name: "Ananya Desai",
    phone: "+91 43210 98765",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]
