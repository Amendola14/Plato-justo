"use client"

import { useState } from "react"
import LoginScreen from "../components/login-screen"
import MainApp from "../components/main-app"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="min-h-screen">
      {!isLoggedIn ? <LoginScreen onLogin={handleLogin} /> : <MainApp onLogout={handleLogout} />}
    </div>
  )
}
