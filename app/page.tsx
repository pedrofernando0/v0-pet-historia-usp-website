"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Dashboard } from "@/components/dashboard"
import { DocumentCatalog } from "@/components/document-catalog"
import { AdvancedSearch } from "@/components/advanced-search"
import { PeopleProfiles } from "@/components/people-profiles"
import { Reports } from "@/components/reports"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function PETHistoriaSystem() {
  const [activeModule, setActiveModule] = useState("dashboard")

  const renderActiveModule = () => {
    switch (activeModule) {
      case "dashboard":
        return <Dashboard />
      case "documents":
        return <DocumentCatalog />
      case "search":
        return <AdvancedSearch />
      case "people":
        return <PeopleProfiles />
      case "reports":
        return <Reports />
      default:
        return <Dashboard />
    }
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-slate-50">
        <Header activeModule={activeModule} setActiveModule={setActiveModule} />
        <div className="flex">
          <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
          <main className="flex-1 p-6">{renderActiveModule()}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
