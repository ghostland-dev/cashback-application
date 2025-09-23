import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BadgePercent, Filter, Search } from "lucide-react"
import DashboardHeader from "@/components/dashboard-header"
import OfferCard from "@/components/offer-card"

export default function OffersPage() {
  const categories = [
    "All Categories",
    "Fashion",
    "Electronics",
    "Groceries",
    "Travel",
    "Beauty",
    "Home",
    "Entertainment",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#091857]">Offers & Cashback</h1>
            <p className="text-muted-foreground">Discover the best deals and earn cashback</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-[300px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search offers..." className="pl-9 w-full bg-white border-gray-200" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card className="md:col-span-1 h-fit">
            <CardHeader>
              <CardTitle className="text-lg text-[#091857]">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <Button
                    key={category}
                    variant={index === 0 ? "default" : "ghost"}
                    className={
                      index === 0
                        ? "w-full justify-start bg-primary text-[#091857] hover:bg-primary/90"
                        : "w-full justify-start text-[#091857]"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="md:col-span-3">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Offers</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="expiring">Expiring Soon</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <OfferCard key={i} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="featured" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <OfferCard key={i} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="trending" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <OfferCard key={i} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="expiring" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <OfferCard key={i} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="border-primary text-[#091857] hover:bg-primary/10">
                Load More Offers
              </Button>
            </div>
          </div>
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-xl text-[#091857]">Featured Merchants</CardTitle>
            <CardDescription>Popular brands with the best cashback rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full mb-3 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Logo</span>
                  </div>
                  <h3 className="font-medium text-[#091857] text-sm">Merchant {i + 1}</h3>
                  <p className="text-xs text-primary flex items-center mt-1">
                    <BadgePercent className="h-3 w-3 mr-1" />
                    Up to 12% cashback
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
