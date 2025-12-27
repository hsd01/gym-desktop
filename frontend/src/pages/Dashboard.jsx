// pages/Dashboard.jsx
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


const data = [
{ month: "Jan", revenue: 12000 },
{ month: "Feb", revenue: 18000 },
{ month: "Mar", revenue: 15000 },
];


export default function Dashboard() {
return (
<div className="flex">
<Sidebar />
<main className="flex-1 p-8 bg-gray-100 min-h-screen">
<h2 className="text-3xl font-bold mb-6">Dashboard</h2>


<div className="grid grid-cols-4 gap-6 mb-8">
<StatCard title="Total Members" value="120" />
<StatCard title="Active Plans" value="98" />
<StatCard title="Expired" value="22" />
<StatCard title="Monthly Revenue" value="₹45,000" />
</div>


<div className="bg-white p-6 rounded-xl shadow">
<h3 className="text-xl font-semibold mb-4">Revenue Trend</h3>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={data}>
<XAxis dataKey="month" />
<YAxis />
<Tooltip />
<Line type="monotone" dataKey="revenue" />
</LineChart>
</ResponsiveContainer>
</div>
</main>
</div>
);
}