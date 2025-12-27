// pages/Members.jsx
import Sidebar from "../components/Sidebar";


export default function Members() {
return (
<div className="flex">
<Sidebar />
<main className="flex-1 p-8 bg-gray-100 min-h-screen">
<h2 className="text-2xl font-bold mb-6">Members</h2>
<table className="w-full bg-white rounded-xl shadow">
<thead className="bg-gray-200">
<tr>
<th className="p-3">Name</th>
<th>Phone</th>
<th>Plan</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr className="border-t">
<td className="p-3">Rahul Sharma</td>
<td>9876543210</td>
<td>Monthly</td>
<td className="text-green-600">Active</td>
</tr>
</tbody>
</table>
</main>
</div>
);
}