"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;


  return (
    <nav className="bg-white text-black dark:bg-gray-900 dark:text-white shadow-md">

      <div className="w-full px-8">

        <div className="flex items-center justify-between h-16">

          {/* logo */}
          <div className="flex items-center gap-3 w-220px">

            <Image
              src="/Images/Logo.png"
              alt="Logo"
              width={45}
              height={45}
              className="rounded-full"
            />

            <h1 className="text-2xl font-bold text-blue-600">
              MediQueue
            </h1>
          </div>

          {/* center part */}
          <div className="flex items-center gap-6 font-medium">

            <Link href="/" className="hover:text-cyan-600">
              Home
            </Link>

            <Link href="/tutors" className="hover:text-cyan-600">
              Tutors
            </Link>

            <Link href="/add-tutor" className="hover:text-cyan-600">
              Add Tutor
            </Link>

            <Link href="/my-tutors" className="hover:text-cyan-600">
              My Tutors
            </Link>

            <Link href="/booked-sessions" className="hover:text-cyan-600">
              My Booked Sessions
            </Link>
            
          </div>

          {/* right side */}
        <div className="w-220px flex items-center justify-end gap-4">

          <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
              >
                {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
                  </button>

          <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-cyan-700 transition">
            Login
              </button>
          
          <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-cyan-700 transition">
            Register
              </button>

        <FaUserCircle className="text-4xl text-gray-600 cursor-pointer hover:text-blue-600" />
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;