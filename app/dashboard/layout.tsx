"use client"

import type React from "react"

import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Attendre que le chargement soit terminé
    if (!loading) {
      // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
      if (!user) {
        router.push("/login?redirect=/dashboard")
      }
    }
  }, [user, loading, router])

  // Afficher un indicateur de chargement pendant la vérification
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Ne rien afficher si l'utilisateur n'est pas connecté (la redirection sera effectuée)
  if (!user) {
    return null
  }

  // Afficher le contenu si l'utilisateur est connecté
  return <>{children}</>
}

