"use client";

import Link from "next/link";
import React, { useState } from "react";
// import dotenv from 'dotenv'
// dotenv.config()

const SigninPage = () => {
  const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    "http://localhost:3001";

  console.log("url:", BACKEND_URL);

  const [error, setError] = useState([]);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    dept: "",
    college: "",
  });
  // console.log("Form Data:",formData)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log("Form Data:",formData)
    const res = await fetch(BACKEND_URL + "/api/auth/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    console.log("Form Data:", data);

    if (res.ok) {
      // alert("Registration successful ✅");
      window.location.href = "/login";
    } else {
      setError(data.errors)
      console.log(error)
      // alert(data.errors[0] || "Registration failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] bg-[radial-gradient(circle_at_top_right,_#0a192f,_#020617)] flex items-center justify-center p-4 sm:p-6 font-sans">
      {/* Background Decorative Element - subtle glow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Join the <span className="text-sky-400">Society</span>
          </h1>
          <p className="text-slate-400 mt-2 text-xs sm:text-sm uppercase tracking-widest">
            Building the future, one robot at a time
          </p>
        </div>

        {/* Error Message Div */}
        {error &&
          error.map((err,i) => (
            <div key={i} className="mb-6 flex items-center gap-3 bg-red-500/10 border border-red-500/50 p-4 rounded-xl animate-pulse">
              <svg
                className="w-5 h-5 text-red-500 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-red-200 text-sm font-medium">{err}</p>
              <button
                onClick={() => setError([])}
                className="ml-auto text-red-400 hover:text-red-200 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
          ))}

        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          {/* Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1.5 ml-1">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                onChange={handleChange}
                placeholder="Nikola"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-600 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1.5 ml-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                onChange={handleChange}
                placeholder="Tesla"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-600 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1.5 ml-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="nikola.tesla@kgec.edu"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-600 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1.5 ml-1">
              Department
            </label>
            <div className="relative">
              <select
                name="dept"
                onChange={handleChange}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-300 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all appearance-none cursor-pointer"
              >
                <option>Select Department</option>
                <option value="ME">Mechanical Engineering</option>
                <option value="CSE">Computer Science & Engineering</option>
                <option value="ECE">Electronics & Communication</option>
                <option value="EE">Electrical Engineering</option>
                <option value="IT">Information Technology</option>
              </select>
              {/* Custom Arrow */}
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* College */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1.5 ml-1">
              College
            </label>
            <input
              type="text"
              name="college"
              onChange={handleChange}
              placeholder="Kalyani Government Engineering College"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-600 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-400 text-[#020617] font-bold py-3.5 rounded-lg mt-6 shadow-lg shadow-sky-500/20 transform transition active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm">
            Already a member?{" "}
            <Link href="/login" className="text-sky-400 hover:underline">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
