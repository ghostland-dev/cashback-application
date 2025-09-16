"use client"

import type React from "react"

import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface AuthGuardProps {
  children: React.ReactNode
  requiredRole?: "user" | "merchant" | "admin"
  redirectTo?: string
}

export default function AuthGuard({ children, requiredRole, redirectTo = "/login" }: AuthGuardProps) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push(`${redirectTo}?redirect=${window.location.pathname}`)
      } else if (
        requiredRole &&
        user.role !== requiredRole &&
        !(requiredRole === "merchant" && user.role === "admin")
      ) {
        router.push("/dashboard")
      }
    }
  }, [user, loading, router, requiredRole, redirectTo])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  if (requiredRole && user.role !== requiredRole && !(requiredRole === "merchant" && user.role === "admin")) {
    return null
  }

  return <>{children}</>
}

