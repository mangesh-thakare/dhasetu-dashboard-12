
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

const transactions = [
  {
    id: 1,
    date: "2024-02-20",
    description: "Starbucks Coffee",
    type: "debit",
    amount: -15.50,
    bank: "HDFC Bank",
    account: "****6789",
    category: "Food & Dining",
    location: "Indiranagar, Bangalore",
  },
  {
    id: 2,
    date: "2024-02-19",
    description: "Salary Credit",
    type: "credit",
    amount: 5000.00,
    bank: "ICICI Bank",
    account: "****4321",
    category: "Income",
    location: "Electronic City, Bangalore",
  },
  {
    id: 3,
    date: "2024-02-19",
    description: "Amazon.in",
    type: "debit",
    amount: -89.99,
    bank: "HDFC Bank",
    account: "****6789",
    category: "Shopping",
    location: "HSR Layout, Bangalore",
  },
  {
    id: 4,
    date: "2024-02-18",
    description: "Uber Ride",
    type: "debit",
    amount: -25.00,
    bank: "SBI",
    account: "****9876",
    category: "Transportation",
    location: "Koramangala, Bangalore",
  },
  {
    id: 5,
    date: "2024-02-18",
    description: "Netflix Subscription",
    type: "debit",
    amount: -12.99,
    bank: "ICICI Bank",
    account: "****4321",
    category: "Entertainment",
    location: "Whitefield, Bangalore",
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
                <SelectItem value="HDFC Bank">HDFC Bank</SelectItem>
                <SelectItem value="ICICI Bank">ICICI Bank</SelectItem>
                <SelectItem value="SBI">SBI</SelectItem>
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
                  <TableRow key={transaction.id} className="group">
                    <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                    <TableCell className="font-medium">{transaction.description}</TableCell>
                    <TableCell>
                      {transaction.bank} ({transaction.account})
                    </TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {transaction.location}
                      </div>
                    </TableCell>
                    <TableCell className={`text-right font-medium ${
                      transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'credit' ? '+' : ''}
                      ${Math.abs(transaction.amount).toFixed(2)}
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
