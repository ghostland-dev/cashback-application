import { createToken, verifyCredentials } from "@/lib/auth"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password, remember } = body

    // Vérifier les identifiants
    const user = await verifyCredentials(email, password)
    if (!user) {
      return NextResponse.json({ error: "Identifiants invalides" }, { status: 401 })
    }

    // Créer un token JWT
    const token = await createToken(user)

    // Créer la réponse
    const response = NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    })

    // Définir le cookie dans la réponse
    cookies().set({
      name: "auth-token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: remember ? 60 * 60 * 24 * 7 : 60 * 60 * 24, // 7 jours ou 1 jour
      path: "/",
    })

    return response
  } catch (error) {
    console.error("Erreur de connexion:", error)
    return NextResponse.json({ error: "Erreur de serveur interne" }, { status: 500 })
  }
}
