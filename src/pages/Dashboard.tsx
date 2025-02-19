
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  DollarSign,
  Home,
  LineChart,
  LogOut,
  MessageSquare,
  Settings,
  Wallet,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName] = useState("Amit Kumar");
  const [totalBalance] = useState("$24,562.00");

  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: CreditCard, label: "My Banks", path: "/banks" },
    { icon: LineChart, label: "Analytics", path: "/analytics" },
    { icon: Wallet, label: "Crypto", path: "/crypto" },
    { icon: MessageSquare, label: "Chat", path: "/chat" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-2xl font-bold text-primary">Dhasetu</h1>
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="flex items-center w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-secondary hover:text-primary transition-colors"
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-4 w-56">
          <Button
            variant="ghost"
            className="w-full flex items-center justify-center text-gray-700 hover:bg-red-50 hover:text-red-600"
            onClick={() => navigate("/auth/login")}
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Welcome back, {userName}
              </h2>
              <p className="text-gray-600">Here's your financial overview</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Total Balance</p>
              <p className="text-2xl font-bold text-primary">{totalBalance}</p>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Stats */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-800">Monthly Spending</h3>
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-gray-900">$3,458.00</p>
              <p className="text-sm text-gray-600 mt-1">+2.5% from last month</p>
            </div>

            {/* More cards will be added in subsequent updates */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
