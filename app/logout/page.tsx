"use client"

import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LogoutPage() {
  const { logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const performLogout = async () => {
      await logout()
      router.push("/login")
    }

    performLogout()
  }, [logout, router])

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
        <h1 className="text-xl font-semibold text-[#091857]">Déconnexion en cours...</h1>
        <p className="text-muted-foreground">Vous allez être redirigé vers la page de connexion.</p>
      </div>
    </div>
  )
}

