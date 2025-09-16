import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BadgePercent, CreditCard, Gift, Wallet } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Wallet className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold text-[#091857]">CashRewards</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#features" className="text-[#091857] hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-[#091857] hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#merchants" className="text-[#091857] hover:text-primary transition-colors">
              Merchants
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="/login">
              <Button variant="outline" className="border-primary text-[#091857] hover:bg-primary/10">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-primary text-[#091857] hover:bg-primary/90">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-white to-primary/10">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-[#091857] leading-tight mb-6">
                Earn Cashback on Your Everyday Purchases
              </h1>
              <p className="text-lg text-[#091857]/80 mb-8">
                Join thousands of smart shoppers who save money with CashRewards. Get cashback, exclusive discounts, and
                special offers from your favorite brands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-primary text-[#091857] hover:bg-primary/90 w-full sm:w-auto">
                    Start Saving Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-secondary text-[#091857] hover:bg-secondary/10 w-full sm:w-auto"
                  >
                    Learn How It Works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 -left-6 w-full h-full bg-accent rounded-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary rounded-xl"></div>
                <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mb-4">
                      <Wallet className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#091857]">Your Cashback Summary</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-[#091857]">Available Balance</span>
                      <span className="text-xl font-bold text-[#091857]">€42.50</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-[#091857]">Pending Cashback</span>
                      <span className="text-xl font-bold text-[#091857]">€15.75</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-[#091857]">Total Saved</span>
                      <span className="text-xl font-bold text-[#091857]">€128.90</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-primary text-[#091857] hover:bg-primary/90">View Dashboard</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#091857] mb-4">Why Choose CashRewards?</h2>
              <p className="text-lg text-[#091857]/70 max-w-2xl mx-auto">
                Our platform offers a comprehensive suite of money-saving features designed to maximize your savings on
                everyday purchases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 mb-6">
                  <BadgePercent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-[#091857] mb-3">Cashback Rewards</h3>
                <p className="text-[#091857]/70">
                  Earn up to 30% cashback on purchases from our partner merchants, both online and in-store.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-secondary/20 mb-6">
                  <Gift className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-[#091857] mb-3">Exclusive Offers</h3>
                <p className="text-[#091857]/70">
                  Access special promotions and discounts available only to CashRewards members.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent/20 mb-6">
                  <CreditCard className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-[#091857] mb-3">Easy Withdrawals</h3>
                <p className="text-[#091857]/70">
                  Transfer your cashback to your bank account, PayPal, or convert to gift cards with additional bonuses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#091857] mb-4">How CashRewards Works</h2>
              <p className="text-lg text-[#091857]/70 max-w-2xl mx-auto">Start saving in just a few simple steps</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
                  <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-[#091857] font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-[#091857] mb-4 mt-4">Sign Up for Free</h3>
                  <p className="text-[#091857]/70">
                    Create your account in seconds. No credit card required, and registration is completely free.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
                  <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-[#091857] font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-[#091857] mb-4 mt-4">Shop Through Our Platform</h3>
                  <p className="text-[#091857]/70">
                    Browse offers and shop at your favorite stores through our website or app. Link your payment cards
                    for automatic cashback.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
                  <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-accent flex items-center justify-center text-[#091857] font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-[#091857] mb-4 mt-4">Earn & Withdraw Cashback</h3>
                  <p className="text-[#091857]/70">
                    Watch your cashback accumulate in your account. Once you reach the minimum threshold, withdraw your
                    earnings.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/register">
                <Button size="lg" className="bg-primary text-[#091857] hover:bg-primary/90">
                  Start Earning Cashback
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Merchants Section */}
        <section id="merchants" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#091857] mb-4">Our Partner Merchants</h2>
              <p className="text-lg text-[#091857]/70 max-w-2xl mx-auto">
                Shop at thousands of popular stores and earn cashback on every purchase
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-24">
                  <div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/merchants">
                <Button variant="outline" className="border-primary text-[#091857] hover:bg-primary/10">
                  View All Merchants
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#091857] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Wallet className="h-6 w-6 text-primary" />
                <span className="ml-2 text-xl font-bold">CashRewards</span>
              </div>
              <p className="text-gray-300 mb-4">The smart way to save on your everyday purchases.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-300 hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-gray-300 hover:text-primary transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-gray-300 hover:text-primary transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-300 hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CashRewards. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

