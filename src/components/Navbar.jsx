import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"} >
        <img src={logo} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="text-gray-700 font-medium">Software Team ^</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-48">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Team A</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Team B</a>
            </div>
          </div>
          <Link to={"/services"} className="text-gray-700 font-medium">Services</Link>
          <Link to={"/technologies"} className="text-gray-700 font-medium">Technologies</Link>
          <Link to={"/resources"} className="text-gray-700 font-medium">Resources</Link>
          <Link to={"/company"} className="text-gray-700 font-medium">Company</Link>
          <Link to={"/get-in-touch"} className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-100 transition">
            Get In Touch ↗
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <div className="relative">
            <details className="w-full">
              <summary className="cursor-pointer text-gray-700 font-medium">Software Team</summary>
              <ul className="pl-4 mt-2 space-y-1">
                <li><a href="#" className="block hover:underline">Team A</a></li>
                <li><a href="#" className="block hover:underline">Team B</a></li>
              </ul>
            </details>
          </div>
          <a href="#" className="block text-gray-700">Services</a>
          <a href="#" className="block text-gray-700">Technologies</a>
          <a href="#" className="block text-gray-700">Resources</a>
          <a href="#" className="block text-gray-700">Company</a>
          <a href="#" className="block border border-green-500 text-green-500 px-4 py-2 rounded-md text-center mt-2">
            Get In Touch ↗
          </a>
        </div>
      )}
    </nav>
  );
}
