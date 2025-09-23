import { USERS, createToken } from "@/lib/auth"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, password } = body

    // Vérifier si l'email existe déjà
    const existingUser = USERS.find((u) => u.email === email)
    if (existingUser) {
      return NextResponse.json({ error: "Cet email est déjà utilisé" }, { status: 400 })
    }

    // Dans une application réelle, vous enregistreriez l'utilisateur dans la base de données
    // et hacheriez le mot de passe
    const newUser = {
      id: `${USERS.length + 1}`,
      email,
      name: `${firstName} ${lastName}`,
      role: "user" as const,
    }

    // Ajouter l'utilisateur à notre "base de données" simulée
    USERS.push(newUser)

    // Créer un token JWT
    const token = await createToken(newUser)

    // Créer la réponse
    const response = NextResponse.json({
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
      },
    })

    // Définir le cookie dans la réponse
    cookies().set({
      name: "auth-token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 1 jour
      path: "/",
    })

    return response
  } catch (error) {
    console.error("Erreur d'inscription:", error)
    return NextResponse.json({ error: "Erreur de serveur interne" }, { status: 500 })
  }
}
