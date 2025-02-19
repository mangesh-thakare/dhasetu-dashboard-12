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

const savingsChallenges = [
  {
    id: 1,
    title: "Save $500 in 30 days",
    target: 500,
    current: 350,
    daysLeft: 12,
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Investing Challenge",
    target: 1000,
    current: 400,
    daysLeft: 20,
    difficulty: "Medium",
  },
  {
    id: 3,
    title: "Emergency Fund",
    target: 2000,
    current: 800,
    daysLeft: 45,
    difficulty: "Hard",
  },
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

        {/* Savings Challenges */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Active Savings Challenges</h3>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="grid gap-6">
            {savingsChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className="p-4 bg-secondary dark:bg-dark-card rounded-lg transform transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {challenge.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {challenge.daysLeft} days left
                    </p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    challenge.difficulty === "Easy"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                      : challenge.difficulty === "Medium"
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                      : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                  }`}>
                    {challenge.difficulty}
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      ${challenge.current} / ${challenge.target}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-dark-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{
                        width: `${(challenge.current / challenge.target) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
