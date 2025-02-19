import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowUpDown,
  PiggyBank,
  Wallet,
  TrendingUp,
  CalendarClock,
  AlertCircle,
  Percent,
  Coins,
  MessageCircle,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const primaryColor = "#3342A1";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const spendingData = [
  { name: "Food", value: 45, color: "#F87171" },
  { name: "Shopping", value: 30, color: "#60A5FA" },
  { name: "Bills", value: 15, color: "#34D399" },
  { name: "Travel", value: 10, color: "#FBBF24" },
];

const transactions = [
  {
    id: 1,
    name: "Amazon Purchase",
    amount: -149.99,
    date: "2024-03-15",
    category: "shopping",
  },
  {
    id: 2,
    name: "Salary Deposit",
    amount: 4500.0,
    date: "2024-03-01",
    category: "income",
  },
  {
    id: 3,
    name: "Electric Bill",
    amount: -120.0,
    date: "2024-03-05",
    category: "bills",
  },
];

const netWorthData = [
  { label: "Jan Start", amount: 5000 },
  { label: "Jan End", amount: 89000 },
  { label: "Feb Start", amount: 10000 },
  { label: "Feb End", amount: 100000 },
  { label: "Mar Start", amount: 20000 },
  { label: "Mar End", amount: 60000 },
  { label: "Apr Start", amount: 23000 },
  { label: "Apr End", amount: 24000 },
];

const upcomingBills = [
  { id: 1, name: "Rent", due: "2024-04-05", amount: 25000 },
  { id: 2, name: "Electricity Bill", due: "2024-04-10", amount: 1500 },
  { id: 3, name: "Internet Bill", due: "2024-04-15", amount: 800 },
];

const dailyTip = {
  title: "Tip of the Day",
  content:
    "Automate your savings! Set up recurring transfers to build wealth effortlessly.",
};

const Dashboard = () => {
  const [showAddMoney, setShowAddMoney] = useState(false);
  const [showTransferFunds, setShowTransferFunds] = useState(false);
  const [showSpendingDetails, setShowSpendingDetails] = useState(false);
  const [showTransactionsDetails, setShowTransactionsDetails] = useState(false);
  const [showAdvisor, setShowAdvisor] = useState(false);
  const [showUpcomingBills, setShowUpcomingBills] = useState(false);

  return (
    <Layout>
      <div className="space-y-8 p-6 bg-gray-50 min-h-screen relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, Amit!
            </h1>
            <p className="text-gray-600">Here's your financial overview</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-primary text-primary"
              onClick={() => setShowAddMoney(true)}
            >
              Add Money
            </Button>
            <Button
              className="bg-primary hover:bg-primary-dark"
              onClick={() => setShowTransferFunds(true)}
            >
              Transfer Funds
            </Button>
          </div>
        </motion.div>

        {/* Consolidated Financial Overview */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card className="p-6 bg-white shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-100">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Balance</p>
                <h2 className="text-2xl font-bold">₹2,45,562</h2>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-white shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-green-100">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Net Worth</p>
                <h2 className="text-2xl font-bold">₹18,72,450</h2>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-white shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-100">
                <Percent className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Financial Health Score</p>
                <h2 className="text-2xl font-bold">824/1000</h2>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Spending Overview */}
          <motion.div variants={cardVariants} className="h-full">
            <Card className="p-6 bg-white shadow-lg h-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Spending Breakdown</h3>
                <Button
                  variant="ghost"
                  className="text-primary"
                  onClick={() => setShowSpendingDetails(true)}
                >
                  View Details
                </Button>
              </div>
              <div className="flex gap-8 items-center">
                <div className="w-40 h-40">
                  <PieChart width={160} height={160}>
                    <Pie
                      data={spendingData}
                      cx={80}
                      cy={80}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {spendingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </div>
                <div className="space-y-4">
                  {spendingData.map((category) => (
                    <div
                      key={category.name}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-sm">{category.name}</span>
                      <span className="text-sm font-medium ml-auto">
                        {category.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Recent Transactions */}
          <motion.div variants={cardVariants}>
            <Card className="p-6 bg-white shadow-lg h-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Recent Transactions</h3>
                <Button
                  variant="ghost"
                  className="text-primary"
                  onClick={() => setShowTransactionsDetails(true)}
                >
                  See All
                </Button>
              </div>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div
                      className={`p-2 rounded-full ${
                        transaction.amount > 0
                          ? "bg-green-100"
                          : "bg-red-100"
                      }`}
                    >
                      {transaction.amount > 0 ? (
                        <ArrowUpDown className="w-5 h-5 text-green-600" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-medium">{transaction.name}</h4>
                      <p className="text-sm text-gray-500">
                        {transaction.date}
                      </p>
                    </div>
                    <span
                      className={`font-medium ${
                        transaction.amount > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      ₹{Math.abs(transaction.amount).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Daily Financial Tip */}
        <motion.div variants={cardVariants}>
          <Card className="p-6 bg-gradient-to-r from-indigo-100 to-indigo-200 shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                {dailyTip.title}
              </h3>
              <Button variant="ghost" className="text-primary text-xs">
                Learn More
              </Button>
            </div>
            <p className="text-gray-700 text-sm">
              {dailyTip.content}
            </p>
          </Card>
        </motion.div>

        {/* Financial Habits & Goals */}
        <motion.div variants={cardVariants}>
          <Card className="p-6 bg-white shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Your Financial Habits</h3>
              <Button variant="ghost" className="text-primary">
                Edit Goals
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Coins className="w-6 h-6 text-primary" />
                  <h4 className="font-medium">Monthly Savings Rate</h4>
                </div>
                <div className="text-3xl font-bold text-primary">28%</div>
                <p className="text-sm text-gray-600 mt-2">
                  ₹24,500 saved this month
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <CalendarClock className="w-6 h-6 text-green-600" />
                  <h4 className="font-medium">Bill Payments</h4>
                </div>
                <div className="text-3xl font-bold text-green-600">100%</div>
                <p className="text-sm text-gray-600 mt-2">
                  All bills paid on time
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <PiggyBank className="w-6 h-6 text-purple-600" />
                  <h4 className="font-medium">Savings Goal Progress</h4>
                </div>
                <div className="text-3xl font-bold text-purple-600">65%</div>
                <p className="text-sm text-gray-600 mt-2">
                  ₹32,500/₹50,000
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Net Worth Trend */}
        <motion.div variants={cardVariants}>
          <Card className="p-6 bg-white shadow-lg">
            <h3 className="text-lg font-semibold mb-6">Net Worth Trend</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={netWorthData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke={primaryColor}
                    strokeWidth={2}
                    dot={{ fill: primaryColor }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        {/* Additional Features Section (Upcoming Bills & AI Advisor) */}
        <motion.div variants={cardVariants}>
          <Card className="p-6 bg-white shadow-lg">
            <h3 className="text-lg font-semibold mb-6">Additional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Upcoming Bills */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-4 rounded-lg bg-gradient-to-r from-yellow-100 to-yellow-200 shadow-md">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-gray-800">
                      Upcoming Bills
                    </h4>
                    <Button
                      variant="ghost"
                      className="text-primary text-xs"
                      onClick={() => setShowUpcomingBills(true)}
                    >
                      View All
                    </Button>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {upcomingBills.map((bill) => (
                      <li key={bill.id}>
                        <strong>{bill.name}</strong> - Due: {bill.due}
                        <span className="ml-1">₹{bill.amount}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
              {/* AI Financial Advisor */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-4 rounded-lg bg-gradient-to-r from-green-100 to-green-200 shadow-md">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-gray-800">
                      AI Financial Advisor
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Get personalized financial advice instantly.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-2 text-primary"
                    onClick={() => setShowAdvisor(true)}
                  >
                    Chat Now <MessageCircle className="w-4 h-4 ml-1" />
                  </Button>
                </Card>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Expanded Detail Modals */}
        {showAddMoney && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-96">
              <h3 className="text-xl font-semibold mb-4">
                Add Money - Detailed View
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Choose your preferred payment method and enter the amount.
              </p>
              <div className="space-y-3">
                <Button className="w-full">Bank Transfer</Button>
                <Button className="w-full">Credit/Debit Card</Button>
                <Button className="w-full">UPI</Button>
              </div>
              <div className="mt-4">
                <input
                  type="number"
                  placeholder="Enter Amount"
                  className="w-full p-2 border rounded"
                />
              </div>
              <Button
                className="mt-4 w-full"
                onClick={() => setShowAddMoney(false)}
              >
                Close
              </Button>
            </div>
          </div>
        )}

        {showTransferFunds && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-96">
              <h3 className="text-xl font-semibold mb-4">
                Transfer Funds - Detailed View
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Select a method and fill in the transfer details.
              </p>
              <div className="space-y-3">
                <Button className="w-full">Inter-Bank Transfer</Button>
                <Button className="w-full">Intra-Bank Transfer</Button>
                <Button className="w-full">UPI Transfer</Button>
              </div>
              <div className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Sender Account"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Recipient Account"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="number"
                  placeholder="Amount"
                  className="w-full p-2 border rounded"
                />
              </div>
              <Button
                className="mt-4 w-full"
                onClick={() => setShowTransferFunds(false)}
              >
                Close
              </Button>
            </div>
          </div>
        )}

        {showSpendingDetails && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-96 overflow-y-auto max-h-full">
              <h3 className="text-xl font-semibold mb-4">
                Spending Details - Expanded View
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Detailed breakdown of your spending across categories.
              </p>
              <div className="mb-4">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={spendingData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      dataKey="value"
                    >
                      {spendingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                {spendingData.map((item) => (
                  <li key={item.name}>
                    <strong>{item.name}:</strong> {item.value}%
                  </li>
                ))}
              </ul>
              <Button
                className="mt-4 w-full"
                onClick={() => setShowSpendingDetails(false)}
              >
                Close
              </Button>
            </div>
          </div>
        )}

        {showTransactionsDetails && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-96 overflow-y-auto max-h-full">
              <h3 className="text-xl font-semibold mb-4">
                All Transactions - Expanded View
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Detailed list of your recent transactions.
              </p>
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2">Date</th>
                    <th className="p-2">Description</th>
                    <th className="p-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b">
                      <td className="p-2">{transaction.date}</td>
                      <td className="p-2">{transaction.name}</td>
                      <td className={`p-2 ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                        ₹{Math.abs(transaction.amount).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Button
                className="mt-4 w-full"
                onClick={() => setShowTransactionsDetails(false)}
              >
                Close
              </Button>
            </div>
          </div>
        )}

        {showAdvisor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-96">
              <h3 className="text-xl font-semibold mb-4">
                AI Financial Advisor
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Ask any financial questions and get personalized advice.
              </p>
              {/* A chat interface can be integrated here */}
              <div className="p-4 border rounded mb-4">
                <p className="text-sm text-gray-700">
                  [Chatbot conversation placeholder]
                </p>
              </div>
              <input
                type="text"
                placeholder="Type your question..."
                className="w-full p-2 border rounded mb-4"
              />
              <Button className="w-full" onClick={() => setShowAdvisor(false)}>
                Close
              </Button>
            </div>
          </div>
        )}

        {showUpcomingBills && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-96 overflow-y-auto max-h-full">
              <h3 className="text-xl font-semibold mb-4">Upcoming Bills</h3>
              <ul className="text-sm text-gray-700 space-y-3">
                {upcomingBills.map((bill) => (
                  <li key={bill.id} className="border-b pb-2">
                    <div className="flex justify-between">
                      <span>{bill.name}</span>
                      <span>₹{bill.amount}</span>
                    </div>
                    <p className="text-xs text-gray-500">Due: {bill.due}</p>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-4 w-full"
                onClick={() => setShowUpcomingBills(false)}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;