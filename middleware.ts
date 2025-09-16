import { type NextRequest, NextResponse } from "next/server"
import { authMiddleware } from "./lib/auth"

export async function middleware(request: NextRequest) {
  // Liste des chemins protégés
  const protectedPaths = [
    "/dashboard",
    "/profile",
    "/offers",
    "/transactions",
    "/referrals",
    "/admin",
    "/merchant-interface",
  ]

  // Vérifier si le chemin actuel est protégé
  const path = request.nextUrl.pathname
  const isProtectedPath = protectedPaths.some((protectedPath) => path.startsWith(protectedPath))

  // Si le chemin n'est pas protégé, continuer normalement
  if (!isProtectedPath) {
    return NextResponse.next()
  }

  // Appliquer le middleware d'authentification
  return authMiddleware(request)
}

// Modifier le matcher pour exclure explicitement toutes les routes API
export const config = {
  matcher: ["/((?!api/|_next/static|_next/image|favicon.ico).*)"],
}

