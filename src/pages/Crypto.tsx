
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const cryptoData = [
  { name: "Bitcoin", symbol: "BTC", price: "$43,250.00", change: "+2.5%" },
  { name: "Ethereum", symbol: "ETH", price: "$2,890.00", change: "+1.8%" },
  { name: "Binance Coin", symbol: "BNB", price: "$310.00", change: "-0.5%" },
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
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Portfolio Overview</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceHistory}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#0066FF"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Your Crypto Assets</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Symbol</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>24h Change</TableHead>
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
