"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts"
import { Download, TrendingUp, FileText, Users, Archive, Star, Activity } from "lucide-react"

export function Reports() {
  const growthData = [
    { year: "1995", documents: 12, people: 8 },
    { year: "2000", documents: 45, people: 15 },
    { year: "2005", documents: 78, people: 23 },
    { year: "2010", documents: 123, people: 31 },
    { year: "2015", documents: 189, people: 45 },
    { year: "2020", documents: 267, people: 67 },
    { year: "2024", documents: 342, people: 89 },
  ]

  const distributionData = [
    { name: "Atas", value: 342, color: "#1e40af" },
    { name: "Relatórios", value: 198, color: "#059669" },
    { name: "Projetos", value: 167, color: "#7c3aed" },
    { name: "Fotos", value: 234, color: "#d97706" },
    { name: "Correspondências", value: 89, color: "#dc2626" },
    { name: "Outros", value: 217, color: "#64748b" },
  ]

  const impactData = [
    { project: "Semana História", participants: 2400, years: 6, impact: 95 },
    { project: "Biblioteca PET", users: 450, years: 29, impact: 88 },
    { project: "Orientação Acadêmica", students: 380, years: 14, impact: 92 },
    { project: "Material Didático", downloads: 1200, years: 9, impact: 85 },
    { project: "Projeto Grace", researchers: 45, years: 3, impact: 78 },
  ]

  const digitizationProgress = [
    { month: "Jan", digitized: 45, total: 120 },
    { month: "Fev", digitized: 78, total: 120 },
    { month: "Mar", digitized: 95, total: 120 },
    { month: "Abr", digitized: 108, total: 120 },
    { month: "Mai", digitized: 120, total: 120 },
  ]

  const topPeople = [
    { name: "Prof. Dr. Marcos Silva", documents: 89, role: "Ex-Coordenador" },
    { name: "Prof. Dr. Sara Albieri", documents: 45, role: "Coordenadora" },
    { name: "Prof. Dr. Antonia Terra", documents: 32, role: "Tutora" },
    { name: "Maria Santos", documents: 23, role: "Ex-Petiana" },
    { name: "João Silva", documents: 15, role: "Petiano" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Relatórios e Analytics</h1>
          <p className="text-slate-600">Métricas e análises do arquivo histórico PET História USP</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar PDF
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar Excel
          </Button>
          <Button className="bg-blue-700 hover:bg-blue-800">
            <Activity className="w-4 h-4 mr-2" />
            Gerar Relatório
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total de Documentos</p>
                <p className="text-3xl font-bold text-slate-900">1.247</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +18% este ano
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Pessoas Catalogadas</p>
                <p className="text-3xl font-bold text-slate-900">156</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% este ano
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Taxa de Digitalização</p>
                <p className="text-3xl font-bold text-slate-900">87%</p>
                <p className="text-sm text-blue-600 flex items-center mt-1">
                  <Archive className="w-3 h-3 mr-1" />
                  1.085 digitalizados
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Archive className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Relevância Média</p>
                <p className="text-3xl font-bold text-slate-900">4.2</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < 4 ? "text-yellow-400 fill-current" : "text-slate-300"}`} />
                  ))}
                </div>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Growth Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Crescimento do Arquivo</CardTitle>
            <CardDescription>Evolução temporal de documentos e pessoas</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="documents"
                  stackId="1"
                  stroke="#1e40af"
                  fill="#1e40af"
                  fillOpacity={0.6}
                />
                <Area type="monotone" dataKey="people" stackId="2" stroke="#059669" fill="#059669" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Distribution Pie */}
        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Tipo</CardTitle>
            <CardDescription>Proporção de documentos por categoria</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Impact */}
        <Card>
          <CardHeader>
            <CardTitle>Impacto dos Projetos</CardTitle>
            <CardDescription>Alcance e relevância dos principais projetos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {impactData.map((project, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900">{project.project}</h4>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-slate-600">
                      <span>
                        {project.participants ||
                          project.users ||
                          project.students ||
                          project.downloads ||
                          project.researchers}{" "}
                        pessoas/downloads
                      </span>
                      <span>{project.years} anos</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-right">
                      <div className="text-lg font-bold text-slate-900">{project.impact}%</div>
                      <div className="text-xs text-slate-500">impacto</div>
                    </div>
                    <div className="w-2 h-12 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="w-full bg-blue-600 rounded-full transition-all duration-500"
                        style={{ height: `${project.impact}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Digitization Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Progresso de Digitalização</CardTitle>
            <CardDescription>Avanço mensal do projeto de digitalização</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={digitizationProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="digitized" fill="#1e40af" />
                <Bar dataKey="total" fill="#e2e8f0" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Contributors */}
      <Card>
        <CardHeader>
          <CardTitle>Pessoas Mais Citadas</CardTitle>
          <CardDescription>Ranking por número de documentos relacionados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPeople.map((person, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-700 rounded-full font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">{person.name}</h4>
                    <Badge variant="secondary" className="mt-1">
                      {person.role}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-slate-900">{person.documents}</div>
                  <div className="text-xs text-slate-500">documentos</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">📊 Estatísticas Gerais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Documentos por ano:</span>
                <span className="font-medium">41.6</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Crescimento médio:</span>
                <span className="font-medium text-green-600">+15.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Maior período:</span>
                <span className="font-medium">2010s (398 docs)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Tipo mais comum:</span>
                <span className="font-medium">Atas (27.4%)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">🎯 Metas 2025</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-slate-600">Digitalização:</span>
                  <span className="font-medium">87% / 95%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "87%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-slate-600">Catalogação:</span>
                  <span className="font-medium">1.247 / 1.400</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "89%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-slate-600">Pessoas:</span>
                  <span className="font-medium">156 / 180</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "87%" }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">🏆 Conquistas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">30 anos de história documentada</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm">1.000+ documentos digitalizados</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-sm">5 edições da Semana de História</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="text-sm">Sistema de busca inteligente</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-sm">Preservação digital garantida</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
