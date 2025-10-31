"use client"

import { useState } from "react"
import { User, Mail, Phone, MapPin, Edit3, Settings, LogOut, Bell } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AccountScreenProps {
  onLogout: () => void
}

export default function AccountScreen({ onLogout }: AccountScreenProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: "María González",
    email: "maria.gonzalez@email.com",
    phone: "+54 11 1234-5678",
    address: "Yapeyú #197, Buenos Aires",
  })

  const handleSave = () => {
    setIsEditing(false)
    // Aquí iría la lógica para guardar los datos
  }

  const handleLogout = () => {
    onLogout()
  }

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-semibold text-gray-900">Mi Cuenta</h1>
        <p className="text-gray-600 text-sm">Gestiona tu información personal</p>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Profile Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Información Personal</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
              className="text-orange-600 hover:text-orange-700"
            >
              <Edit3 className="w-4 h-4 mr-2" />
              {isEditing ? "Cancelar" : "Editar"}
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-orange-600" />
              </div>
              <div className="flex-1">
                {isEditing ? (
                  <Input
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    className="font-semibold"
                  />
                ) : (
                  <h3 className="font-semibold text-lg">{userData.name}</h3>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                {isEditing ? (
                  <Input
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    className="flex-1"
                  />
                ) : (
                  <span className="text-gray-700">{userData.email}</span>
                )}
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                {isEditing ? (
                  <Input
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    className="flex-1"
                  />
                ) : (
                  <span className="text-gray-700">{userData.phone}</span>
                )}
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                {isEditing ? (
                  <Input
                    value={userData.address}
                    onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                    className="flex-1"
                  />
                ) : (
                  <span className="text-gray-700">{userData.address}</span>
                )}
              </div>
            </div>

            {isEditing && (
              <Button onClick={handleSave} className="w-full bg-orange-500 hover:bg-orange-600">
                Guardar Cambios
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Options */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Opciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center">
                <Bell className="w-5 h-5 text-gray-400 mr-3" />
                <span>Notificaciones</span>
              </div>
              <span className="text-gray-400">{">"}</span>
            </button>

            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center">
                <Settings className="w-5 h-5 text-gray-400 mr-3" />
                <span>Configuración</span>
              </div>
              <span className="text-gray-400">{">"}</span>
            </button>

            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-between p-3 hover:bg-red-50 rounded-lg transition-colors text-red-600"
            >
              <div className="flex items-center">
                <LogOut className="w-5 h-5 mr-3" />
                <span>Cerrar Sesión</span>
              </div>
              <span className="text-red-400">{">"}</span>
            </button>
          </CardContent>
        </Card>

        {/* Stats Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Resumen de Actividad</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-orange-600">24</p>
                <p className="text-sm text-gray-600">Lugares visitados</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">$12,450</p>
                <p className="text-sm text-gray-600">Total ahorrado</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
