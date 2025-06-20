import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
        {/* Logo and About */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-[#2FC980] p-2 rounded-full">
              <span className="text-white font-bold text-xl">⚡</span>
            </div>
            <span className="font-bold text-xl">Logoipsum</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>
          <div className="flex space-x-3 mt-2">
            <Link to={"#"} className="bg-white text-black rounded-full p-2 hover:bg-[#2FC980] hover:text-white transition">
              <Facebook size={16} />
            </Link>
            <Link to={"#"} className="bg-white text-black rounded-full p-2 hover:bg-[#2FC980] hover:text-white transition">
              <Twitter size={16} />
            </Link>
            <Link to={"#"} className="bg-white text-black rounded-full p-2 hover:bg-[#2FC980] hover:text-white transition">
              <Linkedin size={16} />
            </Link>
            <Link to={"#"} className="bg-white text-black rounded-full p-2 hover:bg-[#2FC980] hover:text-white transition">
              <Youtube size={16} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/software-team" className="hover:text-[#2FC980]">Software Team</Link></li>
            <li><Link to="/technologies" className="hover:text-[#2FC980]">Technologies</Link></li>
            <li><Link to="/resources" className="hover:text-[#2FC980]">Resources</Link></li>
            <li><Link to="/company" className="hover:text-[#2FC980]">Company</Link></li>
            <li><Link to="/contact" className="hover:text-[#2FC980]">Contact us</Link></li>
            <li><Link to="/faq" className="hover:text-[#2FC980]">FAQ</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/services/dedicated-development" className="hover:text-green-400">Dedicated Development</Link></li>
            <li><Link to="/services/staff-augmentation" className="hover:text-green-400">Staff Augmentation Services</Link></li>
            <li><Link to="/services/software-development" className="hover:text-green-400">Software Development</Link></li>
            <li><Link to="/services/development-center" className="hover:text-green-400">Development Center</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start space-x-2">
              <MapPin size={16} />
              <span>Envato, Level 13, 2 Elizabeth<br />Victoria 3000 India</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} />
              <a href="tel:+918619441176" className="hover:text-green-400">+91 861 944 1176</a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} />
              <a href="mailto:ezyoga@gmail.com" className="hover:text-green-400">ezyoga@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#2FC980] text-center py-3 text-sm text-black">
        logoname. 2023. All rights reserved
      </div>
    </footer>
  );
}
