import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import DashboardHeader from "@/components/dashboard-header"
import { CreditCard, Edit, Mail, Phone, Shield, User } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#091857]">My Profile</h1>
            <p className="text-muted-foreground">Manage your personal information and preferences</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                      <AvatarFallback className="bg-primary/20 text-[#091857] text-xl">JD</AvatarFallback>
                    </Avatar>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-white border-primary"
                    >
                      <Edit className="h-4 w-4 text-[#091857]" />
                      <span className="sr-only">Change avatar</span>
                    </Button>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-[#091857]">John Doe</h2>
                  <p className="text-sm text-muted-foreground">Member since March 2025</p>
                  <Badge className="mt-2 bg-primary/20 text-[#091857] hover:bg-primary/30">Gold Member</Badge>
                </div>

                <div className="mt-6 space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    <span>Personal Information</span>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Payment Methods</span>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Shield className="mr-2 h-4 w-4" />
                    <span>Security</span>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Notifications</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white mt-6">
              <CardHeader>
                <CardTitle className="text-lg text-[#091857]">Membership Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#091857]">Cashback Earned</span>
                      <span className="text-sm font-medium text-[#091857]">€128.90 / €200</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-primary rounded-full" style={{ width: "64%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">€71.10 more to reach Platinum status</p>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-sm font-medium text-[#091857] mb-2">Current Benefits:</h4>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li>• Priority customer support</li>
                      <li>• Exclusive Gold member offers</li>
                      <li>• 5% bonus on cashback withdrawals</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="personal">Personal Information</TabsTrigger>
                <TabsTrigger value="payment">Payment Methods</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>

              <TabsContent key="personal" value="personal" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#091857]">Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Doe" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" defaultValue="john.doe@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="flex">
                            <Input id="phone" type="tel" defaultValue="+33 6 12 34 56 78" />
                            <Button variant="outline" size="icon" className="ml-2 border-primary">
                              <Phone className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue="123 Main Street" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" defaultValue="Paris" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postalCode">Postal Code</Label>
                          <Input id="postalCode" defaultValue="75001" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Input id="country" defaultValue="France" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="birthdate">Date of Birth</Label>
                        <Input id="birthdate" type="date" defaultValue="1990-01-01" />
                      </div>

                      <div className="flex justify-end">
                        <Button className="bg-primary text-[#091857] hover:bg-primary/90">
                          <span>Save Changes</span>
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent key="payment" value="payment" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#091857]">Payment Methods</CardTitle>
                    <CardDescription>Manage your payment cards and withdrawal preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-[#091857] mb-4">Linked Cards</h3>
                        <div className="space-y-4">
                          {[1, 2].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center">
                                <div className="w-12 h-8 bg-gray-200 rounded mr-4"></div>
                                <div>
                                  <h4 className="font-medium text-[#091857]">
                                    •••• •••• •••• {i === 1 ? "4567" : "8901"}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">Expires {i === 1 ? "05/27" : "12/26"}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm">
                                  <span>Edit</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="text-red-500">
                                  <span>Remove</span>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Button variant="outline" className="mt-4 border-primary text-[#091857] hover:bg-primary/10">
                          <CreditCard className="mr-2 h-4 w-4" />
                          <span>Add New Card</span>
                        </Button>
                      </div>

                      <div className="pt-6 border-t">
                        <h3 className="text-lg font-medium text-[#091857] mb-4">Withdrawal Methods</h3>
                        <div className="space-y-4">
                          <div className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-12 h-8 bg-gray-200 rounded mr-4"></div>
                                <div>
                                  <h4 className="font-medium text-[#091857]">Bank Account</h4>
                                  <p className="text-sm text-muted-foreground">IBAN: FR76 **** **** **** **** 123</p>
                                </div>
                              </div>
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Default</Badge>
                            </div>
                          </div>

                          <div className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-12 h-8 bg-gray-200 rounded mr-4"></div>
                                <div>
                                  <h4 className="font-medium text-[#091857]">PayPal</h4>
                                  <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm">
                                <span>Set as Default</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" className="mt-4 border-primary text-[#091857] hover:bg-primary/10">
                          <span>Add Withdrawal Method</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent key="security" value="security" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#091857]">Security Settings</CardTitle>
                    <CardDescription>Manage your account security preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-[#091857] mb-4">Password</h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <Input id="currentPassword" type="password" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input id="newPassword" type="password" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                            <Input id="confirmPassword" type="password" />
                          </div>
                          <Button className="bg-primary text-[#091857] hover:bg-primary/90">
                            <span>Update Password</span>
                          </Button>
                        </div>
                      </div>

                      <div className="pt-6 border-t">
                        <h3 className="text-lg font-medium text-[#091857] mb-4">Two-Factor Authentication</h3>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[#091857]">Protect your account with 2FA</p>
                            <p className="text-sm text-muted-foreground">
                              Add an extra layer of security to your account by requiring a verification code in
                              addition to your password.
                            </p>
                          </div>
                          <Switch id="2fa" />
                        </div>
                      </div>

                      <div className="pt-6 border-t">
                        <h3 className="text-lg font-medium text-[#091857] mb-4">Login Sessions</h3>
                        <div className="space-y-4">
                          <div className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-[#091857]">Current Session</h4>
                                <p className="text-sm text-muted-foreground">
                                  Paris, France • Chrome on macOS • IP: 192.168.1.xxx
                                </p>
                                <p className="text-xs text-green-600 mt-1">Active now</p>
                              </div>
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Current</Badge>
                            </div>
                          </div>

                          <div className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-[#091857]">Mobile App</h4>
                                <p className="text-sm text-muted-foreground">
                                  Paris, France • CashRewards App on iOS • IP: 192.168.1.xxx
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">Last active: 2 hours ago</p>
                              </div>
                              <Button variant="ghost" size="sm" className="text-red-500">
                                <span>Revoke</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" className="mt-4 text-red-500 border-red-200 hover:bg-red-50">
                          <span>Log Out of All Devices</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent key="notifications" value="notifications" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#091857]">Notification Preferences</CardTitle>
                    <CardDescription>Manage how and when we contact you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-[#091857] mb-4">Email Notifications</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[#091857]">New Offers</p>
                              <p className="text-sm text-muted-foreground">
                                Receive notifications about new cashback offers
                              </p>
                            </div>
                            <Switch id="email-offers" defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[#091857]">Cashback Confirmations</p>
                              <p className="text-sm text-muted-foreground">
                                Get notified when your cashback is confirmed
                              </p>
                            </div>
                            <Switch id="email-cashback" defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[#091857]">Withdrawals</p>
                              <p className="text-sm text-muted-foreground">
                                Receive notifications about withdrawal status
                              </p>
                            </div>
                            <Switch id="email-withdrawals" defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[#091857]">Marketing & Promotions</p>
                              <p className="text-sm text-muted-foreground">
                                Receive promotional emails and special offers
                              </p>
                            </div>
                            <Switch id="email-marketing" />
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t">
                        <h3 className="text-lg font-medium text-[#091857] mb-4">Push Notifications</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[#091857]">New Offers</p>
                              <p className="text-sm text-muted-foreground">
                                Receive push notifications about new cashback offers
                              </p>
                            </div>
                            <Switch id="push-offers" defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[#091857]">Cashback Confirmations</p>
                              <p className="text-sm text-muted-foreground">
                                Get push notifications when your cashback is confirmed
                              </p>
                            </div>
                            <Switch id="push-cashback" defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[#091857]">Nearby Offers</p>
                              <p className="text-sm text-muted-foreground">
                                Get notified about offers near your location
                              </p>
                            </div>
                            <Switch id="push-nearby" />
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t">
                        <h3 className="text-lg font-medium text-[#091857] mb-4">SMS Notifications</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[#091857]">Account Security</p>
                              <p className="text-sm text-muted-foreground">
                                Receive SMS for security alerts and verification codes
                              </p>
                            </div>
                            <Switch id="sms-security" defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[#091857]">Special Promotions</p>
                              <p className="text-sm text-muted-foreground">
                                Get SMS about limited-time offers and promotions
                              </p>
                            </div>
                            <Switch id="sms-promotions" />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button className="bg-primary text-[#091857] hover:bg-primary/90">
                          <span>Save Preferences</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

