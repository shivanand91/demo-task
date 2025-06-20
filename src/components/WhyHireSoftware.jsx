import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import BlurImg from "../assets/images/blurimg.png"

export default function WhyHireSoftware() {
  const reasons = [
    { text: "English Speaking Programmers", to: "/english-speaking" },
    { text: "Flexible Work Hours", to: "/flexible-hours" },
    { text: "Rapid Onboarding Process", to: "/rapid-onboarding" },
    { text: "Expertise In Top Technologies", to: "/expertise" },
    { text: "Reliable Partner Credentials", to: "/partner-credentials" },
  ];

  return (
    <section className="bg-[#06023C] text-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image Section */}
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-start gap-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Why Hire Software Developers <br />
            In India?
          </h2>
          <img
            src={BlurImg}
            alt="Team in office"
            className="w-100 rounded-md opacity-70"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 w-full">

          <ul className="space-y-6">
            {reasons.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-white/10 pb-2 hover:text-green-400 transition"
              >
                <Link to={item.to} className="flex justify-between items-center w-full">
                  <span className="text-base">{item.text}</span>
                  <ArrowUpRight size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
