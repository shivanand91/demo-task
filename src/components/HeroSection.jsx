import { ArrowUpRight } from "lucide-react";
import herobg from "../assets/images/herobg.png";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-pink-50 py-16 px-4 md:px-10">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <img src={herobg} alt="Hero Background" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl z-10 relative mx-auto flex flex-col md:flex-row items-center justify-evenly gap-20">
        {/* Left Content */}
        <div className="md:w-1/3 text-center md:text-left">
          <h1 className="text-2xl flex items-center md:text-4xl font-semibold text-green-600">
            HIRE DEDICATED<span className="border-t-3 border-green-500 ml-2 block w-28 mt-1"></span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mt-2">DEVELOPERS</h2>
          <p className="text-gray-600 text-sm md:text-base mt-4 font-medium">
            Top 1% Pre-Vetted, In-House & Dedicated Software Programmers
          </p>
          <p className="text-gray-500 text-sm mt-4 leading-relaxed">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
            Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And
            Scrambled
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-red-400 hover:bg-red-500 text-white w-full justify-center px-6 py-3 rounded-md flex items-center font-medium">
              View More <ArrowUpRight className="ml-2" size={16} />
            </button>
            <button className="border border-green-500 text-green-600 w-full justify-center px-6 py-3 rounded-md flex items-center font-medium hover:bg-green-100">
              Get In Touch <ArrowUpRight className="ml-2" size={16} />
            </button>
          </div>
        </div>

        {/* Right Form */}
        <div className="md:w-1/3 bg-white shadow-lg rounded-xl">
          <div className="bg-green-100 rounded-t-xl p-6">
            <h3 className="text-center text-lg font-bold text-gray-800">Create Your Team</h3>
            <p className="text-center text-sm text-gray-500">Lorem Ipsum Is Simply Dummy Text Of The Printing</p>
          </div>
          <form className="m-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
              />
            </div>

            <div>
              <label>Number</label>
              <input
                type="text"
                placeholder="Enter Your Number"
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
              />
            </div>

            <div>
              <label>Country</label>
              <input
                type="text"
                placeholder="Enter Your Country"
                className="border border-gray-300 px-4 py-2 rounded-md w-full"
              />
            </div>


            <label>Project Brief</label>
            <textarea
              placeholder="Enter Your Project Brief"
              rows="4"
              className="md:col-span-2 border border-gray-300 px-4 py-2 rounded-md w-full"
            ></textarea>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-red-400 hover:bg-red-500 text-white font-medium px-6 py-3 rounded-md flex justify-center items-center"
              >
                Hire Software Developer <ArrowUpRight className="ml-2" size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
