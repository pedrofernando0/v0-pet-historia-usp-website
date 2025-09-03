"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, Star, Download, Grid3X3, List, Clock, FileText, Users, Tag, Eye } from "lucide-react"

export function AdvancedSearch() {
  const [viewMode, setViewMode] = useState<"grid" | "list" | "timeline">("grid")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const documentTypes = [
    { name: "Atas de Reunião", count: 342, checked: false },
    { name: "Relatórios", count: 198, checked: false },
    { name: "Projetos", count: 167, checked: false },
    { name: "Fotos", count: 234, checked: false },
    { name: "Correspondências", count: 89, checked: false },
    { name: "Outros", count: 217, checked: false },
  ]

  const searchResults = [
    {
      id: "PET-HIST-2024-12-133",
      title: "Relatório Final Semana História 2024",
      type: "Relatório",
      date: "2024-12-20",
      coordinator: "Prof. Dr. Sara Albieri",
      relevance: 5,
      tags: ["Semana História", "Extensão", "Relatório Final"],
      summary:
        "Relatório completo da V Semana de História, incluindo métricas de participação, feedback dos participantes e resultados alcançados.",
    },
    {
      id: "PET-HIST-2024-11-132",
      title: "Ata Reunião - Planejamento 2025",
      type: "Ata",
      date: "2024-11-28",
      coordinator: "Prof. Dr. Antonia Terra",
      relevance: 3,
      tags: ["Reunião", "Planejamento", "2025"],
      summary:
        "Ata da reunião de planejamento das atividades para o primeiro semestre de 2025, incluindo cronograma e responsabilidades.",
    },
    {
      id: "PET-HIST-2024-09-128",
      title: "Projeto Biblioteca Digital PET",
      type: "Projeto",
      date: "2024-09-15",
      coordinator: "Prof. Dr. Marcos Silva",
      relevance: 4,
      tags: ["Biblioteca", "Digital", "Acervo"],
      summary:
        "Proposta para digitalização e catalogação do acervo da biblioteca do PET História, incluindo cronograma e orçamento.",
    },
    {
      id: "PET-HIST-2024-08-125",
      title: "Fotos - V Semana de História",
      type: "Registro Fotográfico",
      date: "2024-08-22",
      coordinator: "Maria Santos",
      relevance: 4,
      tags: ["Fotos", "Semana História", "Evento"],
      summary:
        "Registro fotográfico completo da V Semana de História, incluindo palestras, mesas redondas e atividades culturais.",
    },
    {
      id: "PET-HIST-2024-06-118",
      title: "Material Didático - História Contemporânea",
      type: "Material Didático",
      date: "2024-06-10",
      coordinator: "João Silva",
      relevance: 3,
      tags: ["Material Didático", "História Contemporânea", "Ensino"],
      summary:
        "Apostila desenvolvida para o projeto de extensão em escolas públicas, abordando temas de História Contemporânea.",
    },
    {
      id: "PET-HIST-2024-05-115",
      title: "Correspondência MEC - Avaliação 2024",
      type: "Correspondência",
      date: "2024-05-18",
      coordinator: "Prof. Dr. Sara Albieri",
      relevance: 5,
      tags: ["MEC", "Avaliação", "Oficial"],
      summary: "Correspondência oficial do MEC sobre o processo de avaliação trienal do programa PET História USP.",
    },
  ]

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {searchResults.map((doc) => (
        <Card key={doc.id} className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <Badge variant="secondary" className="mb-2">
                {doc.type}
              </Badge>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < doc.relevance ? "text-yellow-400 fill-current" : "text-slate-300"}`}
                  />
                ))}
              </div>
            </div>
            <CardTitle className="text-lg leading-tight">{doc.title}</CardTitle>
            <CardDescription className="text-sm">{doc.id}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 mb-3 line-clamp-2">{doc.summary}</p>
            <div className="space-y-2">
              <div className="flex items-center text-xs text-slate-500">
                <Calendar className="w-3 h-3 mr-1" />
                {doc.date}
              </div>
              <div className="flex items-center text-xs text-slate-500">
                <Users className="w-3 h-3 mr-1" />
                {doc.coordinator}
              </div>
              <div className="flex flex-wrap gap-1">
                {doc.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {doc.tags.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{doc.tags.length - 2}
                  </Badge>
                )}
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-3">
              <Eye className="w-3 h-3 mr-1" />
              Visualizar
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderListView = () => (
    <div className="space-y-4">
      {searchResults.map((doc) => (
        <Card key={doc.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Badge variant="secondary">{doc.type}</Badge>
                  <span className="text-sm text-slate-500">{doc.date}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < doc.relevance ? "text-yellow-400 fill-current" : "text-slate-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{doc.title}</h3>
                <p className="text-sm text-slate-600 mb-2">{doc.summary}</p>
                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <span>ID: {doc.id}</span>
                  <span>Coord: {doc.coordinator}</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {doc.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Eye className="w-3 h-3 mr-1" />
                Ver
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Busca Avançada</h1>
          <p className="text-slate-600">Sistema inteligente de busca e filtros</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar Resultados
          </Button>
          <div className="flex border rounded-lg">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-none"
            >
              <List className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "timeline" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("timeline")}
              className="rounded-l-none"
            >
              <Clock className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="space-y-6">
          {/* Search Bar */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Busca Principal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input placeholder="Digite palavras-chave, títulos, pessoas..." className="pl-10" />
              </div>
              <Button className="w-full mt-3 bg-blue-700 hover:bg-blue-800">
                <Search className="w-4 h-4 mr-2" />
                Buscar
              </Button>
            </CardContent>
          </Card>

          {/* Document Types */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Tipo de Documento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documentTypes.map((type, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={`type-${index}`} />
                      <Label htmlFor={`type-${index}`} className="text-sm">
                        {type.name}
                      </Label>
                    </div>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">{type.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Date Range */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Período
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label htmlFor="date-from">Data Inicial</Label>
                <Input id="date-from" type="date" />
              </div>
              <div>
                <Label htmlFor="date-to">Data Final</Label>
                <Input id="date-to" type="date" />
              </div>
              <div className="space-y-2">
                <Label>Períodos Rápidos</Label>
                <div className="grid grid-cols-2 gap-2">
                  {["2024", "2023", "2022", "2021"].map((year) => (
                    <Button key={year} variant="outline" size="sm">
                      {year}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Relevance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Relevância Mínima
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center space-x-2">
                    <Checkbox id={`stars-${stars}`} />
                    <Label htmlFor={`stars-${stars}`} className="flex items-center">
                      {[...Array(stars)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                      {[...Array(5 - stars)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-slate-300" />
                      ))}
                      <span className="ml-2 text-sm">e acima</span>
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tags Cloud */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                Tags Populares
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Semana História",
                  "Extensão",
                  "Ensino",
                  "Pesquisa",
                  "USP",
                  "PET",
                  "Reunião",
                  "Relatório",
                  "Projeto",
                ].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-blue-100 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Results Header */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">
                    Encontrados <span className="font-semibold">6 documentos</span> em{" "}
                    <span className="font-semibold">0.23s</span>
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Label htmlFor="sort" className="text-sm">
                    Ordenar por:
                  </Label>
                  <Select defaultValue="relevance">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevância</SelectItem>
                      <SelectItem value="date-desc">Data (mais recente)</SelectItem>
                      <SelectItem value="date-asc">Data (mais antigo)</SelectItem>
                      <SelectItem value="title">Título A-Z</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {viewMode === "grid" && renderGridView()}
          {viewMode === "list" && renderListView()}
          {viewMode === "timeline" && (
            <Card>
              <CardContent className="p-6">
                <div className="text-center text-slate-500">
                  <Clock className="w-12 h-12 mx-auto mb-4" />
                  <p>Vista Timeline em desenvolvimento</p>
                  <p className="text-sm">Visualização cronológica dos documentos</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Pagination */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-600">Mostrando 1-6 de 6 resultados</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Anterior
                  </Button>
                  <Button variant="outline" size="sm" className="bg-blue-700 text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    Próximo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
