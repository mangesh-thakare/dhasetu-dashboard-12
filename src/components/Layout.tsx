
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CreditCard,
  Home,
  LineChart,
  LogOut,
  MessageSquare,
  Settings,
  Wallet,
} from "lucide-react";
import { Button } from "./ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName] = useState("Amit Kumar");

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
              className={`flex items-center w-full px-4 py-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? "bg-secondary text-primary"
                  : "text-gray-700 hover:bg-secondary hover:text-primary"
              }`}
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
                {sidebarItems.find((item) => item.path === location.pathname)?.label}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Welcome back</p>
                <p className="text-sm font-medium text-gray-900">{userName}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
