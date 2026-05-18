import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white mt-10">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

          {/* Logo Section */}
          <div className="flex flex-col items-center ">

            <div className="flex items-center gap-3">

              <Image
                src="/Images/Logo.png"
                alt="Logo"
                width={55}
                height={55}
                className="rounded-full"
              />

              <h1 className="text-2xl font-bold text-blue-600 ">
                MediQueue
              </h1>

            </div>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Learn smarter with the best tutors and interactive sessions.
            </p>

          </div>

          {/*  Services */}
          <div className="flex flex-col items-center md:items-start">

            <h2 className="text-xl font-bold mb-4 text-blue-600">
              Tutor Services
            </h2>

            <ul className="space-y-2">

              <li>
                <Link href="/tutors" className="hover:text-cyan-500">
                  Find Tutors
                </Link>
              </li>

              <li>
                <Link href="/add-tutor" className="hover:text-cyan-500">
                  Add Tutor
                </Link>
              </li>

              <li>
                <Link href="/booked-sessions" className="hover:text-cyan-500">
                  Booked Sessions
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">

            <h2 className="text-xl font-bold mb-4 text-blue-600">
              Contact Info
            </h2>

            <div className="space-y-2 text-sm">
              <p>Email: mediqueue@gmail.com</p>
              <p>Phone: +880 1234-567890</p>
              <p>Location: Dhaka, Bangladesh</p>
            </div>

          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">

            <h2 className="text-xl font-bold mb-4 text-blue-600">
              Social Links
            </h2>

            <div className="flex items-center gap-5 text-2xl">

              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-blue-500 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="hover:text-gray-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-cyan-500 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* bottom */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-center text-sm">

        © 2026 MediQueue. All Rights Reserved.

      </div>
    </footer>
  );
};

export default Footer;