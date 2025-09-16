import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardHeader from "@/components/dashboard-header"
import { Copy, Facebook, Gift, Mail, Share2, Twitter, Users } from "lucide-react"

export default function ReferralsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#091857]">Refer & Earn</h1>
            <p className="text-muted-foreground">Invite friends and earn bonus cashback</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-white mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Gift className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#091857] mb-2">Invite Friends & Earn €10</h2>
                  <p className="text-muted-foreground max-w-md mb-6">
                    For each friend who signs up and earns their first cashback, you'll receive a €10 bonus. Your friend
                    will also get €5 to start!
                  </p>

                  <div className="w-full max-w-md">
                    <div className="flex mb-4">
                      <Input readOnly value="https://cashrewards.com/ref/johndoe123" className="rounded-r-none" />
                      <Button className="rounded-l-none bg-primary text-[#091857] hover:bg-primary/90">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center">
                      <Button variant="outline" className="flex items-center border-primary/50 hover:bg-primary/10">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Button>
                      <Button variant="outline" className="flex items-center border-primary/50 hover:bg-primary/10">
                        <Facebook className="h-4 w-4 mr-2" />
                        Facebook
                      </Button>
                      <Button variant="outline" className="flex items-center border-primary/50 hover:bg-primary/10">
                        <Twitter className="h-4 w-4 mr-2" />
                        Twitter
                      </Button>
                      <Button variant="outline" className="flex items-center border-primary/50 hover:bg-primary/10">
                        <Share2 className="h-4 w-4 mr-2" />
                        More
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="referrals" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="referrals">My Referrals</TabsTrigger>
                <TabsTrigger value="earnings">Earnings History</TabsTrigger>
              </TabsList>

              <TabsContent value="referrals" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#091857]">My Referrals</CardTitle>
                    <CardDescription>Track the status of your invited friends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Marie Dubois",
                          email: "marie.d@example.com",
                          status: "Signed Up",
                          date: "Mar 15, 2025",
                          earned: false,
                        },
                        {
                          name: "Thomas Bernard",
                          email: "thomas.b@example.com",
                          status: "Earned Cashback",
                          date: "Mar 10, 2025",
                          earned: true,
                        },
                        {
                          name: "Sophie Martin",
                          email: "sophie.m@example.com",
                          status: "Earned Cashback",
                          date: "Mar 5, 2025",
                          earned: true,
                        },
                        {
                          name: "Lucas Petit",
                          email: "lucas.p@example.com",
                          status: "Invitation Sent",
                          date: "Mar 1, 2025",
                          earned: false,
                        },
                      ].map((referral, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                              <span className="text-xs text-gray-500">
                                {referral.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-medium text-[#091857]">{referral.name}</h4>
                              <p className="text-sm text-muted-foreground">{referral.email}</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <div
                              className={`px-2 py-1 rounded text-xs ${
                                referral.status === "Earned Cashback"
                                  ? "bg-green-100 text-green-800"
                                  : referral.status === "Signed Up"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {referral.status}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">Invited: {referral.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="earnings" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#091857]">Earnings History</CardTitle>
                    <CardDescription>Your referral bonus earnings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Thomas Bernard", amount: "€10.00", date: "Mar 12, 2025", status: "Confirmed" },
                        { name: "Sophie Martin", amount: "€10.00", date: "Mar 7, 2025", status: "Confirmed" },
                      ].map((earning, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-primary/20 rounded-full mr-3 flex items-center justify-center">
                              <Gift className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-[#091857]">Referral Bonus: {earning.name}</h4>
                              <p className="text-sm text-muted-foreground">{earning.date}</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="font-medium text-[#091857]">{earning.amount}</span>
                            <span className="text-xs text-green-600">{earning.status}</span>
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
            <Card className="bg-white mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-[#091857]">Referral Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Invites Sent</p>
                      <p className="text-2xl font-bold text-[#091857]">12</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Successful Referrals</p>
                      <p className="text-2xl font-bold text-[#091857]">2</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                      <Gift className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Earnings</p>
                      <p className="text-2xl font-bold text-[#091857]">€20.00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-[#091857]">How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-[#091857] font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#091857] mb-1">Invite Friends</h4>
                      <p className="text-sm text-muted-foreground">
                        Share your unique referral link with friends via email, social media, or messaging apps.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-[#091857] font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#091857] mb-1">Friends Sign Up</h4>
                      <p className="text-sm text-muted-foreground">
                        Your friends create an account using your referral link and receive a €5 welcome bonus.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-[#091857] font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#091857] mb-1">Earn Rewards</h4>
                      <p className="text-sm text-muted-foreground">
                        Once your friend earns their first cashback, you'll receive a €10 bonus added to your account.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-[#091857] font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#091857] mb-1">Withdraw Your Earnings</h4>
                      <p className="text-sm text-muted-foreground">
                        Cash out your referral bonuses along with your regular cashback earnings.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

