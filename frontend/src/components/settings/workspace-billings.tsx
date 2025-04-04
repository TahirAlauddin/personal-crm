import { CreditCard, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SettingsSection } from "../ui/settings/section";

export default function PaymentManagement() {
  return (
    <SettingsSection title="Billing & Subscription">
      <h1 className="text-2xl font-bold mb-6">Manage Payment & Promos</h1>

      {/* Referral Code Section */}
      <div className="flex justify-between mb-8">
        <div>
          <h2 className="text-lg font-medium mb-1">Referral Code</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Apply your friend's referral code to receive one free month of CRM.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            placeholder="Enter referal code here"
            className="sm:max-w-md"
          />
          <Button className="sm:w-auto">Apply</Button>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="flex justify-between mb-8">
        <div>
          <h2 className="text-lg font-medium mb-1">Subscription</h2>
          <p className="text-sm text-muted-foreground mb-3">
            View your subscription or update your payment information.
          </p>
        </div>
        <Button variant="outline">Manage Subscription</Button>
      </div>

      {/* Billing Details Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-6">Billing Details</h2>

        <div className="flex gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-medium mb-2">Billing Email</h3>
              <p className="text-sm text-muted-foreground">
                brianfreddy@example.com
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium mb-2">Address</h3>
              <div className="text-sm text-muted-foreground">
                <p>1226 University Dr Menlo Park</p>
                <p>CA</p>
                <p>94025</p>
                <p>United States of America</p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-medium mb-2">ID Number</h3>
              <p className="text-sm text-muted-foreground">21984609129</p>
            </div>

            <Button variant="outline" className="mt-4">
              Update Billing Details
            </Button>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-base font-medium mb-4">Payment Methods</h3>

            <div className="space-y-3">
              {/* Credit Card */}
              <div className="border rounded-md p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">Mastercard Credit (21515934)</span>
                </div>
                <Badge
                  variant="outline"
                  className="bg-blue-50 text-blue-600 hover:bg-blue-50"
                >
                  Primary
                </Badge>
              </div>

              {/* PayPal */}
              <div className="border rounded-md p-3 flex gap-2 items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">Paypal (bria***@example.com)</span>
                </div>
                <Badge
                  variant="outline"
                  className="bg-orange-50 text-orange-600 hover:bg-orange-50"
                >
                  Secondary
                </Badge>
              </div>

              <Button variant="outline" className="w-full mt-3">
                Add Payment Method
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}
