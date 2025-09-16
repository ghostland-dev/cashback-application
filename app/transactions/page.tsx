import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import DashboardHeader from "@/components/dashboard-header"
import { Badge } from "@/components/ui/badge"
import { Calendar, Download, Filter, Search } from "lucide-react"

export default function TransactionsPage() {
  const transactions = [
    {
      id: "TX-12345",
      merchant: "Supermarket Chain",
      date: "Mar 15, 2025",
      amount: "€8.50",
      status: "Confirmed",
      category: "Groceries",
      orderAmount: "€85.00",
    },
    {
      id: "TX-12344",
      merchant: "Fashion Store",
      date: "Mar 10, 2025",
      amount: "€5.25",
      status: "Pending",
      category: "Fashion",
      orderAmount: "€75.00",
    },
    {
      id: "TX-12343",
      merchant: "Electronics Shop",
      date: "Mar 5, 2025",
      amount: "€12.75",
      status: "Confirmed",
      category: "Electronics",
      orderAmount: "€255.00",
    },
    {
      id: "TX-12342",
      merchant: "Online Bookstore",
      date: "Feb 28, 2025",
      amount: "€3.20",
      status: "Confirmed",
      category: "Books",
      orderAmount: "€40.00",
    },
    {
      id: "TX-12341",
      merchant: "Home Decor",
      date: "Feb 20, 2025",
      amount: "€7.80",
      status: "Pending",
      category: "Home",
      orderAmount: "€130.00",
    },
    {
      id: "TX-12340",
      merchant: "Travel Agency",
      date: "Feb 15, 2025",
      amount: "€24.50",
      status: "Confirmed",
      category: "Travel",
      orderAmount: "€490.00",
    },
    {
      id: "TX-12339",
      merchant: "Beauty Store",
      date: "Feb 10, 2025",
      amount: "€6.75",
      status: "Confirmed",
      category: "Beauty",
      orderAmount: "€45.00",
    },
    {
      id: "TX-12338",
      merchant: "Restaurant",
      date: "Feb 5, 2025",
      amount: "€4.20",
      status: "Confirmed",
      category: "Dining",
      orderAmount: "€84.00",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#091857]">Transactions</h1>
            <p className="text-muted-foreground">Track your cashback earnings and history</p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <Card className="bg-white mb-8">
          <CardHeader>
            <CardTitle className="text-lg text-[#091857]">Transaction Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Total Cashback</p>
                <p className="text-2xl font-bold text-[#091857]">€128.90</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Confirmed</p>
                <p className="text-2xl font-bold text-green-600">€113.15</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">€15.75</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Total Transactions</p>
                <p className="text-2xl font-bold text-[#091857]">24</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-xl text-[#091857]">Transaction History</CardTitle>
              <CardDescription>View and filter your cashback transactions</CardDescription>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search transactions..."
                  className="pl-9 w-full sm:w-[200px] bg-white border-gray-200"
                />
              </div>

              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Date</span>
                </Button>

                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Filter</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Transaction ID</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Merchant</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Category</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Order Amount</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Cashback</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b hover:bg-gray-50 cursor-pointer">
                      <td className="py-3 px-4 text-sm text-[#091857]">{transaction.id}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded mr-2"></div>
                          <span className="text-sm font-medium text-[#091857]">{transaction.merchant}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{transaction.date}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{transaction.category}</td>
                      <td className="py-3 px-4 text-sm text-right text-muted-foreground">{transaction.orderAmount}</td>
                      <td className="py-3 px-4 text-sm text-right font-medium text-[#091857]">{transaction.amount}</td>
                      <td className="py-3 px-4 text-center">
                        <Badge
                          variant={transaction.status === "Confirmed" ? "default" : "outline"}
                          className={
                            transaction.status === "Confirmed"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "border-yellow-200 text-yellow-800"
                          }
                        >
                          {transaction.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-muted-foreground">Showing 1-8 of 24 transactions</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

