import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { BadgePercent } from "lucide-react"

export default function OfferCard() {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-32 bg-gray-200 relative">
        <div className="absolute top-2 right-2 bg-primary text-[#091857] text-xs font-medium px-2 py-1 rounded-full flex items-center">
          <BadgePercent className="h-3 w-3 mr-1" />
          10% Cashback
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 bg-gray-100 rounded-md mr-3 flex items-center justify-center">
            <span className="text-xs text-gray-500">Logo</span>
          </div>
          <div>
            <h3 className="font-medium text-[#091857]">Merchant Name</h3>
            <p className="text-xs text-muted-foreground">Category</p>
          </div>
        </div>
        <p className="text-sm text-[#091857]/80 mt-2">Get 10% cashback on all purchases over €50</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-xs text-muted-foreground">Expires in 5 days</span>
        <Button size="sm" className="bg-primary text-[#091857] hover:bg-primary/90">
          Activate
        </Button>
      </CardFooter>
    </Card>
  )
}

