import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa"; 
import { FaXTwitter } from "react-icons/fa6"; 

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          KeenKeeper
        </h2>

        <p className="text-gray-300 text-sm md:text-base max-w-2xl mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="mb-12">
          <h3 className="text-lg font-medium mb-4">Social Links</h3>
          <div className="flex gap-4 justify-center">
            <a className="bg-white p-2 rounded-full text-[#1B4332] hover:bg-gray-200 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a className="bg-white p-2 rounded-full text-[#1B4332] hover:bg-gray-200 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a className="bg-white p-2 rounded-full text-[#1B4332] hover:bg-gray-200 transition-colors">
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-emerald-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
