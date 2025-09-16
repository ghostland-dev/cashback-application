import { jwtVerify, SignJWT } from "jose"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

// Clé secrète pour signer les JWT (dans un environnement de production, utilisez une variable d'environnement)
const JWT_SECRET = new TextEncoder().encode("votre-cle-secrete-tres-securisee")

export type User = {
  id: string
  email: string
  name: string
  role: "user" | "merchant" | "admin"
}

// Base de données utilisateur simulée (à remplacer par une vraie base de données)
export const USERS: User[] = [
  {
    id: "1",
    email: "user@example.com",
    name: "John Doe",
    role: "user",
  },
  {
    id: "2",
    email: "merchant@example.com",
    name: "Merchant Account",
    role: "merchant",
  },
  {
    id: "3",
    email: "admin@example.com",
    name: "Admin User",
    role: "admin",
  },
]

// Fonction pour vérifier les identifiants
export async function verifyCredentials(email: string, password: string): Promise<User | null> {
  // Dans un environnement de production, vérifiez le mot de passe haché
  // Pour cette démo, nous acceptons n'importe quel mot de passe pour les utilisateurs de la liste
  const user = USERS.find((u) => u.email === email)
  return user || null
}

// Créer un JWT token
export async function createToken(user: User) {
  return await new SignJWT({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(JWT_SECRET)
}

// Vérifier un JWT token
export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload as User
  } catch (error) {
    return null
  }
}

// Obtenir l'utilisateur actuel à partir du cookie
export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = cookies()
  const token = cookieStore.get("auth-token")?.value

  if (!token) return null

  try {
    return await verifyToken(token)
  } catch (error) {
    return null
  }
}

// Middleware pour protéger les routes
export async function authMiddleware(request: NextRequest) {
  // Récupérer le token depuis les cookies
  const token = request.cookies.get("auth-token")?.value

  // Si pas de token, rediriger vers la page de connexion
  if (!token) {
    const url = request.nextUrl.clone()
    url.pathname = "/login"
    url.searchParams.set("redirect", request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  // Vérifier le token
  const user = await verifyToken(token)
  if (!user) {
    const url = request.nextUrl.clone()
    url.pathname = "/login"
    return NextResponse.redirect(url)
  }

  // Vérifier les autorisations basées sur le rôle
  const path = request.nextUrl.pathname
  if (path.startsWith("/admin") && user.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  if (path.startsWith("/merchant-interface") && user.role !== "merchant" && user.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

