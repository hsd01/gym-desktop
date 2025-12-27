// components/StatCard.jsx
export default function StatCard({ title, value }) {
return (
<div className="bg-white rounded-xl p-6 shadow">
<h4 className="text-gray-500">{title}</h4>
<p className="text-3xl font-bold">{value}</p>
</div>
);
}