import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const creditCards = [
  {
    id: 1,
    bank: "HDFC Bank",
    number: "1234 5678 9012 3456",
    holder: "AMIT KUMAR",
    expiry: "12/25",
    type: "visa",
    color: "bg-gradient-to-r from-blue-600 to-blue-400",
  },
  {
    id: 2,
    bank: "ICICI Bank",
    number: "5678 9012 3456 7890",
    holder: "AMIT KUMAR",
    expiry: "06/24",
    type: "mastercard",
    color: "bg-gradient-to-r from-purple-600 to-purple-400",
  },
  {
    id: 3,
    bank: "SBI",
    number: "9012 3456 7890 1234",
    holder: "AMIT KUMAR",
    expiry: "03/26",
    type: "visa",
    color: "bg-gradient-to-r from-indigo-600 to-indigo-400",
  },
];

const bankAccounts = [
  {
    id: 1,
    bank: "HDFC Bank",
    accountType: "Savings",
    accountNumber: "****6789",
    balance: "₹12,450.00",
  },
  {
    id: 2,
    bank: "ICICI Bank",
    accountType: "Current",
    accountNumber: "****4321",
    balance: "₹8,275.00",
  },
  {
    id: 3,
    bank: "SBI",
    accountType: "Savings",
    accountNumber: "****9876",
    balance: "₹3,837.00",
  },
];

const categorySpending = [
  { category: "Food & Dining", amount: 850, color: "bg-blue-500" },
  { category: "Shopping", amount: 640, color: "bg-purple-500" },
  { category: "Transportation", amount: 420, color: "bg-green-500" },
  { category: "Entertainment", amount: 320, color: "bg-yellow-500" },
  { category: "Bills & Utilities", amount: 780, color: "bg-red-500" },
];

const securityAlerts = [
  {
    id: 1,
    type: "Suspicious Login",
    account: "HDFC Account",
    status: "Resolved",
    timestamp: "2 hours ago",
    details: "Login attempt from an unknown device at 10:00 AM.",
  },
  {
    id: 2,
    type: "Large Transaction",
    account: "ICICI Account",
    status: "Pending",
    timestamp: "1 day ago",
    details: "A transaction of ₹50,000 was attempted from your account.",
  },
];

const Banks = () => {
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [currentAlert, setCurrentAlert] = useState(null);
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);

  return (
    <Layout>
      <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
        {/* Credit Cards Section */}
        <div className="mb-6 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">
            Your Credit Cards
          </h3>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add New Card
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {creditCards.map((card) => (
            <div
              key={card.id}
              className={`${card.color} p-6 rounded-xl text-white shadow-lg transform transition-transform hover:scale-105`}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-sm opacity-80">{card.bank}</p>
                  <p className="font-mono text-lg mt-1">
                    {card.number.replace(/(\d{4})/g, "$1 ")}
                  </p>
                </div>
                <div className="text-right">
                  <img
                    src={
                      card.type === "visa"
                        ? "https://banner2.cleanpng.com/20180706/ayk/aaxyeypxd.webp"
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1158px-Mastercard-logo.svg.png"
                    }
                    alt={card.type}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs opacity-80">Card Holder</p>
                  <p className="font-mono">{card.holder}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs opacity-80">Expires</p>
                  <p className="font-mono">{card.expiry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Analysis Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Category Spending */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Category Spending</h3>
            <div className="space-y-4">
              {categorySpending.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{item.category}</span>
                    <span className="font-medium">${item.amount}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className={`h-2 ${item.color} rounded-full transition-all duration-500`}
                      style={{
                        width: `${(item.amount / 1000) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Security & Fraud Detection */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              Security & Fraud Detection
            </h3>
            <div className="space-y-4">
              {securityAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex flex-col gap-2 p-3 bg-gray-100 rounded-lg"
                >
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium text-gray-800">{alert.type}</p>
                      <p className="text-sm text-gray-600">
                        {alert.account} • {alert.timestamp}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        alert.status === "Resolved"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {alert.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{alert.details}</p>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      className="text-primary text-xs"
                      onClick={() => {
                        setCurrentAlert(alert);
                        setShowAnalysisModal(true);
                      }}
                    >
                      View Analysis
                    </Button>
                    <Button
                      variant="outline"
                      className="text-primary text-xs"
                      onClick={() => setShowNotificationModal(true)}
                    >
                      Send Notification
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Connected Bank Accounts */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">
            Connected Bank Accounts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bankAccounts.map((account) => (
              <div
                key={account.id}
                className="p-4 bg-white border rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-3">
                  {/* Display bank initials as an icon */}
                  <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full font-bold mr-3">
                    {account.bank
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold">{account.bank}</p>
                    <p className="text-xs text-gray-500">
                      {account.accountType}
                    </p>
                  </div>
                </div>
                <p className="text-sm">
                  Account:{" "}
                  <span className="font-mono">{account.accountNumber}</span>
                </p>
                <p className="mt-2 text-lg font-bold text-gray-800">
                  {account.balance}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* New Feature: Budget Suggestions */}
        <Card className="p-6 bg-white shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Budget Suggestions</h3>
          <p className="text-sm text-gray-700">
            Based on your spending patterns, consider reducing your dining
            expenses by 10% to save more. You might also explore subscription
            cancellation for unused services.
          </p>
          <Button variant="outline" className="mt-4">
            View Detailed Tips
          </Button>
        </Card>

        {/* Notification Modal */}
        {showNotificationModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-96">
              <h3 className="text-xl font-semibold mb-4">
                Send Notification
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Compose a message to notify the user regarding the security alert.
              </p>
              <textarea
                rows="4"
                className="w-full p-2 border rounded mb-4"
                placeholder="Type your notification message..."
                value={notificationMessage}
                onChange={(e) => setNotificationMessage(e.target.value)}
              ></textarea>
              <Button
                className="w-full"
                onClick={() => {
                  // Here you would call your notification API
                  alert(`Notification sent: ${notificationMessage}`);
                  setNotificationMessage("");
                  setShowNotificationModal(false);
                }}
              >
                Send
              </Button>
              <Button
                variant="ghost"
                className="w-full mt-2"
                onClick={() => setShowNotificationModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Analysis Modal for Security Alerts */}
        {showAnalysisModal && currentAlert && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-96 overflow-y-auto max-h-full">
              <h3 className="text-xl font-semibold mb-4">
                Analysis: {currentAlert.type}
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Detailed analysis for the alert on {currentAlert.account}:{" "}
                {currentAlert.details}
              </p>
              <p className="text-sm text-gray-700">
                Our system has detected unusual activity and recommends verifying
                the login details. Please review your account activity.
              </p>
              <Button
                className="w-full mt-4"
                onClick={() => {
                  setCurrentAlert(null);
                  setShowAnalysisModal(false);
                }}
              >
                Close Analysis
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Banks;