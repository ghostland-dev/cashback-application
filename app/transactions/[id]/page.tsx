import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import DashboardHeader from "@/components/dashboard-header"
import { ArrowLeft, Download, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function TransactionDetailsPage({ params }: { params: { id: string } }) {
  // This would normally come from an API call using the ID
  const transaction = {
    id: params.id,
    merchant: "Electronics Shop",
    date: "Mar 5, 2025",
    time: "14:32",
    amount: "€12.75",
    status: "Confirmed",
    category: "Electronics",
    orderAmount: "€255.00",
    orderNumber: "ORD-987654",
    cashbackRate: "5%",
    paymentMethod: "Visa •••• 4567",
    confirmationDate: "Mar 8, 2025",
    trackingMethod: "Card-linked offer",
    notes: "Cashback for purchasing a new smartphone and accessories.",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/transactions">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Transactions
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-[#091857]">Transaction Details</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-white mb-6">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl text-[#091857]">Transaction {transaction.id}</CardTitle>
                  <CardDescription>Details of your cashback transaction</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-center border-b pb-6 mb-6">
                  <div className="flex items-center mb-4 md:mb-0 md:mr-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-md mr-4"></div>
                    <div>
                      <h3 className="text-lg font-medium text-[#091857]">{transaction.merchant}</h3>
                      <p className="text-sm text-muted-foreground">{transaction.category}</p>
                    </div>
                  </div>
                  <div className="md:ml-auto text-right">
                    <p className="text-sm text-muted-foreground mb-1">Cashback Amount</p>
                    <p className="text-2xl font-bold text-[#091857]">{transaction.amount}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Transaction Information</h3>
                    <dl className="space-y-4">
                      <div className="flex justify-between">
                        <dt className="text-sm text-muted-foreground">Status</dt>
                        <dd>
                          <Badge
                            className={
                              transaction.status === "Confirmed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {transaction.status}
                          </Badge>
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm text-muted-foreground">Transaction Date</dt>
                        <dd className="text-sm font-medium text-[#091857]">
                          {transaction.date}, {transaction.time}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm text-muted-foreground">Confirmation Date</dt>
                        <dd className="text-sm font-medium text-[#091857]">{transaction.confirmationDate}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm text-muted-foreground">Order Number</dt>
                        <dd className="text-sm font-medium text-[#091857]">{transaction.orderNumber}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm text-muted-foreground">Tracking Method</dt>
                        <dd className="text-sm font-medium text-[#091857]">{transaction.trackingMethod}</dd>
                      </div>
                    </dl>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Payment Information</h3>
                    <dl className="space-y-4">
                      <div className="flex justify-between">
                        <dt className="text-sm text-muted-foreground">Order Amount</dt>
                        <dd className="text-sm font-medium text-[#091857]">{transaction.orderAmount}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm text-muted-foreground">Cashback Rate</dt>
                        <dd className="text-sm font-medium text-[#091857]">{transaction.cashbackRate}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm text-muted-foreground">Cashback Amount</dt>
                        <dd className="text-sm font-medium text-[#091857]">{transaction.amount}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm text-muted-foreground">Payment Method</dt>
                        <dd className="text-sm font-medium text-[#091857]">{transaction.paymentMethod}</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {transaction.notes && (
                  <div className="mt-6 pt-6 border-t">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Notes</h3>
                    <p className="text-sm text-[#091857]">{transaction.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-[#091857]">Items Purchased</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Smartphone XYZ", price: "€199.00", quantity: 1 },
                    { name: "Phone Case", price: "€29.00", quantity: 1 },
                    { name: "Screen Protector", price: "€15.00", quantity: 1 },
                    { name: "Wireless Charger", price: "€12.00", quantity: 1 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded mr-3"></div>
                        <div>
                          <h4 className="font-medium text-[#091857]">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-medium text-[#091857]">{item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Subtotal</span>
                    <span className="text-sm text-[#091857]">€255.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Tax</span>
                    <span className="text-sm text-[#091857]">€0.00</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span className="text-[#091857]">Total</span>
                    <span className="text-[#091857]">€255.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-white mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-[#091857]">Merchant Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-md mr-4"></div>
                  <div>
                    <h3 className="text-lg font-medium text-[#091857]">{transaction.merchant}</h3>
                    <p className="text-sm text-muted-foreground">{transaction.category}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-[#091857] mb-1">Current Cashback Rate</p>
                    <p className="text-sm text-muted-foreground">Up to 5% on all purchases</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-[#091857] mb-1">Website</p>
                    <p className="text-sm text-primary">www.electronicsshop.com</p>
                  </div>

                  <Button variant="outline" className="w-full border-primary text-[#091857] hover:bg-primary/10">
                    View Merchant
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-[#091857]">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    If you have any questions about this transaction or if the cashback amount seems incorrect, our
                    support team is here to help.
                  </p>

                  <Button className="w-full bg-primary text-[#091857] hover:bg-primary/90">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-[#091857]">Similar Offers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded mr-3"></div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#091857]">Tech Store {i}</h4>
                        <p className="text-xs text-muted-foreground">Up to 8% cashback</p>
                      </div>
                    </div>
                  ))}

                  <Button variant="outline" className="w-full border-primary text-[#091857] hover:bg-primary/10">
                    View All Electronics Offers
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
