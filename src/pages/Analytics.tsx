import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyData = [
  { name: "Jan", income: 4000, expenses: 2400 },
  { name: "Feb", income: 3000, expenses: 1398 },
  { name: "Mar", income: 2000, expenses: 9800 },
  { name: "Apr", income: 2780, expenses: 3908 },
  { name: "May", income: 1890, expenses: 4800 },
  { name: "Jun", income: 2390, expenses: 3800 },
];

const spendingData = [
  { name: "Shopping", value: 1200, color: "#1E2F97" },
  { name: "Food", value: 900, color: "#4C63B6" },
  { name: "Transport", value: 500, color: "#7B8CDB" },
  { name: "Entertainment", value: 300, color: "#A8B4F0" },
  { name: "Bills", value: 1500, color: "#D4DBF5" },
];

const savingsGoals = [
  { name: "Emergency Fund", target: 10000, current: 7500 },
  { name: "Vacation", target: 5000, current: 2000 },
  { name: "New Car", target: 20000, current: 5000 },
];

const Analytics = () => {
  return (
    <Layout>
      <div className="grid gap-6 p-6">
        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card className="p-4">
            <h4 className="text-sm text-gray-500">Total Income</h4>
            <p className="text-lg font-bold text-green-600">
              ₹{(monthlyData.reduce((sum, d) => sum + d.income, 0)).toLocaleString("en-IN")}
            </p>
          </Card>
          <Card className="p-4">
            <h4 className="text-sm text-gray-500">Total Expenses</h4>
            <p className="text-lg font-bold text-red-600">
              ₹{(monthlyData.reduce((sum, d) => sum + d.expenses, 0)).toLocaleString("en-IN")}
            </p>
          </Card>
          <Card className="p-4">
            <h4 className="text-sm text-gray-500">Net Savings</h4>
            <p className="text-lg font-bold text-primary">
              ₹{(
                monthlyData.reduce((sum, d) => sum + d.income, 0) -
                monthlyData.reduce((sum, d) => sum + d.expenses, 0)
              ).toLocaleString("en-IN")}
            </p>
          </Card>
        </motion.div>

        {/* Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Income vs Expenses</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="income"
                    stroke="#1E2F97"
                    strokeWidth={2}
                    dot={{ fill: "#1E2F97" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="#EF4444"
                    strokeWidth={2}
                    dot={{ fill: "#EF4444" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Monthly Income (Bar Chart)</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="income" fill="#1E2F97" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Spending Categories</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={spendingData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {spendingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Savings Goals Progress</h3>
            <div className="space-y-4">
              {savingsGoals.map((goal) => (
                <div key={goal.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{goal.name}</span>
                    <span>
                      ${goal.current.toLocaleString()} / $
                      {goal.target.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <motion.div
                      className="h-2 bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(goal.current / goal.target) * 100}%` }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Financial Health Score</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded-full">
                  <motion.div
                    className="h-4 bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
              <span className="text-2xl font-bold text-primary">750</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Your financial health score is in the excellent range. Keep up the good work!
            </p>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Analytics;