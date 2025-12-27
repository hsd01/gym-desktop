// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";


export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/login" element={<Login />} />
<Route path="/" element={<Dashboard />} />
<Route path="/members" element={<Members />} />
</Routes>
</BrowserRouter>
);
}