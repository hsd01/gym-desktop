// components/Sidebar.jsx
import { Dumbbell, Users, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";


export default function Sidebar() {
return (
<div className="w-64 min-h-screen bg-gray-900 text-white p-4">
<h1 className="text-2xl font-bold mb-8 flex items-center gap-2">
<Dumbbell /> Gym Admin
</h1>
<nav className="space-y-4">
<Link to="/" className="flex items-center gap-2 hover:text-red-400">
<LayoutDashboard /> Dashboard
</Link>
<Link to="/members" className="flex items-center gap-2 hover:text-red-400">
<Users /> Members
</Link>
</nav>
</div>
);
}