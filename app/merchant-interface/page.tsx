import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, DollarSign, ShoppingBag, Users } from "lucide-react"
import DashboardHeader from "@/components/dashboard-header"
import { Progress } from "@/components/ui/progress"

export default function MerchantInterfacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#091857]">Merchant Dashboard</h1>
            <p className="text-muted-foreground">Manage your offers and track performance</p>
          </div>

          <div className="flex items-center gap-3">
            <Button className="bg-primary text-[#091857] hover:bg-primary/90">Create New Offer</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Stats Card 1 */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#091857]">€12,546.00</div>
              <p className="text-xs text-green-600 flex items-center mt-1">+15.3% from last month</p>
            </CardContent>
          </Card>

          {/* Stats Card 2 */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Offers</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#091857]">8</div>
              <p className="text-xs text-green-600 flex items-center mt-1">+2 new this month</p>
            </CardContent>
          </Card>

          {/* Stats Card 3 */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#091857]">1,234</div>
              <p className="text-xs text-green-600 flex items-center mt-1">+8.7% from last month</p>
            </CardContent>
          </Card>

          {/* Stats Card 4 */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#091857]">24.8%</div>
              <p className="text-xs text-green-600 flex items-center mt-1">+2.1% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="active" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="active">Active Offers</TabsTrigger>
                <TabsTrigger value="pending">Pending Approval</TabsTrigger>
                <TabsTrigger value="expired">Expired</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#091857]">Active Offers</CardTitle>
                    <CardDescription>Your currently running promotions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="border rounded-lg p-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-gray-200 rounded-md mr-4"></div>
                              <div>
                                <h4 className="font-medium text-[#091857]">10% Cashback on All Products</h4>
                                <p className="text-sm text-muted-foreground">Valid until: Apr 15, 2025</p>
                              </div>
                            </div>
                            <div className="flex flex-col md:items-end">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-sm font-medium text-[#091857]">Performance:</span>
                                <span className="text-sm text-green-600">Good</span>
                              </div>
                              <div className="w-full md:w-48">
                                <Progress value={65} className="h-2 bg-gray-200" />
                                <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                                  <span>0 clicks</span>
                                  <span>Target: 1000</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end mt-4 gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                              Pause
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pending" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#091857]">Pending Approval</CardTitle>
                    <CardDescription>Offers awaiting platform approval</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[1].map((i) => (
                        <div key={i} className="border rounded-lg p-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-gray-200 rounded-md mr-4"></div>
                              <div>
                                <h4 className="font-medium text-[#091857]">15% Cashback on Premium Items</h4>
                                <p className="text-sm text-muted-foreground">Submitted: Mar 18, 2025</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                                Pending Review
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-end mt-4 gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="expired" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#091857]">Expired Offers</CardTitle>
                    <CardDescription>Past promotions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[1, 2].map((i) => (
                        <div key={i} className="border rounded-lg p-4 opacity-70">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-gray-200 rounded-md mr-4"></div>
                              <div>
                                <h4 className="font-medium text-[#091857]">5% Cashback on Selected Items</h4>
                                <p className="text-sm text-muted-foreground">Expired: Feb 28, 2025</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">Expired</span>
                            </div>
                          </div>
                          <div className="flex justify-end mt-4 gap-2">
                            <Button variant="outline" size="sm">
                              View Report
                            </Button>
                            <Button variant="outline" size="sm">
                              Renew
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-[#091857]">Performance Overview</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#091857]">Offer Views</span>
                      <span className="text-sm font-medium text-[#091857]">4,320</span>
                    </div>
                    <Progress value={72} className="h-2 bg-gray-200" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#091857]">Activations</span>
                      <span className="text-sm font-medium text-[#091857]">1,245</span>
                    </div>
                    <Progress value={45} className="h-2 bg-gray-200" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#091857]">Conversions</span>
                      <span className="text-sm font-medium text-[#091857]">568</span>
                    </div>
                    <Progress value={28} className="h-2 bg-gray-200" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#091857]">Cashback Paid</span>
                      <span className="text-sm font-medium text-[#091857]">€2,840</span>
                    </div>
                    <Progress value={65} className="h-2 bg-gray-200" />
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-6 border-primary text-[#091857] hover:bg-primary/10">
                  View Detailed Analytics
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-[#091857]">Recent Transactions</CardTitle>
                <CardDescription>Last 5 cashback transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex justify-between items-center pb-2 border-b last:border-0">
                      <div>
                        <p className="font-medium text-sm text-[#091857]">Order #{1000 + i}</p>
                        <p className="text-xs text-muted-foreground">Mar {20 - i}, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm text-[#091857]">€{(Math.random() * 10 + 5).toFixed(2)}</p>
                        <p className="text-xs text-green-600">Processed</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-primary text-[#091857] hover:bg-primary/10">
                  View All Transactions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

