import { ArrowRight } from "lucide-react";
import herobg from "../assets/images/herobg.png";

export default function HiringProcess() {

  const steps = [
    {
      number: 1,
      title: "Inquiry",
      icon: "❓",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
    {
      number: 2,
      title: "Select Developers",
      icon: "💻",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
    {
      number: 3,
      title: "Team Integration",
      icon: "👥",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
    {
      number: 4,
      title: "Team Scaling",
      icon: "📈",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-green-50 to-pink-50 py-16 px-4 md:px-10">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <img src={herobg} alt="Hero Background" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl z-10 relative mx-auto flex flex-col md:flex-row items-center justify-evenly gap-20">

        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Hiring Process</h2>
          <p className="text-gray-600 text-sm mb-12 max-w-2xl mx-auto">
            Take A Look At Our Simple And Straightforward Process To Hire Software Developers From ValueCoders.
          </p>

          {/* Process Steps */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center w-full md:w-1/4">
                <div className="relative flex items-center justify-center w-28 h-28 rounded-full border-4 border-green-500 text-4xl bg-white">
                  <span>{step.icon}</span>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-rose-400 text-white text-sm font-bold flex items-center justify-center rounded-full border-2 border-white shadow">
                    {step.number}
                  </div>
                </div>
                <h4 className="mt-4 text-base font-semibold text-gray-800 uppercase">{step.title}</h4>
                <p className="text-gray-600 text-sm mt-2 text-center">{step.description}</p>

                {/* Arrow */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-[-24px]">
                    <ArrowRight className="text-gray-400" size={28} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
