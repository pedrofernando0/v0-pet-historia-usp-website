"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Users, Calendar, TrendingUp, Archive, Clock, Star, Download } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

export function Dashboard() {
  const stats = [
    {
      title: "Total de Documentos",
      value: "1.247",
      change: "+23 este mês",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Pessoas Catalogadas",
      value: "156",
      change: "+5 este mês",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Projetos Ativos",
      value: "8",
      change: "2 em andamento",
      icon: Archive,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Anos de História",
      value: "30",
      change: "1995 - 2025",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const documentsByType = [
    { name: "Atas", value: 342, color: "#1e40af" },
    { name: "Relatórios", value: 198, color: "#059669" },
    { name: "Projetos", value: 167, color: "#7c3aed" },
    { name: "Fotos", value: 234, color: "#d97706" },
    { name: "Correspondências", value: 89, color: "#dc2626" },
    { name: "Outros", value: 217, color: "#64748b" },
  ]

  const timelineData = [
    { year: "1995", documents: 12, event: "Fundação PET" },
    { year: "2000", documents: 45, event: "" },
    { year: "2005", documents: 78, event: "" },
    { year: "2010", documents: 123, event: "Projeto Orientação" },
    { year: "2015", documents: 189, event: "Material Didático" },
    { year: "2019", documents: 267, event: "III Semana História" },
    { year: "2021", documents: 298, event: "IV Semana Virtual" },
    { year: "2024", documents: 342, event: "Digitalização" },
  ]

  const recentDocuments = [
    {
      id: "PET-HIST-2025-01-134",
      title: "Processo Seletivo Petianos 2025/1",
      type: "Administrativo",
      date: "2025-01-15",
      relevance: 4,
    },
    {
      id: "PET-HIST-2024-12-133",
      title: "Relatório Final Semana História 2024",
      type: "Relatório",
      date: "2024-12-20",
      relevance: 5,
    },
    {
      id: "PET-HIST-2024-11-132",
      title: "Ata Reunião - Planejamento 2025",
      type: "Ata",
      date: "2024-11-28",
      relevance: 3,
    },
    {
      id: "PET-HIST-2024-11-131",
      title: "Fotos - Evento 29 Anos PET",
      type: "Registro Fotográfico",
      date: "2024-11-15",
      relevance: 4,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600">Visão geral do arquivo histórico PET História USP</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar Relatório
          </Button>
          <Button className="bg-blue-700 hover:bg-blue-800">
            <FileText className="w-4 h-4 mr-2" />
            Novo Documento
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Documents by Type */}
        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Tipo</CardTitle>
            <CardDescription>Total de documentos por categoria</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={documentsByType}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#1e40af" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Timeline Histórica</CardTitle>
            <CardDescription>Crescimento do arquivo ao longo dos anos</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="documents" stroke="#1e40af" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Documents and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Documents */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Documentos Recentes
            </CardTitle>
            <CardDescription>Últimos documentos catalogados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDocuments.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50">
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900">{doc.title}</h4>
                    <p className="text-sm text-slate-600">{doc.id}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <Badge variant="secondary">{doc.type}</Badge>
                      <span className="text-xs text-slate-500">{doc.date}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < doc.relevance ? "text-yellow-400 fill-current" : "text-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Ver
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Acesso direto às funcionalidades</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Catalogar Documento
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="w-4 h-4 mr-2" />
              Adicionar Pessoa
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Archive className="w-4 h-4 mr-2" />
              Criar Projeto
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="w-4 h-4 mr-2" />
              Gerar Relatório
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Marcos Históricos */}
      <Card>
        <CardHeader>
          <CardTitle>Marcos Históricos do PET</CardTitle>
          <CardDescription>Principais eventos na história do programa</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { year: "1995", event: "Fundação do PET História USP", description: "Início das atividades do programa" },
              {
                year: "2010",
                event: "Projeto Orientação Acadêmica",
                description: "Início do programa de orientação para calouros",
              },
              {
                year: "2019",
                event: "III Semana de História",
                description: "Combate ao Negacionismo - Marco na extensão",
              },
              { year: "2021", event: "IV Semana Virtual", description: "Adaptação ao formato online durante pandemia" },
              {
                year: "2024",
                event: "Digitalização do Arquivo",
                description: "Início do projeto de preservação digital",
              },
            ].map((marco, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border-l-4 border-blue-700 bg-blue-50">
                <div className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">{marco.year}</div>
                <div>
                  <h4 className="font-semibold text-slate-900">{marco.event}</h4>
                  <p className="text-slate-600 text-sm">{marco.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
