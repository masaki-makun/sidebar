"use client"
import { ChevronDown, ChevronLeft } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"

interface NavItem {
  name: string
  icon?: React.ReactNode
  children?: NavItem[]
  count?: number
  importantIcon?: boolean
}

const navItems: NavItem[] = [
  {
    name: "Overview",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    name: "Cards",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
    children: [
      { name: "Physical", count: 18, importantIcon: false },
      { name: "Digital", count: 40, importantIcon: false },
      { name: "In production", count: 7, importantIcon: false },
    ],
  },
  {
    name: "Transactions",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
    children: [
      { name: "Needs review", count: 12, importantIcon: true },
      { name: "Out of policy", count: 4, importantIcon: false },
      { name: "Declined", count: 6, importantIcon: false },
    ],
  },
  {
    name: "Bill Pay",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    children: [
      { name: "Drafts", count: 5, importantIcon: false },
      { name: "Approvals", importantIcon: false },
      { name: "Payments", importantIcon: false },
      { name: "Paid", importantIcon: false },
    ],
  },
  {
    name: "Vendors",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    count: 8,
  },
  {
    name: "Reimbursements",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
    children: [
      { name: "Needs review", count: 10, importantIcon: true },
      { name: "Pending", count: 11, importantIcon: false },
      { name: "History", importantIcon: false },
    ],
  },
  {
    name: "Accounting",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    children: [
      { name: "Raimbursements", importantIcon: false },
      { name: "Payments", importantIcon: false },
    ],
  },
  {
    name: "Members",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    children: [
      { name: "All members", count: 84, importantIcon: false },
      { name: "Pending", count: 4, importantIcon: false },
    ],
  },
]

const SideBar: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [activeItem, setActiveItem] = useState<string>("Overview")
  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName)
    setExpandedItem(expandedItem === itemName ? null : itemName)
  }

  return (
    <>
      <nav className="relative flex h-[800px] w-[310px] flex-col justify-between overflow-y-hidden rounded-md bg-containerBackground shadow-lg">
        <div className="max-h-[700px]">
          <div className="border-b p-4 text-primary">
            <Link href="#" className="font-semibold text-primary transition-opacity hover:opacity-70">
              Sidebar UI
            </Link>
          </div>
          <ul className="p-4">
            {navItems.map((item) => (
              <li key={item.name} className="text-secondary transition duration-300 ease-in">
                <button
                  className={`flex w-full items-center justify-between rounded-md p-4 text-left transition duration-300 ease-in-out ${
                    hoveredItem === item.name ? "bg-gray-100" : ""
                  } ${activeItem === item.name ? "bg-white text-black" : ""}`}
                  onClick={() => handleItemClick(item.name)}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center">
                    <span className={`mr-3 ${activeItem === item.name ? "bg-white text-black" : ""}`}>{item.icon}</span>
                    {item.name}
                  </div>
                  <div className="flex items-center">
                    {item.count !== undefined && <span className="text-gray-500">{item.count}</span>}
                    {item.children &&
                      (expandedItem === item.name ? <ChevronDown size={16} /> : <ChevronLeft size={16} />)}
                  </div>
                </button>
                {item.children && expandedItem === item.name && (
                  <ul className="pl-12">
                    {item.children.map((child) => (
                      <li key={child.name} className="">
                        <button
                          className={`flex w-full items-center justify-between rounded-md p-4 text-left transition-all ${hoveredItem === child.name ? "bg-gray-100" : ""} ${activeItem === child.name ? "bg-white text-black" : ""}`}
                          onClick={() => setActiveItem(child.name)}
                          onMouseEnter={() => setHoveredItem(child.name)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <span>{child.name}</span>
                          {child.count !== undefined && <span className="text-gray-500">{child.count}</span>}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t p-4 text-primary">
          <Link href="#" className="flex flex-row items-center justify-start gap-4 transition-opacity hover:opacity-70">
            <div className="">
              <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-gray-300">
                <p className="font-semibold text-secondary">D</p>
              </div>
            </div>
            <div className="">
              <p className="text-md font-semibold">Daniel Moss</p>
              <p className="text-sm text-secondary">danielmoss.studio@gmail.com</p>
            </div>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default SideBar
