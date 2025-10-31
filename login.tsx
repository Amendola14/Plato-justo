import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Lock, MapPin, Heart } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-teal-600 flex flex-col items-center justify-center px-8 py-12">
      {/* Welcome Text */}
      <div className="text-center mb-12">
        <h1 className="text-white text-2xl font-light tracking-wide">Bienvenido a</h1>
      </div>

      {/* Logo Circle */}
      <div className="w-48 h-48 bg-white rounded-full flex flex-col items-center justify-center mb-16 relative">
        {/* Logo Icon */}
        <div className="relative mb-4">
          {/* Orange concentric circles with heart */}
          <div className="relative">
            <div className="w-16 h-16 border-4 border-orange-500 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 border-3 border-orange-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 fill-orange-500 text-orange-500" />
              </div>
            </div>
            {/* Location pin */}
            <MapPin className="w-6 h-6 text-teal-600 absolute -top-1 -right-1" />
          </div>
        </div>

        {/* Logo Text */}
        <div className="text-center">
          <div className="text-teal-600 text-2xl font-bold leading-tight">Plato</div>
          <div className="text-teal-600 text-2xl font-bold leading-tight">Justo</div>
        </div>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-sm space-y-6">
        {/* Email Input */}
        <div className="relative">
          <div className="bg-black bg-opacity-40 rounded-lg p-4 flex items-center">
            <Mail className="w-6 h-6 text-white mr-4" />
            <Input
              type="email"
              placeholder="Dirección de correo electrónico"
              className="bg-transparent border-none text-white placeholder-gray-300 focus:ring-0 focus:outline-none p-0"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="relative">
          <div className="bg-black bg-opacity-40 rounded-lg p-4 flex items-center">
            <Lock className="w-6 h-6 text-white mr-4" />
            <Input
              type="password"
              placeholder="••••••••••"
              className="bg-transparent border-none text-white placeholder-gray-300 focus:ring-0 focus:outline-none p-0"
            />
          </div>
        </div>

        {/* Sign In Button */}
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg text-lg">
          Iniciar sesión
        </Button>
      </div>

      {/* Bottom Links */}
      <div className="flex justify-between w-full max-w-sm mt-12 text-white">
        <button className="text-sm hover:underline">¿Olvidaste tu contraseña?</button>
        <button className="text-sm hover:underline">¿ Sos Nuevo ? Regístrate</button>
      </div>

      {/* Bottom Indicator */}
      <div className="mt-16">
        <div className="w-32 h-1 bg-white bg-opacity-60 rounded-full"></div>
      </div>
    </div>
  )
}
