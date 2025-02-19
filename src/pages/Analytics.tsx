
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
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
} from "recharts";

const monthlyData = [
  { name: "Jan", income: 4000, expenses: 2400 },
  { name: "Feb", income: 3000, expenses: 1398 },
  { name: "Mar", income: 2000, expenses: 9800 },
  { name: "Apr", income: 2780, expenses: 3908 },
  { name: "May", income: 1890, expenses: 4800 },
  { name: "Jun", income: 2390, expenses: 3800 },
];

const categoryData = [
  { name: "Shopping", amount: 1200 },
  { name: "Food", amount: 900 },
  { name: "Transport", amount: 500 },
  { name: "Entertainment", amount: 300 },
  { name: "Bills", amount: 1500 },
];

const Analytics = () => {
  return (
    <Layout>
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    stroke="#0066FF"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="#FF4444"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Spending by Category</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#0066FF" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Financial Health Score</h3>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded-full">
                <div
                  className="h-4 bg-green-500 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <span className="text-2xl font-bold text-green-500">750</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Your financial health score is in the excellent range. Keep up the good work!
          </p>
        </Card>
      </div>
    </Layout>
  );
};

export default Analytics;
