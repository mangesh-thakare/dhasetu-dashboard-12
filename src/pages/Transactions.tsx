import { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Filter, MapPin } from "lucide-react";

// Mapping of transaction descriptions to logos
const transactionLogos: Record<string, string> = {
  "Starbucks Coffee": "https://mcdonough.com/wp-content/uploads/2020/09/starbucks-logo-png-transparent.png",
  "Salary Credit": "https://w7.pngwing.com/pngs/1024/970/png-transparent-black-wallet-logo-money-wallet-computer-icons-payment-finance-wallet-icons-no-attribution-text-service-logo-thumbnail.png",
  "Amazon.in": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "Uber Ride": "data:image/png;base64,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",
  "Netflix Subscription": "data:image/png;base64,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",
};

// Mapping of banks to their logos
const bankLogos: Record<string, string> = {
  "HDFC Bank": "https://e7.pngegg.com/pngimages/257/159/png-clipart-hdfc-logo-thumbnail-bank-logos-thumbnail.png",
  "ICICI Bank": "https://e7.pngegg.com/pngimages/229/146/png-clipart-logo-icici-bank-finance-bank-of-india-bank-text-logo.png",
  "SBI": "https://w7.pngwing.com/pngs/20/526/png-transparent-state-bank-of-india-hd-logo.png",
};

// Sample transaction data
const transactions = [
  {
    id: 1,
    date: "2025-01-15",
    description: "Starbucks Coffee",
    type: "debit",
    amount: -1250.0,
    bank: "HDFC Bank",
    account: "****6789",
    category: "Food & Dining",
    location: "Koregaon Park, Pune",
  },
  {
    id: 2,
    date: "2025-01-25",
    description: "Salary Credit",
    type: "credit",
    amount: 85000.0,
    bank: "ICICI Bank",
    account: "****4321",
    category: "Income",
    location: "Hinjewadi, Pune",
  },
  {
    id: 3,
    date: "2025-02-01",
    description: "Amazon.in",
    type: "debit",
    amount: -3499.99,
    bank: "HDFC Bank",
    account: "****6789",
    category: "Shopping",
    location: "Viman Nagar, Pune",
  },
  {
    id: 4,
    date: "2025-02-10",
    description: "Uber Ride",
    type: "debit",
    amount: -450.0,
    bank: "SBI",
    account: "****9876",
    category: "Transportation",
    location: "Kharadi, Pune",
  },
  {
    id: 5,
    date: "2025-02-15",
    description: "Netflix Subscription",
    type: "debit",
    amount: -649.0,
    bank: "ICICI Bank",
    account: "****4321",
    category: "Entertainment",
    location: "Baner, Pune",
  },
];

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBank, setSelectedBank] = useState<string | undefined>();
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesBank = !selectedBank || transaction.bank === selectedBank;
    const matchesCategory = !selectedCategory || transaction.category === selectedCategory;
    return matchesSearch && matchesBank && matchesCategory;
  });

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Transactions</h3>
          <Button className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Advanced Filters
          </Button>
        </div>

        <Card className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedBank} onValueChange={setSelectedBank}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Bank" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(bankLogos).map((bank) => (
                  <SelectItem key={bank} value={bank}>
                    {bank}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Food & Dining">Food & Dining</SelectItem>
                <SelectItem value="Shopping">Shopping</SelectItem>
                <SelectItem value="Transportation">Transportation</SelectItem>
                <SelectItem value="Entertainment">Entertainment</SelectItem>
                <SelectItem value="Income">Income</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ScrollArea className="h-[600px] rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Bank Account</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id} className="group hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                    <TableCell>{new Date(transaction.date).toLocaleDateString("en-IN")}</TableCell>
                    <TableCell className="text-center">
                      {transactionLogos[transaction.description] ? (
                        <img
                          src={transactionLogos[transaction.description]}
                          alt={transaction.description}
                          className="w-8 h-8 mx-auto hover:scale-110 transition-transform duration-200"
                          onError={(e) => (e.currentTarget.style.display = 'none')}
                        />
                      ) : (
                        <span>{transaction.description}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      <img
                        src={bankLogos[transaction.bank]}
                        alt={transaction.bank}
                        className="w-8 h-8 mx-auto hover:scale-110 transition-transform duration-200"
                      />
                    </TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      {transaction.location}
                    </TableCell>
                    <TableCell className={`text-right font-medium ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
                      ₹{Math.abs(transaction.amount).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </Card>
      </div>
    </Layout>
  );
};

export default Transactions;
