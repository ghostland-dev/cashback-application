"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Wallet } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const { login, error } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirect") || "/dashboard"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)

    if (!email || !password) {
      setFormError("Veuillez remplir tous les champs")
      return
    }

    setIsLoading(true)

    try {
      const success = await login(email, password, remember)
      if (success) {
        router.push(redirectTo)
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error)
      setFormError("Une erreur s'est produite lors de la connexion")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center">
            <Wallet className="h-6 w-6 text-primary" />
            <span className="ml-2 text-xl font-bold text-[#091857]">CashRewards</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-[#091857]">Bienvenue</CardTitle>
            <CardDescription className="text-center">
              Entrez vos identifiants pour accéder à votre compte
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {(error || formError) && (
              <Alert variant="destructive">
                <AlertDescription>{formError || error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nom@exemple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    Mot de passe oublié?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={remember}
                  onCheckedChange={(checked) => setRemember(checked === true)}
                  disabled={isLoading}
                />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Se souvenir de moi
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-[#091857] hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Connexion en cours..." : "Se connecter"}
              </Button>
            </form>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">Ou continuer avec</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full" disabled={isLoading}>
                Google
              </Button>
              <Button variant="outline" className="w-full" disabled={isLoading}>
                Facebook
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="text-center text-sm text-muted-foreground mt-2">
              Vous n'avez pas de compte?{" "}
              <Link href="/register" className="text-primary hover:underline">
                S'inscrire
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>

      <footer className="border-t border-gray-200 py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CashRewards. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

