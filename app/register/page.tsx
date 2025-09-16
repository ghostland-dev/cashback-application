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
import { useRouter } from "next/navigation"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RegisterPage() {
  const { register, error } = useAuth()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)

    // Validation des champs
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setFormError("Veuillez remplir tous les champs")
      return
    }

    if (password !== confirmPassword) {
      setFormError("Les mots de passe ne correspondent pas")
      return
    }

    if (!acceptTerms) {
      setFormError("Vous devez accepter les conditions d'utilisation")
      return
    }

    setIsLoading(true)

    try {
      const success = await register(firstName, lastName, email, password)
      if (success) {
        router.push("/dashboard")
      }
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
            <CardTitle className="text-2xl font-bold text-center text-[#091857]">Créer un compte</CardTitle>
            <CardDescription className="text-center">
              Commencez à économiser avec des cashbacks sur vos achats quotidiens
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {(error || formError) && (
              <Alert variant="destructive">
                <AlertDescription>{formError || error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </div>
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
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked === true)}
                  disabled={isLoading}
                />
                <Label htmlFor="terms" className="text-sm font-normal">
                  J'accepte les{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Conditions d'utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Politique de confidentialité
                  </Link>
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-[#091857] hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Création en cours..." : "Créer un compte"}
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
              Vous avez déjà un compte?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Se connecter
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

