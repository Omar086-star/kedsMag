import { Heart, CreditCard, Landmark, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Page Header */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold">Donate Now</h1>
            <p className="text-xl text-blue-100">
              Your contribution helps us provide relief, support, and development to communities in need.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-5">
              {/* Left Column - Impact Information */}
              <div className="md:col-span-2">
                <div className="sticky top-24 space-y-8">
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">Your Impact</h2>
                    <p className="text-gray-600">
                      Your donation directly supports our humanitarian projects and helps us make a difference in the
                      lives of those in need.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-lg bg-blue-50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-blue-100 p-2">
                          <Heart className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold">$25</h3>
                          <p className="text-sm text-gray-600">Provides emergency food for a family for one week</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-blue-50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-blue-100 p-2">
                          <Heart className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold">$50</h3>
                          <p className="text-sm text-gray-600">Supplies clean water to a community for one month</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-blue-50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-blue-100 p-2">
                          <Heart className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold">$100</h3>
                          <p className="text-sm text-gray-600">Provides medical care for 10 children</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-blue-50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-blue-100 p-2">
                          <Heart className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold">$250</h3>
                          <p className="text-sm text-gray-600">Funds a trauma therapy session for 20 individuals</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-3 text-lg font-bold">Donation Security</h3>
                    <p className="mb-4 text-sm text-gray-600">
                      Your donation is secure. We use industry-standard encryption to protect your personal and
                      financial information.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="h-8 w-12 rounded bg-gray-200"></div>
                      <div className="h-8 w-12 rounded bg-gray-200"></div>
                      <div className="h-8 w-12 rounded bg-gray-200"></div>
                      <div className="h-8 w-12 rounded bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Donation Form */}
              <div className="md:col-span-3">
                <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h2 className="mb-6 text-2xl font-bold text-gray-900">Make a Donation</h2>

                  <form className="space-y-8">
                    {/* Donation Type */}
                    <div className="space-y-4">
                      <Label>Donation Type</Label>
                      <RadioGroup defaultValue="one-time" className="flex flex-wrap gap-4">
                        <div className="flex-1">
                          <RadioGroupItem value="one-time" id="one-time" className="peer sr-only" />
                          <Label
                            htmlFor="one-time"
                            className="flex cursor-pointer justify-center rounded-md border border-gray-200 bg-white p-4 text-center hover:bg-gray-50 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 peer-data-[state=checked]:text-blue-600"
                          >
                            One-time
                          </Label>
                        </div>
                        <div className="flex-1">
                          <RadioGroupItem value="monthly" id="monthly" className="peer sr-only" />
                          <Label
                            htmlFor="monthly"
                            className="flex cursor-pointer justify-center rounded-md border border-gray-200 bg-white p-4 text-center hover:bg-gray-50 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 peer-data-[state=checked]:text-blue-600"
                          >
                            Monthly
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Donation Amount */}
                    <div className="space-y-4">
                      <Label>Donation Amount</Label>
                      <RadioGroup defaultValue="50" className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div>
                          <RadioGroupItem value="25" id="amount-25" className="peer sr-only" />
                          <Label
                            htmlFor="amount-25"
                            className="flex cursor-pointer justify-center rounded-md border border-gray-200 bg-white p-4 text-center hover:bg-gray-50 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 peer-data-[state=checked]:text-blue-600"
                          >
                            $25
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="50" id="amount-50" className="peer sr-only" />
                          <Label
                            htmlFor="amount-50"
                            className="flex cursor-pointer justify-center rounded-md border border-gray-200 bg-white p-4 text-center hover:bg-gray-50 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 peer-data-[state=checked]:text-blue-600"
                          >
                            $50
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="100" id="amount-100" className="peer sr-only" />
                          <Label
                            htmlFor="amount-100"
                            className="flex cursor-pointer justify-center rounded-md border border-gray-200 bg-white p-4 text-center hover:bg-gray-50 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 peer-data-[state=checked]:text-blue-600"
                          >
                            $100
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="custom" id="amount-custom" className="peer sr-only" />
                          <Label
                            htmlFor="amount-custom"
                            className="flex cursor-pointer justify-center rounded-md border border-gray-200 bg-white p-4 text-center hover:bg-gray-50 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 peer-data-[state=checked]:text-blue-600"
                          >
                            Custom
                          </Label>
                        </div>
                      </RadioGroup>
                      <div>
                        <Input type="number" placeholder="Enter custom amount" className="mt-2" />
                      </div>
                    </div>

                    {/* Donation Allocation */}
                    <div className="space-y-4">
                      <Label>Allocate Your Donation</Label>
                      <RadioGroup defaultValue="general" className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" />
                          <Label htmlFor="general">General Fund (Greatest Need)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="relief" id="relief" />
                          <Label htmlFor="relief">Emergency Relief</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="psychological" id="psychological" />
                          <Label htmlFor="psychological">Psychological Support</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="development" id="development" />
                          <Label htmlFor="development">Community Development</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold">Personal Information</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input id="phone" type="tel" />
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold">Payment Method</h3>
                      <Tabs defaultValue="card" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="card" className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4" /> Card
                          </TabsTrigger>
                          <TabsTrigger value="bank" className="flex items-center gap-2">
                            <Landmark className="h-4 w-4" /> Bank
                          </TabsTrigger>
                          <TabsTrigger value="paypal" className="flex items-center gap-2">
                            <Wallet className="h-4 w-4" /> PayPal
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="card" className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <Label htmlFor="card-number">Card Number</Label>
                            <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                          </div>
                          <div className="grid gap-4 md:grid-cols-3">
                            <div className="space-y-2 md:col-span-2">
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvc">CVC</Label>
                              <Input id="cvc" placeholder="123" required />
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="bank" className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <Label htmlFor="account-name">Account Name</Label>
                            <Input id="account-name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="account-number">Account Number</Label>
                            <Input id="account-number" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="routing-number">Routing Number</Label>
                            <Input id="routing-number" required />
                          </div>
                        </TabsContent>
                        <TabsContent value="paypal" className="pt-4">
                          <p className="mb-4 text-gray-600">
                            You will be redirected to PayPal to complete your donation.
                          </p>
                        </TabsContent>
                      </Tabs>
                    </div>

                    {/* Additional Comments */}
                    <div className="space-y-2">
                      <Label htmlFor="comments">Additional Comments (Optional)</Label>
                      <Textarea
                        id="comments"
                        placeholder="Share any additional information or special instructions for your donation"
                        rows={3}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                      <Heart className="mr-2 h-5 w-5" /> Complete Donation
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                      By completing this donation, you agree to our terms of service and privacy policy.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Donate */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Other Ways to Donate</h2>
            <p className="mb-12 text-lg text-gray-600">
              In addition to online donations, there are several other ways you can support our mission.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-blue-100 transition-all hover:border-blue-200 hover:shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-blue-600"
                  >
                    <rect width="16" height="12" x="4" y="6" rx="2" />
                    <path d="M22 10H2" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Mail a Check</h3>
                <p className="text-gray-600">
                  Send a check payable to "Qatra Humanitarian Association" to our mailing address:
                  <br />
                  <br />
                  123 Humanitarian St.
                  <br />
                  Beirut, Lebanon
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 transition-all hover:border-blue-200 hover:shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-blue-600"
                  >
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Wire Transfer</h3>
                <p className="text-gray-600">
                  For wire transfers, please contact our finance department for banking details:
                  <br />
                  <br />
                  Email: finance@qatra.org
                  <br />
                  Phone: +961 1 234 567
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 transition-all hover:border-blue-200 hover:shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-blue-600"
                  >
                    <path d="M12 13V7" />
                    <path d="m15 10-3 3-3-3" />
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                    <path d="M2 7h20" />
                    <path d="M2 11h9" />
                    <path d="M2 15h5" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">In-Kind Donations</h3>
                <p className="text-gray-600">
                  We accept in-kind donations such as medical supplies, food, clothing, and other essential items.
                  Contact us to arrange a donation:
                  <br />
                  <br />
                  Email: donations@qatra.org
                  <br />
                  Phone: +961 1 234 567
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
