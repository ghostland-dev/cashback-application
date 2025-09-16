import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, BadgePercent, CreditCard, Gift, ShoppingBag, Wallet } from "lucide-react"
import DashboardHeader from "@/components/dashboard-header"
import OfferCard from "@/components/offer-card"
import TransactionList from "@/components/transaction-list"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Balance Card */}
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-[#091857]">Available Balance</CardTitle>
              <CardDescription>Ready to withdraw</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold text-[#091857]">€42.50</div>
                <Button size="sm" className="bg-primary text-[#091857] hover:bg-primary/90">
                  Withdraw
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Pending Card */}
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-[#091857]">Pending Cashback</CardTitle>
              <CardDescription>Processing period: 30-90 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold text-[#091857]">€15.75</div>
                <span className="text-sm text-muted-foreground">3 transactions</span>
              </div>
            </CardContent>
          </Card>

          {/* Total Saved Card */}
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-[#091857]">Total Saved</CardTitle>
              <CardDescription>Lifetime savings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold text-[#091857]">€128.90</div>
                <span className="flex items-center text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  +€12.50 this month
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="transactions" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
                <TabsTrigger value="offers">My Activated Offers</TabsTrigger>
              </TabsList>

              <TabsContent value="transactions" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#091857]">Recent Transactions</CardTitle>
                    <CardDescription>Your recent cashback activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TransactionList />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="offers" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#091857]">My Activated Offers</CardTitle>
                    <CardDescription>Offers you've activated recently</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-200 rounded-md mr-4"></div>
                            <div>
                              <h4 className="font-medium text-[#091857]">Merchant Name {i}</h4>
                              <p className="text-sm text-muted-foreground">10% cashback on all purchases</p>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-[#091857]">Expires in 3 days</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-xl text-[#091857]">Recommended For You</CardTitle>
                <CardDescription>Based on your shopping habits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <OfferCard key={i} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-white mb-6">
              <CardHeader>
                <CardTitle className="text-xl text-[#091857]">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-auto flex flex-col items-center justify-center p-4 border-primary/50 hover:bg-primary/10"
                  >
                    <ShoppingBag className="h-6 w-6 mb-2 text-primary" />
                    <span className="text-sm text-[#091857]">Shop Now</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto flex flex-col items-center justify-center p-4 border-secondary/50 hover:bg-secondary/10"
                  >
                    <Gift className="h-6 w-6 mb-2 text-secondary" />
                    <span className="text-sm text-[#091857]">Refer Friend</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto flex flex-col items-center justify-center p-4 border-accent/50 hover:bg-accent/10"
                  >
                    <CreditCard className="h-6 w-6 mb-2 text-accent" />
                    <span className="text-sm text-[#091857]">Link Card</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto flex flex-col items-center justify-center p-4 border-primary/50 hover:bg-primary/10"
                  >
                    <Wallet className="h-6 w-6 mb-2 text-primary" />
                    <span className="text-sm text-[#091857]">Withdraw</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-[#091857]">Top Offers</CardTitle>
                <CardDescription>Limited time deals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-md mr-4"></div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#091857]">Merchant {i}</h4>
                        <p className="text-sm text-muted-foreground">Up to 15% cashback</p>
                      </div>
                      <BadgePercent className="h-5 w-5 text-primary" />
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-primary text-[#091857] hover:bg-primary/10">
                  View All Offers
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

