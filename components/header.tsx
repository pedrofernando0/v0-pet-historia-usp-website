"use client"

import { Bell, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface HeaderProps {
  activeModule: string
  setActiveModule: (module: string) => void
}

export function Header({ activeModule, setActiveModule }: HeaderProps) {
  const modules = [
    { id: "documents", label: "📚 Documentos", icon: "📚" },
    { id: "reports", label: "📊 Relatórios", icon: "📊" },
    { id: "people", label: "👥 Pessoas", icon: "👥" },
    { id: "settings", label: "⚙️ Configurações", icon: "⚙️" },
  ]

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🏛️</div>
            <div>
              <h1 className="text-xl font-bold text-blue-700">PET HISTÓRIA USP</h1>
              <p className="text-sm text-slate-600">ARQUIVO DIGITAL</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeModule === module.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-slate-600 hover:text-blue-700 hover:bg-slate-100"
                }`}
              >
                {module.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input placeholder="Buscar documentos..." className="pl-10 w-64" />
          </div>

          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
