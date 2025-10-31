"use client"

import { useState } from "react"
import { Search, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import NearbyPlaces from "./nearby-places"
import OpenNowPlaces from "./open-now-places"
import React from "react"

type HomeView = "main" | "nearby" | "open-now"

interface HomeScreenProps {
  onResetToMain?: React.Ref<any>
}

function HomeScreen({ onResetToMain }: HomeScreenProps) {
  const [currentView, setCurrentView] = useState<HomeView>("main")

  // Exponer la función de reset
  React.useImperativeHandle(onResetToMain, () => ({
    resetToMain: () => setCurrentView("main"),
  }))

  const renderView = () => {
    switch (currentView) {
      case "nearby":
        return <NearbyPlaces onBack={() => setCurrentView("main")} />
      case "open-now":
        return <OpenNowPlaces onBack={() => setCurrentView("main")} />
      default:
        return <MainHomeView onViewChange={setCurrentView} />
    }
  }

  return <div className="min-h-screen bg-gray-50 overflow-x-hidden">{renderView()}</div>
}

function MainHomeView({ onViewChange }: { onViewChange: (view: HomeView) => void }) {
  return (
    <div className="pb-28">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 py-4 shadow-sm">
        <div className="text-gray-600 text-sm mb-1">Buenos Aires</div>
        <div className="flex items-center">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Yapeyú # 197</h1>
          <ChevronDown className="w-5 h-5 text-gray-400 ml-2" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 sm:px-6 py-4 sm:py-6 bg-white">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="¿En qué queres ahorrar hoy?"
            className="w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-200 border-none rounded-full text-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:bg-white text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Content Grid */}
      <div className="px-4 sm:px-6 space-y-6">
        {/* Top Row - 3 items */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {/* Ofertas */}
          <div className="aspect-square rounded-2xl shadow-lg overflow-hidden relative bg-gradient-to-br from-red-400 via-red-500 to-red-600">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 mb-2 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold drop-shadow-sm">Ofertas</span>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-3 left-2 w-2 h-2 bg-white/15 rounded-full"></div>
          </div>

          {/* Descuentos */}
          <div className="aspect-square rounded-2xl shadow-lg overflow-hidden relative bg-gradient-to-br from-green-400 via-green-500 to-green-600">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 mb-2 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1.001-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.549.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029C10.792 13.807 10.304 14 10 14c-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H9a1 1 0 100-2h-.013a7.78 7.78 0 010-1H9a1 1 0 000-2h-.528c.082-.184.167-.36.264-.521z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold drop-shadow-sm">Descuentos</span>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-3 left-3 w-2 h-2 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-2 right-3 w-3 h-3 bg-white/15 rounded-full"></div>
          </div>

          {/* Promociones */}
          <div className="aspect-square rounded-2xl shadow-lg overflow-hidden relative bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 mb-2 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                    clipRule="evenodd"
                  />
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold drop-shadow-sm">Promociones</span>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-2 left-2 w-3 h-3 bg-white/15 rounded-full"></div>
            <div className="absolute bottom-3 right-2 w-2 h-2 bg-white/20 rounded-full"></div>
          </div>
        </div>

        {/* Large Center Item - Destacado del día */}
        <div className="w-full h-48 sm:h-64 rounded-2xl shadow-lg overflow-hidden relative bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
          <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
            <div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 drop-shadow-sm">Destacado del día</h3>
              <p className="text-sm sm:text-base opacity-90 drop-shadow-sm">
                Las mejores ofertas seleccionadas para ti
              </p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-4 h-4 bg-white/15 rounded-full"></div>
          <div className="absolute top-6 right-6 w-3 h-3 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-4 left-6 w-2 h-2 bg-white/15 rounded-full"></div>
          <div className="absolute bottom-6 right-4 w-3 h-3 bg-white/10 rounded-full"></div>
        </div>

        {/* Bottom Row - 2 items */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* Supermercados */}
          <div className="aspect-square rounded-2xl shadow-lg overflow-hidden relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-semibold drop-shadow-sm">Supermercados</span>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-3 right-3 w-3 h-3 bg-white/15 rounded-full"></div>
            <div className="absolute bottom-3 left-3 w-2 h-2 bg-white/20 rounded-full"></div>
          </div>

          {/* Restaurantes */}
          <div className="aspect-square rounded-2xl shadow-lg overflow-hidden relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-semibold drop-shadow-sm">Restaurantes</span>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-2 left-3 w-2 h-2 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-white/15 rounded-full"></div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones rápidas</h3>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <button
              onClick={() => onViewChange("nearby")}
              className="flex items-center justify-center p-3 sm:p-4 bg-orange-50 rounded-xl border border-orange-200 hover:bg-orange-100 transition-colors"
            >
              <div className="text-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 bg-orange-200 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-orange-800">Cerca de mí</span>
              </div>
            </button>
            <button
              onClick={() => onViewChange("open-now")}
              className="flex items-center justify-center p-3 sm:p-4 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors"
            >
              <div className="text-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 bg-green-200 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-green-800">Abierto ahora</span>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Actividad reciente</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Supermercado Día</p>
                <p className="text-xs text-gray-600">Ahorraste $120 • Hace 2 horas</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Parrilla Don Carlos</p>
                <p className="text-xs text-gray-600">Ahorraste $85 • Ayer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Exportar la función resetToMainView para que pueda ser usada desde MainApp
export default HomeScreen
