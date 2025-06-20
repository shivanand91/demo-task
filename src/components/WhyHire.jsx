import { CheckCircle, XCircle } from "lucide-react";
import Hire from "../assets/images/Hire.png";
import image6 from "../assets/images/image 6.png";
import image7 from "../assets/images/image 7.png";
import image9 from "../assets/images/image 9.png";
import Rigorous from "../assets/images/Rigorous.png";

export default function WhyHire() {
  return (
    <section className="relative bg-gradient-to-r from-white to-green-50 py-12 px-4 md:px-10">
      {/* Background Images */}
      <div className="absolute flex justify-between top-0 left-0 w-full h-full z-0 pointer-events-none">
        <img src={image6} alt="" className="w-32 h-32 md:w-120 md:h-150" />
        <img src={image7} alt="" className="w-32 h-32 md:w-120 md:h-120" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10 flex flex-col gap-10 items-center">
        {/* Top Section */}
        <div>
          <h2 className="text-2xl md:text-4xl text-center font-bold text-gray-800 mb-4">
            Why Hire Developers From Our Name
          </h2>
          <p className="text-gray-500 text-sm text-center leading-relaxed mb-2">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been
          </p>
          <p className="text-gray-500 text-sm text-center leading-relaxed mb-6">
            The Industry’s Standard Dummy Text Ever Since
          </p>
        </div>

        {/* First Row */}
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full gap-8">
          {/* Left Image Section */}
          <div className="flex justify-center w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={Hire}
              alt="Developer illustration"
              className="w-40 md:w-72"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">High Quality/Cost Ratio</h3>
            {/* Bullet Point 1 */}
            <div className="flex items-start mb-4">
              <CheckCircle className="text-green-500 mt-1 mr-2" size={20} />
              <div>
                <p className="font-semibold text-gray-800">
                  Hire Silicon Valley Caliber At Half The Cost
                </p>
                <p className="text-gray-500 text-sm">
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
                </p>
              </div>
            </div>
            {/* Bullet Point 2 */}
            <div className="flex items-start">
              <XCircle className="text-red-400 mt-1 mr-2" size={20} />
              <div>
                <p className="font-semibold text-gray-800">100+ Skills Available</p>
                <p className="text-gray-500 text-sm">
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Image */}
        <div className="absolute right-0 top-120">
          <img src={image9} alt="" className="w-14" />
        </div>

        {/* Second Row */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full gap-8">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Rigorous Vetting</h3>
            {/* Bullet Point 1 */}
            <div className="flex items-start mb-4 mt-4">
              <CheckCircle className="text-green-500 mt-1 mr-2" size={20} />
              <div>
                <p className="font-semibold text-gray-800">
                  5+ hours of tests and interviews
                </p>
                <p className="text-gray-500 text-sm">
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
                </p>
              </div>
            </div>
            {/* Bullet Point 2 */}
            <div className="flex items-start">
              <XCircle className="text-red-400 mt-1 mr-2" size={20} />
              <div>
                <p className="font-semibold text-gray-800">Seniority tests</p>
                <p className="text-gray-500 text-sm">
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
                </p>
              </div>
            </div>
          </div>
          {/* Right Image Section */}
          <div className="flex justify-center w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={Rigorous}
              alt="Developer illustration"
              className="w-40 md:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
