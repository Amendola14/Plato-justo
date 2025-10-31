"use client"

import { MapPin, Star, Clock, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FavoritesScreen() {
  const favorites = [
    {
      id: 1,
      name: "Supermercado Día",
      address: "Av. Corrientes 1234",
      category: "Supermercado",
      rating: 4.5,
      lastVisit: "Hace 2 días",
      savings: "$450",
    },
    {
      id: 2,
      name: "Farmacia del Ahorro",
      address: "Yapeyú 156",
      category: "Farmacia",
      rating: 4.8,
      lastVisit: "Hace 1 semana",
      savings: "$120",
    },
    {
      id: 3,
      name: "Parrilla Don Carlos",
      address: "San Martín 890",
      category: "Restaurante",
      rating: 4.3,
      lastVisit: "Hace 3 días",
      savings: "$280",
    },
    {
      id: 4,
      name: "Carrefour Express",
      address: "Rivadavia 567",
      category: "Supermercado",
      rating: 4.1,
      lastVisit: "Ayer",
      savings: "$320",
    },
  ]

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-semibold text-gray-900">Mis Favoritos</h1>
        <p className="text-gray-600 text-sm">Lugares que has guardado</p>
      </div>

      <div className="px-6 py-6">
        <div className="space-y-4">
          {favorites.map((place) => (
            <Card key={place.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{place.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {place.address}
                    </div>
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                    {place.category}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">{place.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{place.lastVisit}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Ahorrado</p>
                    <p className="font-bold text-green-600">{place.savings}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {favorites.length === 0 && (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tienes favoritos aún</h3>
            <p className="text-gray-600">Guarda lugares para acceder rápidamente a ellos</p>
          </div>
        )}
      </div>
    </div>
  )
}
