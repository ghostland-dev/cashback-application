import { Badge } from "@/components/ui/badge"

export default function TransactionList() {
  const transactions = [
    {
      id: 1,
      merchant: "Supermarket Chain",
      date: "Mar 15, 2025",
      amount: "€8.50",
      status: "Confirmed",
      category: "Groceries",
    },
    {
      id: 2,
      merchant: "Fashion Store",
      date: "Mar 10, 2025",
      amount: "€5.25",
      status: "Pending",
      category: "Fashion",
    },
    {
      id: 3,
      merchant: "Electronics Shop",
      date: "Mar 5, 2025",
      amount: "€12.75",
      status: "Confirmed",
      category: "Electronics",
    },
    {
      id: 4,
      merchant: "Online Bookstore",
      date: "Feb 28, 2025",
      amount: "€3.20",
      status: "Confirmed",
      category: "Books",
    },
    {
      id: 5,
      merchant: "Home Decor",
      date: "Feb 20, 2025",
      amount: "€7.80",
      status: "Pending",
      category: "Home",
    },
  ]

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-md mr-3"></div>
            <div>
              <h4 className="font-medium text-[#091857]">{transaction.merchant}</h4>
              <div className="flex items-center mt-1">
                <span className="text-xs text-muted-foreground">{transaction.date}</span>
                <span className="mx-2 text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{transaction.category}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-medium text-[#091857]">{transaction.amount}</span>
            <Badge
              variant={transaction.status === "Confirmed" ? "default" : "outline"}
              className={
                transaction.status === "Confirmed"
                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                  : "border-orange-200 text-orange-800"
              }
            >
              {transaction.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
