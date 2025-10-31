"use client"

import { ArrowLeft, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface NearbyPlacesProps {
  onBack: () => void
}

export default function NearbyPlaces({ onBack }: NearbyPlacesProps) {
  const nearbyPlaces = [
    {
      id: 1,
      name: "Panadería La Esquina",
      type: "Panadería",
      distance: "50m",
      rating: 4.8,
      image: "/placeholder.svg?height=80&width=80&text=Panaderia",
      products: [
        { name: "Medialunas", originalPrice: 150, discountPrice: 105, discount: 30 },
        { name: "Pan francés", originalPrice: 200, discountPrice: 160, discount: 20 },
        { name: "Facturas surtidas", originalPrice: 180, discountPrice: 126, discount: 30 },
      ],
    },
    {
      id: 2,
      name: "Pizzería Napoli",
      type: "Restaurante",
      distance: "120m",
      rating: 4.5,
      image: "/placeholder.svg?height=80&width=80&text=Pizzeria",
      products: [
        { name: "Pizza Margherita", originalPrice: 1200, discountPrice: 840, discount: 30 },
        { name: "Empanadas x6", originalPrice: 800, discountPrice: 520, discount: 35 },
        { name: "Milanesa napolitana", originalPrice: 1500, discountPrice: 975, discount: 35 },
      ],
    },
    {
      id: 3,
      name: "Panadería San Martín",
      type: "Panadería",
      distance: "200m",
      rating: 4.6,
      image: "/placeholder.svg?height=80&width=80&text=Pan+San+Martin",
      products: [
        { name: "Torta negra", originalPrice: 2500, discountPrice: 1500, discount: 40 },
        { name: "Sandwiches de miga x12", originalPrice: 1800, discountPrice: 1260, discount: 30 },
        { name: "Alfajores caseros", originalPrice: 300, discountPrice: 210, discount: 30 },
      ],
    },
    {
      id: 4,
      name: "Café Central",
      type: "Restaurante",
      distance: "300m",
      rating: 4.3,
      image: "/placeholder.svg?height=80&width=80&text=Cafe+Central",
      products: [
        { name: "Desayuno completo", originalPrice: 1000, discountPrice: 750, discount: 25 },
        { name: "Tostadas con palta", originalPrice: 600, discountPrice: 420, discount: 30 },
        { name: "Café con leche + croissant", originalPrice: 500, discountPrice: 350, discount: 30 },
      ],
    },
  ]

  return (
    <>
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 py-4 shadow-sm">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={onBack} className="mr-3 p-1">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold text-teal-700">Cerca de mí</h1>
            <p className="text-sm text-gray-600">Lugares con ofertas a menos de 500m</p>
          </div>
        </div>
      </div>

      {/* Places List */}
      <div className="px-4 sm:px-6 py-6 space-y-4">
        {nearbyPlaces.map((place) => (
          <Card key={place.id} className="overflow-hidden">
            <CardContent className="p-0">
              {/* Place Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-start space-x-3">
                  <img
                    src={place.image || "/placeholder.svg"}
                    alt={place.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{place.name}</h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-orange-600 font-medium">{place.type}</span>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {place.distance}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                        {place.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className="p-4">
                <h4 className="font-medium text-gray-900 mb-3">Ofertas disponibles</h4>
                <div className="space-y-3">
                  {place.products.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-gray-500 line-through">${product.originalPrice}</span>
                          <span className="text-sm font-bold text-green-600">${product.discountPrice}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          -{product.discount}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
