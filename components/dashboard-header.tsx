"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Menu, Search, Wallet } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/hooks/use-auth"

export default function DashboardHeader() {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex items-center mb-6">
                <Wallet className="h-6 w-6 text-primary mr-2" />
                <span className="text-xl font-bold text-[#091857]">CashRewards</span>
              </div>
              <nav className="flex flex-col space-y-4">
                <Link href="/dashboard" className="flex items-center text-[#091857] font-medium">
                  Dashboard
                </Link>
                <Link href="/">Dashboard</Link>
                <Link href="/offers" className="flex items-center text-[#091857]">
                  Offers
                </Link>
                <Link href="/transactions" className="flex items-center text-[#091857]">
                  Transactions
                </Link>
                <Link href="/referrals" className="flex items-center text-[#091857]">
                  Refer & Earn
                </Link>
                <Link href="/settings" className="flex items-center text-[#091857]">
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/dashboard" className="flex items-center ml-2 md:ml-0">
            <Wallet className="h-6 w-6 text-primary" />
            <span className="ml-2 text-xl font-bold text-[#091857] hidden md:inline">CashRewards</span>
          </Link>

          <nav className="hidden md:flex ml-8 space-x-6">
            <Link href="/dashboard" className="text-[#091857] font-medium">
              Dashboard
            </Link>
            <Link href="/offers" className="text-[#091857]">
              Offers
            </Link>
            <Link href="/transactions" className="text-[#091857]">
              Transactions
            </Link>
            <Link href="/referrals" className="text-[#091857]">
              Refer & Earn
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search offers..."
              className="pl-9 w-[200px] lg:w-[300px] bg-gray-50 border-gray-200 focus-visible:ring-primary"
            />
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full"></span>
            <span className="sr-only">Notifications</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback className="bg-primary/20 text-[#091857]">
                    {user?.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("") || "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user?.name || "User"}</p>
                  <p className="text-xs leading-none text-muted-foreground">{user?.email || "user@example.com"}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile" className="flex w-full">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings" className="flex w-full">
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
