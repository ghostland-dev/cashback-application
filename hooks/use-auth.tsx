"use client"

import type React from "react"

import type { User } from "@/lib/auth"
import { useRouter } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string, remember?: boolean) => Promise<boolean>
  register: (firstName: string, lastName: string, email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
  error: string | null
}

// Valeur par défaut du contexte
const defaultContext: AuthContextType = {
  user: null,
  loading: true,
  login: async () => false,
  register: async () => false,
  logout: async () => {},
  error: null,
}

const AuthContext = createContext<AuthContextType>(defaultContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Fonction pour charger l'utilisateur
  const fetchUser = async () => {
    try {
      const res = await fetch("/api/auth/user")
      const data = await res.json()

      if (res.ok && data.user) {
        setUser(data.user)
      }
    } catch (error) {
      console.error("Erreur lors du chargement de la session:", error)
    } finally {
      setLoading(false)
    }
  }

  // Vérifier si l'utilisateur est connecté au chargement
  useEffect(() => {
    fetchUser()
  }, [])

  // Fonction de connexion
  const login = async (email: string, password: string, remember = false): Promise<boolean> => {
    setError(null)

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, remember }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Erreur de connexion")
        return false
      }

      setUser(data.user)
      return true
    } catch (error) {
      console.error("Erreur de connexion:", error)
      setError("Une erreur s'est produite lors de la connexion")
      return false
    }
  }

  // Fonction d'inscription
  const register = async (firstName: string, lastName: string, email: string, password: string): Promise<boolean> => {
    setError(null)

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Erreur d'inscription")
        return false
      }

      setUser(data.user)
      return true
    } catch (error) {
      console.error("Erreur d'inscription:", error)
      setError("Une erreur s'est produite lors de l'inscription")
      return false
    }
  }

  // Fonction de déconnexion
  const logout = async (): Promise<void> => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      })

      setUser(null)
      router.push("/login")
    } catch (error) {
      console.error("Erreur de déconnexion:", error)
    }
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    error,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}

