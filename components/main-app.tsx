"use client"

import { useState, useRef } from "react"
import HomeScreen from "./home-screen"
import GraphicsScreen from "./graphics-screen"
import FavoritesScreen from "./favorites-screen"
import AccountScreen from "./account-screen"
import BottomNavigation from "./bottom-navigation"

export type NavigationTab = "home" | "graphics" | "favorites" | "account"

interface MainAppProps {
  onLogout: () => void
}

export default function MainApp({ onLogout }: MainAppProps) {
  const [activeTab, setActiveTab] = useState<NavigationTab>("home")
  const homeScreenRef = useRef<{ resetToMain: () => void }>(null)

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen ref={homeScreenRef} />
      case "graphics":
        return <GraphicsScreen />
      case "favorites":
        return <FavoritesScreen />
      case "account":
        return <AccountScreen onLogout={onLogout} />
      default:
        return <HomeScreen ref={homeScreenRef} />
    }
  }

  const handleTabChange = (tab: NavigationTab) => {
    if (tab === "home" && activeTab === "home") {
      // Si ya estamos en home, resetear a la vista principal
      homeScreenRef.current?.resetToMain()
    }
    setActiveTab(tab)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1">{renderScreen()}</div>
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  )
}
