
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CreditCard,
  Home,
  LineChart,
  LogOut,
  MessageSquare,
  Settings,
  Wallet,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "./ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName] = useState("Amit Kumar");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: CreditCard, label: "My Banks", path: "/banks" },
    { icon: LineChart, label: "Analytics", path: "/analytics" },
    { icon: Wallet, label: "Crypto", path: "/crypto" },
    { icon: MessageSquare, label: "Chat", path: "/chat" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-dark transition-colors duration-300">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-dark-card border-r border-gray-200 dark:border-dark-border p-4">
        <div className="flex items-center justify-center mb-8">
          <img src="/lovable-uploads/dhasetu-logo.png" alt="Dhasetu" className="h-12" />
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex items-center w-full px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-secondary dark:bg-dark-border text-primary"
                  : "text-gray-700 dark:text-gray-300 hover:bg-secondary dark:hover:bg-dark-border hover:text-primary"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-4 w-56 space-y-2">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? (
              <Sun className="w-4 h-4 mr-2" />
            ) : (
              <Moon className="w-4 h-4 mr-2" />
            )}
            {isDark ? "Light Mode" : "Dark Mode"}
          </Button>
          <Button
            variant="ghost"
            className="w-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600"
            onClick={() => navigate("/auth/login")}
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {sidebarItems.find((item) => item.path === location.pathname)?.label}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600 dark:text-gray-400">Welcome back</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{userName}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="animate-fade-in">
            {children}
          </div>
        </main>

        <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border p-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 Dhasetu. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
