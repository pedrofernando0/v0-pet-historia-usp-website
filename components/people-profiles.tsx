"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, Plus, ExternalLink, Mail, GraduationCap, FileText, Calendar } from "lucide-react"

export function PeopleProfiles() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const people = [
    {
      id: 1,
      name: "Prof. Dr. Sara Albieri",
      email: "sara.albieri@usp.br",
      role: "Coordenadora",
      period: "2020 - presente",
      institution: "FFLCH - USP",
      documents: 45,
      lattesUrl: "http://lattes.cnpq.br/1234567890",
      googleScholarUrl: "https://scholar.google.com/citations?user=abc123",
      orcidId: "0000-0000-0000-0000",
      summary:
        "Professora Doutora em História Social pela USP, especialista em História Moderna e Contemporânea. Coordenadora do PET História desde 2020.",
      avatar: "/placeholder.svg?height=64&width=64",
      status: "active",
    },
    {
      id: 2,
      name: "Prof. Dr. Antonia Terra",
      email: "antonia.terra@usp.br",
      role: "Tutora",
      period: "2018 - presente",
      institution: "FFLCH - USP",
      documents: 32,
      lattesUrl: "http://lattes.cnpq.br/2345678901",
      googleScholarUrl: "https://scholar.google.com/citations?user=def456",
      orcidId: "0000-0000-0000-0001",
      summary:
        "Professora Doutora em História do Brasil, com foco em História Social e Cultural. Tutora do PET História e pesquisadora em História das Mulheres.",
      avatar: "/placeholder.svg?height=64&width=64",
      status: "active",
    },
    {
      id: 3,
      name: "Prof. Dr. Marcos Silva",
      email: "marcos.silva@usp.br",
      role: "Ex-Coordenador",
      period: "1995 - 2020",
      institution: "FFLCH - USP",
      documents: 89,
      lattesUrl: "http://lattes.cnpq.br/3456789012",
      googleScholarUrl: "https://scholar.google.com/citations?user=ghi789",
      orcidId: "0000-0000-0000-0002",
      summary:
        "Professor Doutor fundador do PET História USP. Especialista em História da Educação e Metodologia do Ensino de História.",
      avatar: "/placeholder.svg?height=64&width=64",
      status: "alumni",
    },
    {
      id: 4,
      name: "Maria Santos",
      email: "maria.santos@usp.br",
      role: "Ex-Petiana",
      period: "2018 - 2022",
      institution: "FFLCH - USP",
      documents: 23,
      lattesUrl: "http://lattes.cnpq.br/4567890123",
      googleScholarUrl: "",
      orcidId: "",
      summary:
        "Graduada em História pela USP, ex-petiana com foco em projetos de extensão. Atualmente mestranda em História Social.",
      avatar: "/placeholder.svg?height=64&width=64",
      status: "alumni",
    },
    {
      id: 5,
      name: "João Silva",
      email: "joao.silva@usp.br",
      role: "Petiano",
      period: "2022 - presente",
      institution: "FFLCH - USP",
      documents: 15,
      lattesUrl: "http://lattes.cnpq.br/5678901234",
      googleScholarUrl: "",
      orcidId: "",
      summary: "Graduando em História, petiano ativo com interesse em História Contemporânea e projetos de ensino.",
      avatar: "/placeholder.svg?height=64&width=64",
      status: "active",
    },
    {
      id: 6,
      name: "Ana Costa",
      email: "ana.costa@usp.br",
      role: "Petiana",
      period: "2023 - presente",
      institution: "FFLCH - USP",
      documents: 8,
      lattesUrl: "",
      googleScholarUrl: "",
      orcidId: "",
      summary: "Graduanda em História, petiana com foco em pesquisa e projetos de iniciação científica.",
      avatar: "/placeholder.svg?height=64&width=64",
      status: "active",
    },
  ]

  const filteredPeople = people.filter((person) => {
    const matchesSearch =
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.role.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesTab =
      activeTab === "all" ||
      (activeTab === "active" && person.status === "active") ||
      (activeTab === "alumni" && person.status === "alumni") ||
      (activeTab === "coordinators" && (person.role.includes("Coordenador") || person.role.includes("Tutor")))

    return matchesSearch && matchesTab
  })

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase()
  }

  const getRoleColor = (role: string) => {
    if (role.includes("Coordenador")) return "bg-blue-100 text-blue-800"
    if (role.includes("Tutor")) return "bg-green-100 text-green-800"
    if (role.includes("Petiano")) return "bg-purple-100 text-purple-800"
    return "bg-gray-100 text-gray-800"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Perfis de Pessoas</h1>
          <p className="text-slate-600">Catálogo de pessoas envolvidas no PET História USP</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Exportar Lista
          </Button>
          <Button className="bg-blue-700 hover:bg-blue-800">
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Pessoa
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Buscar por nome, email ou função..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">Todos ({people.length})</TabsTrigger>
                <TabsTrigger value="active">Ativos ({people.filter((p) => p.status === "active").length})</TabsTrigger>
                <TabsTrigger value="alumni">Alumni ({people.filter((p) => p.status === "alumni").length})</TabsTrigger>
                <TabsTrigger value="coordinators">
                  Coordenadores (
                  {people.filter((p) => p.role.includes("Coordenador") || p.role.includes("Tutor")).length})
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* People Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPeople.map((person) => (
          <Card key={person.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={person.avatar || "/placeholder.svg"} alt={person.name} />
                  <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold">
                    {getInitials(person.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 truncate">{person.name}</h3>
                  <p className="text-sm text-slate-600 flex items-center mt-1">
                    <Mail className="w-3 h-3 mr-1" />
                    {person.email}
                  </p>
                  <div className="flex items-center mt-2">
                    <Badge className={getRoleColor(person.role)}>{person.role}</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-slate-600">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  <span>{person.institution}</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{person.period}</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>{person.documents} documentos relacionados</span>
                </div>
              </div>

              <div className="border-t pt-3">
                <p className="text-sm text-slate-600 line-clamp-3">{person.summary}</p>
              </div>

              {/* Academic Links */}
              <div className="flex flex-wrap gap-2">
                {person.lattesUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={person.lattesUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Lattes
                    </a>
                  </Button>
                )}
                {person.googleScholarUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={person.googleScholarUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Scholar
                    </a>
                  </Button>
                )}
                {person.orcidId && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={`https://orcid.org/${person.orcidId}`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      ORCID
                    </a>
                  </Button>
                )}
              </div>

              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <FileText className="w-3 h-3 mr-1" />
                  Ver Documentos
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Users className="w-3 h-3 mr-1" />
                  Ver Perfil
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredPeople.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Users className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Nenhuma pessoa encontrada</h3>
            <p className="text-slate-600 mb-4">Tente ajustar os filtros ou termo de busca para encontrar pessoas.</p>
            <Button className="bg-blue-700 hover:bg-blue-800">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Nova Pessoa
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-700">{people.filter((p) => p.status === "active").length}</div>
            <div className="text-sm text-slate-600">Pessoas Ativas</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-700">
              {people.filter((p) => p.status === "alumni").length}
            </div>
            <div className="text-sm text-slate-600">Alumni</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-purple-700">
              {people.reduce((sum, person) => sum + person.documents, 0)}
            </div>
            <div className="text-sm text-slate-600">Total Documentos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-orange-700">30</div>
            <div className="text-sm text-slate-600">Anos de História</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
