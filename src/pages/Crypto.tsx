
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const cryptoData = [
  { name: "Bitcoin", symbol: "BTC", price: "$43,250.00", change: "+2.5%", holdings: 0.5, value: "$21,625.00" },
  { name: "Ethereum", symbol: "ETH", price: "$2,890.00", change: "+1.8%", holdings: 3.2, value: "$9,248.00" },
  { name: "Binance Coin", symbol: "BNB", price: "$310.00", change: "-0.5%", holdings: 10, value: "$3,100.00" },
  { name: "Cardano", symbol: "ADA", price: "$1.20", change: "+4.2%", holdings: 1000, value: "$1,200.00" },
  { name: "Solana", symbol: "SOL", price: "$98.50", change: "+5.7%", holdings: 15, value: "$1,477.50" },
];

const priceHistory = [
  { time: "1d", price: 43250 },
  { time: "2d", price: 42800 },
  { time: "3d", price: 43100 },
  { time: "4d", price: 43500 },
  { time: "5d", price: 43200 },
  { time: "6d", price: 43800 },
  { time: "7d", price: 43250 },
];

const Crypto = () => {
  return (
    <Layout>
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 col-span-2">
            <h3 className="text-lg font-semibold mb-4">Portfolio Value</h3>
            <div className="text-3xl font-bold text-primary mb-6">$36,650.50</div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceHistory}>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#1E2F97"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-4">
              <Button className="w-full bg-primary">Buy Crypto</Button>
              <Button className="w-full" variant="outline">
                Sell Crypto
              </Button>
              <Button className="w-full" variant="outline">
                Send/Receive
              </Button>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Your Wallet</h4>
              <div className="p-4 bg-secondary rounded-lg">
                <p className="text-sm font-mono break-all">
                  0x7a23...45c9
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Click to copy address
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Your Crypto Assets</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Symbol</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>24h Change</TableHead>
                <TableHead>Holdings</TableHead>
                <TableHead className="text-right">Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cryptoData.map((crypto) => (
                <TableRow key={crypto.symbol}>
                  <TableCell className="font-medium">{crypto.name}</TableCell>
                  <TableCell>{crypto.symbol}</TableCell>
                  <TableCell>{crypto.price}</TableCell>
                  <TableCell
                    className={crypto.change.startsWith("+") ? "text-green-600" : "text-red-600"}
                  >
                    {crypto.change}
                  </TableCell>
                  <TableCell>{crypto.holdings}</TableCell>
                  <TableCell className="text-right">{crypto.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </Layout>
  );
};

export default Crypto;
