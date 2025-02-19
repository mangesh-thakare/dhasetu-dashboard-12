
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  DollarSign,
  CreditCard,
  TrendingUp,
  UserPlus,
  Send,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", amount: 2400 },
  { name: "Feb", amount: 1398 },
  { name: "Mar", amount: 9800 },
  { name: "Apr", amount: 3908 },
  { name: "May", amount: 4800 },
  { name: "Jun", amount: 3800 },
];

const friendRequests = [
  { id: 1, name: "Rahul Shah", amount: 25.50, type: "request" },
  { id: 2, name: "Priya Patel", amount: 15.75, type: "split" },
  { id: 3, name: "Vikram Singh", amount: 42.00, type: "request" },
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="grid gap-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Balance</p>
                <h3 className="text-2xl font-bold text-gray-900">$24,562.00</h3>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <ArrowUpIcon className="w-4 h-4 mr-1" />
                  +2.5%
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Spending</p>
                <h3 className="text-2xl font-bold text-gray-900">$3,458.00</h3>
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <ArrowDownIcon className="w-4 h-4 mr-1" />
                  -4.2%
                </p>
              </div>
              <CreditCard className="w-8 h-8 text-primary" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Investments</p>
                <h3 className="text-2xl font-bold text-gray-900">$12,680.00</h3>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <ArrowUpIcon className="w-4 h-4 mr-1" />
                  +12.5%
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Charts */}
          <Card className="p-6 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Monthly Overview</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#1E2F97"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Friend Requests */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Friend Requests</h3>
              <Button variant="outline" size="sm">
                <UserPlus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {friendRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between p-3 bg-secondary rounded-lg"
                >
                  <div>
                    <p className="font-medium">{request.name}</p>
                    <p className="text-sm text-gray-600">
                      ${request.amount.toFixed(2)} • {request.type}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-primary">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
