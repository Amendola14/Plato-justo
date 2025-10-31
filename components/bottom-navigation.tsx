"use client"

import { Home, BarChart3, Heart, User } from "lucide-react"
import type { NavigationTab } from "./main-app"

interface BottomNavigationProps {
  activeTab: NavigationTab
  onTabChange: (tab: NavigationTab) => void
}

export default function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: "home" as NavigationTab, icon: Home, label: "Inicio" },
    { id: "graphics" as NavigationTab, icon: BarChart3, label: "Gráficos" },
    { id: "favorites" as NavigationTab, icon: Heart, label: "Favoritos" },
    { id: "account" as NavigationTab, icon: User, label: "Cuenta" },
  ]

  const handleTabClick = (tabId: NavigationTab) => {
    onTabChange(tabId)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-orange-500 px-6 py-3 shadow-lg">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-col items-center transition-all duration-200 ${
                isActive ? "scale-110" : "hover:scale-105"
              }`}
            >
              <Icon className={`w-6 h-6 mb-1 ${isActive ? "text-white" : "text-orange-200"}`} />
              <span className={`text-xs font-medium ${isActive ? "text-white" : "text-orange-200"}`}>{tab.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
