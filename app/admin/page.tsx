import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart, DollarSign, Search, Settings, ShoppingBag, Users } from "lucide-react"
import DashboardHeader from "@/components/dashboard-header"

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#091857]">Admin Dashboard</h1>
            <p className="text-muted-foreground">Platform management and analytics</p>
          </div>

          <div className="flex items-center gap-3">
            <Button className="bg-primary text-[#091857] hover:bg-primary/90">
              <Settings className="h-4 w-4 mr-2" />
              <span>Platform Settings</span>
            </Button>
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
              <div className="text-2xl font-bold text-[#091857]">€125,460.00</div>
              <p className="text-xs text-green-600 flex items-center mt-1">+12.5% from last month</p>
            </CardContent>
          </Card>

          {/* Stats Card 2 */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#091857]">24,853</div>
              <p className="text-xs text-green-600 flex items-center mt-1">+8.2% from last month</p>
            </CardContent>
          </Card>

          {/* Stats Card 3 */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Merchants</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#091857]">1,234</div>
              <p className="text-xs text-green-600 flex items-center mt-1">+5.7% from last month</p>
            </CardContent>
          </Card>

          {/* Stats Card 4 */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Platform Conversion</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#091857]">32.8%</div>
              <p className="text-xs text-green-600 flex items-center mt-1">+3.1% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="users" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="merchants">Merchants</TabsTrigger>
                <TabsTrigger value="offers">Offers</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
              </TabsList>

              <TabsContent value="users" className="mt-0">
                <Card>
                  <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-[#091857]">User Management</CardTitle>
                      <CardDescription>Manage platform users and their accounts</CardDescription>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search users..."
                          className="pl-9 w-full md:w-[250px] bg-white border-gray-200"
                        />
                      </div>
                      <Button className="bg-primary text-[#091857] hover:bg-primary/90">Add User</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">User</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Email</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Joined</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                            <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              name: "John Doe",
                              email: "john.doe@example.com",
                              joined: "Mar 15, 2025",
                              status: "Active",
                            },
                            {
                              name: "Marie Dubois",
                              email: "marie.d@example.com",
                              joined: "Mar 10, 2025",
                              status: "Active",
                            },
                            {
                              name: "Thomas Bernard",
                              email: "thomas.b@example.com",
                              joined: "Mar 5, 2025",
                              status: "Active",
                            },
                            {
                              name: "Sophie Martin",
                              email: "sophie.m@example.com",
                              joined: "Feb 28, 2025",
                              status: "Inactive",
                            },
                            {
                              name: "Lucas Petit",
                              email: "lucas.p@example.com",
                              joined: "Feb 20, 2025",
                              status: "Active",
                            },
                          ].map((user, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4">
                                <div className="flex items-center">
                                  <Avatar className="h-8 w-8 mr-2">
                                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt={user.name} />
                                    <AvatarFallback className="bg-primary/20 text-[#091857]">
                                      {user.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm font-medium text-[#091857]">{user.name}</span>
                                </div>
                              </td>
                              <td className="py-3 px-4 text-sm text-muted-foreground">{user.email}</td>
                              <td className="py-3 px-4 text-sm text-muted-foreground">{user.joined}</td>
                              <td className="py-3 px-4">
                                <Badge
                                  className={
                                    user.status === "Active"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-gray-100 text-gray-800"
                                  }
                                >
                                  {user.status}
                                </Badge>
                              </td>
                              <td className="py-3 px-4 text-right">
                                <Button variant="ghost" size="sm">
                                  <span>Edit</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="text-red-500">
                                  <span>Suspend</span>
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <p className="text-sm text-muted-foreground">Showing 1-5 of 24,853 users</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>
                          <span>Previous</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <span>Next</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="merchants" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#091857]">Merchant Management</CardTitle>
                    <CardDescription>Manage platform merchants and their offers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Electronics Shop", category: "Electronics", offers: 12, status: "Active" },
                        { name: "Fashion Store", category: "Fashion", offers: 8, status: "Active" },
                        { name: "Supermarket Chain", category: "Groceries", offers: 5, status: "Active" },
                        { name: "Online Bookstore", category: "Books", offers: 3, status: "Pending" },
                        { name: "Home Decor", category: "Home", offers: 7, status: "Active" },
                      ].map((merchant, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-200 rounded-md mr-4"></div>
                            <div>
                              <h4 className="font-medium text-[#091857]">{merchant.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {merchant.category} • {merchant.offers} offers
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge
                              className={
                                merchant.status === "Active"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }
                            >
                              {merchant.status}
                            </Badge>
                            <Button variant="ghost" size="sm">
                              <span>View</span>
                            </Button>
                            <Button variant="ghost" size="sm">
                              <span>Edit</span>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="offers" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#091857]">Offer Management</CardTitle>
                    <CardDescription>Manage and moderate platform offers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          merchant: "Electronics Shop",
                          offer: "10% Cashback on All Products",
                          status: "Active",
                          expires: "Apr 15, 2025",
                        },
                        {
                          merchant: "Fashion Store",
                          offer: "15% Cashback on Premium Items",
                          status: "Pending",
                          expires: "Apr 30, 2025",
                        },
                        {
                          merchant: "Supermarket Chain",
                          offer: "5% Cashback on Groceries",
                          status: "Active",
                          expires: "May 15, 2025",
                        },
                        {
                          merchant: "Online Bookstore",
                          offer: "8% Cashback on Books",
                          status: "Active",
                          expires: "Apr 20, 2025",
                        },
                        {
                          merchant: "Home Decor",
                          offer: "12% Cashback on Home Items",
                          status: "Rejected",
                          expires: "N/A",
                        },
                      ].map((offer, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-200 rounded-md mr-4"></div>
                            <div>
                              <h4 className="font-medium text-[#091857]">{offer.offer}</h4>
                              <p className="text-sm text-muted-foreground">
                                {offer.merchant} • Expires: {offer.expires}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge
                              className={
                                offer.status === "Active"
                                  ? "bg-green-100 text-green-800"
                                  : offer.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }
                            >
                              {offer.status}
                            </Badge>
                            <Button variant="ghost" size="sm">
                              <span>Edit</span>
                            </Button>
                            {offer.status === "Pending" && (
                              <>
                                <Button variant="ghost" size="sm" className="text-green-600">
                                  <span>Approve</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="text-red-500">
                                  <span>Reject</span>
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="transactions" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#091857]">Transaction Management</CardTitle>
                    <CardDescription>Monitor and manage platform transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                              Transaction ID
                            </th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">User</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Merchant</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                            <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                            <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                            <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              id: "TX-12345",
                              user: "John Doe",
                              merchant: "Electronics Shop",
                              date: "Mar 15, 2025",
                              amount: "€8.50",
                              status: "Confirmed",
                            },
                            {
                              id: "TX-12344",
                              user: "Marie Dubois",
                              merchant: "Fashion Store",
                              date: "Mar 10, 2025",
                              amount: "€5.25",
                              status: "Pending",
                            },
                            {
                              id: "TX-12343",
                              user: "Thomas Bernard",
                              merchant: "Supermarket Chain",
                              date: "Mar 5, 2025",
                              amount: "€12.75",
                              status: "Confirmed",
                            },
                            {
                              id: "TX-12342",
                              user: "Sophie Martin",
                              merchant: "Online Bookstore",
                              date: "Feb 28, 2025",
                              amount: "€3.20",
                              status: "Confirmed",
                            },
                            {
                              id: "TX-12341",
                              user: "Lucas Petit",
                              merchant: "Home Decor",
                              date: "Feb 20, 2025",
                              amount: "€7.80",
                              status: "Disputed",
                            },
                          ].map((transaction, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4 text-sm text-[#091857]">{transaction.id}</td>
                              <td className="py-3 px-4 text-sm text-[#091857]">{transaction.user}</td>
                              <td className="py-3 px-4 text-sm text-muted-foreground">{transaction.merchant}</td>
                              <td className="py-3 px-4 text-sm text-muted-foreground">{transaction.date}</td>
                              <td className="py-3 px-4 text-sm text-right font-medium text-[#091857]">
                                {transaction.amount}
                              </td>
                              <td className="py-3 px-4 text-center">
                                <Badge
                                  className={
                                    transaction.status === "Confirmed"
                                      ? "bg-green-100 text-green-800"
                                      : transaction.status === "Pending"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-red-100 text-red-800"
                                  }
                                >
                                  {transaction.status}
                                </Badge>
                              </td>
                              <td className="py-3 px-4 text-right">
                                <Button variant="ghost" size="sm">
                                  <span>View</span>
                                </Button>
                                {transaction.status === "Pending" && (
                                  <Button variant="ghost" size="sm" className="text-green-600">
                                    <span>Approve</span>
                                  </Button>
                                )}
                                {transaction.status === "Disputed" && (
                                  <Button variant="ghost" size="sm" className="text-blue-600">
                                    <span>Resolve</span>
                                  </Button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-white mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-[#091857]">Platform Overview</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#091857]">New Users</span>
                      <span className="text-sm font-medium text-[#091857]">1,245</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-primary rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#091857]">New Merchants</span>
                      <span className="text-sm font-medium text-[#091857]">78</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-secondary rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#091857]">New Offers</span>
                      <span className="text-sm font-medium text-[#091857]">156</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-accent rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#091857]">Transactions</span>
                      <span className="text-sm font-medium text-[#091857]">5,678</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-primary rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-6 border-primary text-[#091857] hover:bg-primary/10">
                  <span>View Detailed Analytics</span>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-[#091857]">Pending Approvals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#091857]">New Merchants</span>
                      <Badge className="bg-yellow-100 text-yellow-800">12</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <span>Review</span>
                    </Button>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#091857]">Offer Approvals</span>
                      <Badge className="bg-yellow-100 text-yellow-800">24</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <span>Review</span>
                    </Button>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#091857]">Disputed Transactions</span>
                      <Badge className="bg-red-100 text-red-800">8</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <span>Review</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-[#091857]">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "New merchant registered", time: "10 minutes ago" },
                    { action: "Offer approved", time: "25 minutes ago" },
                    { action: "User reported issue", time: "1 hour ago" },
                    { action: "Payout processed", time: "2 hours ago" },
                    { action: "System maintenance", time: "5 hours ago" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center pb-2 border-b last:border-0 last:pb-0">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm text-[#091857]">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

