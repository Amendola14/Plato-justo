"use client"

import { TrendingUp, ShoppingBag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GraphicsScreen() {
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-semibold text-gray-900">Mis Estadísticas</h1>

       <p className="text-gray-700 text-sm">Resumen de tus ahorros y compras</p>
      
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-800 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Total Ahorrado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">$12,450</div>
              <p className="text-xs text-green-600 mt-1">+15% este mes</p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-800 flex items-center">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Total Comprado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">$45,230</div>
              <p className="text-xs text-blue-600 mt-1">Este mes</p>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Desglose Mensual</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Enero 2024</p>
                <p className="text-sm text-gray-600">Ahorrado: $2,100</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">$2,100</p>
                <p className="text-xs text-gray-500">12 compras</p>
              </div>
            </div>

            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Febrero 2024</p>
                <p className="text-sm text-gray-600">Ahorrado: $3,200</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">$3,200</p>
                <p className="text-xs text-gray-500">18 compras</p>
              </div>
            </div>

            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Marzo 2024</p>
                <p className="text-sm text-gray-600">Ahorrado: $4,150</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">$4,150</p>
                <p className="text-xs text-gray-500">22 compras</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Categorías más ahorradas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Supermercados</span>
              <div className="flex items-center">
                <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                  <div className="w-3/4 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">$5,200</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">Restaurantes</span>
              <div className="flex items-center">
                <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                  <div className="w-1/2 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">$3,100</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">Farmacias</span>
              <div className="flex items-center">
                <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                  <div className="w-1/3 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">$2,150</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
