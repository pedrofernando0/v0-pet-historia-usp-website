"use client"

import { Home, FileText, Search, Users, BarChart3, Archive, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface SidebarProps {
  activeModule: string
  setActiveModule: (module: string) => void
}

export function Sidebar({ activeModule, setActiveModule }: SidebarProps) {
  const mainNavigation = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "documents", label: "Documentos", icon: FileText },
    { id: "search", label: "Busca Avançada", icon: Search },
    { id: "people", label: "Pessoas", icon: Users },
    { id: "reports", label: "Relatórios", icon: BarChart3 },
  ]

  const quickFilters = [
    { label: "Atas de Reunião", count: 342, color: "bg-blue-500" },
    { label: "Relatórios", count: 198, color: "bg-green-500" },
    { label: "Projetos", count: 167, color: "bg-purple-500" },
    { label: "Fotos", count: 234, color: "bg-yellow-500" },
    { label: "Correspondências", count: 89, color: "bg-red-500" },
  ]

  return (
    <aside className="w-80 bg-white border-r border-slate-200 h-[calc(100vh-73px)] overflow-y-auto">
      <div className="p-6">
        <nav className="space-y-2">
          {mainNavigation.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant={activeModule === item.id ? "default" : "ghost"}
                className={`w-full justify-start ${
                  activeModule === item.id ? "bg-blue-700 text-white hover:bg-blue-800" : "hover:bg-slate-100"
                }`}
                onClick={() => setActiveModule(item.id)}
              >
                <Icon className="w-4 h-4 mr-3" />
                {item.label}
              </Button>
            )
          })}
        </nav>

        <Separator className="my-6" />

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-700 flex items-center">
            <Archive className="w-4 h-4 mr-2" />
            Filtros Rápidos
          </h3>

          <div className="space-y-2">
            {quickFilters.map((filter, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${filter.color}`} />
                  <span className="text-sm text-slate-700">{filter.label}</span>
                </div>
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">{filter.count}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-700 flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Períodos
          </h3>

          <div className="space-y-2">
            {["2020s (159)", "2010s (398)", "2000s (456)", "1990s (234)"].map((period, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50 cursor-pointer"
              >
                <span className="text-sm text-slate-700">{period}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-700 flex items-center">
            <Tag className="w-4 h-4 mr-2" />
            Tags Populares
          </h3>

          <div className="flex flex-wrap gap-2">
            {["Semana História", "Extensão", "Ensino", "Pesquisa", "USP", "PET"].map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full cursor-pointer hover:bg-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
