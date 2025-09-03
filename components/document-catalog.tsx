"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, Save, Calendar, Users, Tag, Star, Lock, Plus, X } from "lucide-react"

export function DocumentCatalog() {
  const [keywords, setKeywords] = useState<string[]>([])
  const [newKeyword, setNewKeyword] = useState("")
  const [participants, setParticipants] = useState<string[]>([])
  const [relevance, setRelevance] = useState(3)

  const addKeyword = () => {
    if (newKeyword.trim() && !keywords.includes(newKeyword.trim())) {
      setKeywords([...keywords, newKeyword.trim()])
      setNewKeyword("")
    }
  }

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter((k) => k !== keyword))
  }

  const documentTypes = [
    "Ata de Reunião",
    "Relatório Semestral",
    "Projeto de Extensão",
    "Correspondência Oficial",
    "Material Didático",
    "Registro Fotográfico",
    "Certificado",
    "Outros",
  ]

  const tripodAreas = ["Ensino", "Pesquisa", "Extensão", "Administrativo"]

  const projects = [
    "Semana de História",
    "Biblioteca PET",
    "Orientação Acadêmica",
    "Material Didático",
    "Projeto Grace",
    "Outros",
  ]

  const coordinators = [
    "Prof. Dr. Sara Albieri",
    "Prof. Dr. Antonia Terra",
    "Prof. Dr. Marcos Silva",
    "Prof. Dr. Ana Paula Megiani",
    "Prof. Dr. Camilo Vasconcellos",
  ]

  const accessLevels = ["Público", "Restrito PET", "Confidencial"]

  const conservationStates = ["Excelente", "Bom", "Regular", "Deteriorado"]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Catalogação de Documentos</h1>
          <p className="text-slate-600">Sistema inteligente para catalogação e preservação digital</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Visualizar Lista
          </Button>
          <Button className="bg-blue-700 hover:bg-blue-800">
            <Save className="w-4 h-4 mr-2" />
            Salvar Documento
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Identificação */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />📊 Identificação
              </CardTitle>
              <CardDescription>Informações básicas do documento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="document-id">ID Automático</Label>
                  <Input id="document-id" value="PET-HIST-2025-01-135" disabled className="bg-slate-100" />
                </div>
                <div>
                  <Label htmlFor="document-type">Tipo de Documento *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {documentTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="title">Título do Documento *</Label>
                <Input id="title" placeholder="Ex: Ata da Reunião de Planejamento 2025/1" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="creation-date">Data de Criação</Label>
                  <Input id="creation-date" type="date" />
                </div>
                <div>
                  <Label htmlFor="digitization-date">Data de Digitalização</Label>
                  <Input
                    id="digitization-date"
                    value={new Date().toISOString().split("T")[0]}
                    disabled
                    className="bg-slate-100"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pessoas Envolvidas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />👥 Pessoas Envolvidas
              </CardTitle>
              <CardDescription>Coordenadores, tutores e participantes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="coordinator">Coordenador(a) Responsável</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o coordenador" />
                    </SelectTrigger>
                    <SelectContent>
                      {coordinators.map((coord) => (
                        <SelectItem key={coord} value={coord}>
                          {coord}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="tutor">Tutor(a)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tutor" />
                    </SelectTrigger>
                    <SelectContent>
                      {coordinators.map((tutor) => (
                        <SelectItem key={tutor} value={tutor}>
                          {tutor}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="participants">Petianos Participantes</Label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Digite o nome do petiano"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        const value = (e.target as HTMLInputElement).value
                        if (value.trim()) {
                          setParticipants([...participants, value.trim()])
                          ;(e.target as HTMLInputElement).value = ""
                        }
                      }
                    }}
                  />
                  <Button type="button" variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {participants.map((participant, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {participant}
                      <X
                        className="w-3 h-3 cursor-pointer"
                        onClick={() => setParticipants(participants.filter((_, i) => i !== index))}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contexto Acadêmico */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />📚 Contexto Acadêmico
              </CardTitle>
              <CardDescription>Informações sobre período e área de atuação</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="period">Período/Semestre</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Ex: 2025/1" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2025/1">2025/1</SelectItem>
                      <SelectItem value="2024/2">2024/2</SelectItem>
                      <SelectItem value="2024/1">2024/1</SelectItem>
                      <SelectItem value="2023/2">2023/2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="tripod-area">Área do Tripé</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a área" />
                    </SelectTrigger>
                    <SelectContent>
                      {tripodAreas.map((area) => (
                        <SelectItem key={area} value={area}>
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="related-project">Projeto Relacionado</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o projeto" />
                  </SelectTrigger>
                  <SelectContent>
                    {projects.map((project) => (
                      <SelectItem key={project} value={project}>
                        {project}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="keywords">Palavras-chave</Label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Digite uma palavra-chave"
                    value={newKeyword}
                    onChange={(e) => setNewKeyword(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addKeyword()}
                  />
                  <Button type="button" variant="outline" onClick={addKeyword}>
                    <Tag className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {keywords.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="flex items-center gap-1">
                      {keyword}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => removeKeyword(keyword)} />
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conteúdo */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />📄 Conteúdo
              </CardTitle>
              <CardDescription>Descrição e observações sobre o documento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="summary">Resumo Executivo</Label>
                <Textarea
                  id="summary"
                  placeholder="Descreva brevemente o conteúdo do documento (máx. 300 caracteres)"
                  maxLength={300}
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="observations">Observações</Label>
                <Textarea id="observations" placeholder="Observações adicionais, contexto histórico, etc." rows={4} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Relevância Histórica</Label>
                  <div className="flex items-center space-x-2 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-6 h-6 cursor-pointer ${
                          star <= relevance ? "text-yellow-400 fill-current" : "text-slate-300"
                        }`}
                        onClick={() => setRelevance(star)}
                      />
                    ))}
                    <span className="text-sm text-slate-600 ml-2">({relevance}/5)</span>
                  </div>
                </div>
                <div>
                  <Label htmlFor="conservation">Estado de Conservação</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o estado" />
                    </SelectTrigger>
                    <SelectContent>
                      {conservationStates.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="w-5 h-5 mr-2" />📁 Arquivo Digital
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm text-slate-600 mb-2">Arraste o arquivo aqui ou clique para selecionar</p>
                <p className="text-xs text-slate-500">PDF, JPG, PNG, DOC, DOCX (máx. 10MB)</p>
                <Button variant="outline" className="mt-3">
                  Selecionar Arquivo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Acesso e Localização */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-5 h-5 mr-2" />🔒 Acesso e Localização
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="physical-location">Localização Física</Label>
                <Input id="physical-location" placeholder="Ex: Sala PET - Caixa 15 - Pasta A" />
              </div>

              <div>
                <Label htmlFor="access-level">Nível de Acesso</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o nível" />
                  </SelectTrigger>
                  <SelectContent>
                    {accessLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Sugestões Inteligentes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">💡 Sugestões Inteligentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">Tags Sugeridas:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {["Reunião", "Planejamento", "2025"].map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs cursor-pointer hover:bg-blue-100">
                        + {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-900">Documentos Similares:</p>
                  <p className="text-xs text-green-700 mt-1">3 documentos relacionados encontrados</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ações */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <Button className="w-full bg-blue-700 hover:bg-blue-800">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar e Catalogar
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Salvar Rascunho
                </Button>
                <Button variant="ghost" className="w-full">
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
