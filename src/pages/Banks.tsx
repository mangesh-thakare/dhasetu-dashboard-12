
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const bankAccounts = [
  {
    id: 1,
    bank: "HDFC Bank",
    accountType: "Savings",
    accountNumber: "****6789",
    balance: "$12,450.00",
  },
  {
    id: 2,
    bank: "ICICI Bank",
    accountType: "Current",
    accountNumber: "****4321",
    balance: "$8,275.00",
  },
  {
    id: 3,
    bank: "SBI",
    accountType: "Savings",
    accountNumber: "****9876",
    balance: "$3,837.00",
  },
];

const Banks = () => {
  return (
    <Layout>
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">Connected Banks</h3>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add New Bank
        </Button>
      </div>

      <div className="grid gap-6">
        <Card className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bank Name</TableHead>
                <TableHead>Account Type</TableHead>
                <TableHead>Account Number</TableHead>
                <TableHead className="text-right">Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bankAccounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell className="font-medium">{account.bank}</TableCell>
                  <TableCell>{account.accountType}</TableCell>
                  <TableCell>{account.accountNumber}</TableCell>
                  <TableCell className="text-right">{account.balance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </Layout>
  );
};

export default Banks;
