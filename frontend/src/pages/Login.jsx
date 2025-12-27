// pages/Login.jsx
import { useState } from "react";


export default function Login() {
return (
<div className="min-h-screen bg-gym bg-cover flex items-center justify-center">
<div className="bg-black/60 backdrop-blur-md p-8 rounded-xl w-96 shadow-2xl text-white">
<h2 className="text-2xl font-bold text-center">Gym Admin Login</h2>
<input className="input text-black" placeholder="Email" />
<input className="input text-black" type="password" placeholder="Password" />
<button className="btn">Login</button>
</div>
</div>
);
}