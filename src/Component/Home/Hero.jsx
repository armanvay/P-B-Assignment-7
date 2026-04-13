import React from 'react';
import {

  FaPlus,
} from "react-icons/fa";

const Hero = () => {
    return (
      <section className="max-w-6xl mx-auto px-4 py-10 mt-10">
        {/* Top Content */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            Friends to keep close in your life
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <button className="inline-flex items-center gap-2 bg-[#244D3F]  text-white px-5 py-2 rounded-lg hover:bg-emerald-900 transition">
            <FaPlus /> Add a Friend
          </button>
        </div>
      </section>
    );
};

export default Hero;