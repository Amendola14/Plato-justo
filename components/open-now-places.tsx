"use client"

import { ArrowLeft, Clock, Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface OpenNowPlacesProps {
  onBack: () => void
}

export default function OpenNowPlaces({ onBack }: OpenNowPlacesProps) {
  const openPlaces = [
    {
      id: 1,
      name: "Panadería 24hs",
      type: "Panadería",
      openUntil: "Abierto 24hs",
      rating: 4.7,
      distance: "180m",
      image: "/placeholder.svg?height=80&width=80&text=Panaderia+24hs",
      products: [
        { name: "Pan de molde integral", originalPrice: 350, discountPrice: 245, discount: 30 },
        { name: "Croissants rellenos", originalPrice: 250, discountPrice: 175, discount: 30 },
        { name: "Budín de limón", originalPrice: 800, discountPrice: 560, discount: 30 },
      ],
    },
    {
      id: 2,
      name: "Burger House",
      type: "Restaurante",
      openUntil: "Hasta 02:00",
      rating: 4.4,
      distance: "250m",
      image: "/placeholder.svg?height=80&width=80&text=Burger+House",
      products: [
        { name: "Hamburguesa completa", originalPrice: 1800, discountPrice: 1080, discount: 40 },
        { name: "Papas fritas grandes", originalPrice: 600, discountPrice: 420, discount: 30 },
        { name: "Combo burger + bebida", originalPrice: 2200, discountPrice: 1540, discount: 30 },
      ],
    },
    {
      id: 3,
      name: "Panadería El Molino",
      type: "Panadería",
      openUntil: "Hasta 23:00",
      rating: 4.9,
      distance: "320m",
      image: "/placeholder.svg?height=80&width=80&text=El+Molino",
      products: [
        { name: "Tarta de jamón y queso", originalPrice: 1200, discountPrice: 840, discount: 30 },
        { name: "Empanadas de carne x6", originalPrice: 900, discountPrice: 585, discount: 35 },
        { name: "Rosca de pascua", originalPrice: 1500, discountPrice: 900, discount: 40 },
      ],
    },
    {
      id: 4,
      name: "Sushi Express",
      type: "Restaurante",
      openUntil: "Hasta 01:00",
      rating: 4.2,
      distance: "400m",
      image: "/placeholder.svg?height=80&width=80&text=Sushi+Express",
      products: [
        { name: "Combo sushi 20 piezas", originalPrice: 3000, discountPrice: 2100, discount: 30 },
        { name: "Gyozas x8", originalPrice: 800, discountPrice: 520, discount: 35 },
        { name: "Ramen de pollo", originalPrice: 1400, discountPrice: 980, discount: 30 },
      ],
    },
    {
      id: 5,
      name: "Confitería Dulce Hogar",
      type: "Panadería",
      openUntil: "Hasta 22:30",
      rating: 4.6,
      distance: "450m",
      image: "/placeholder.svg?height=80&width=80&text=Dulce+Hogar",
      products: [
        { name: "Torta tres leches", originalPrice: 2000, discountPrice: 1400, discount: 30 },
        { name: "Cupcakes x6", originalPrice: 1200, discountPrice: 720, discount: 40 },
        { name: "Macarons surtidos x12", originalPrice: 1800, discountPrice: 1260, discount: 30 },
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
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Abierto ahora</h1>
            <p className="text-sm text-gray-600">Lugares con ofertas disponibles ahora</p>
          </div>
        </div>
      </div>

      {/* Places List */}
      <div className="px-4 sm:px-6 py-6 space-y-4">
        {openPlaces.map((place) => (
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
                    <div className="flex items-center text-sm text-green-600 font-medium mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {place.openUntil}
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
