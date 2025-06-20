import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Reactangle from '../assets/images/Rectangle 107.png';

const topics = [
  "Benefits Of Hiring Developers",
  "Key Factors To Consider While Hiring",
  "Defining Your Project Requirements",
  "Choosing The Right Development Model",
  "Typical Challenges For Hiring Developers",
  "Hiring Freelancers Vs. Dedicated Developers",
  "Communication With Remote Developers",
];

const guideData = {
  "Benefits Of Hiring Developers": {
    description:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.",
    points: [
      "Client-Centric Approach",
      "Global Quality Standards",
      "Cutting-Edge Infrastructure",
      "Best-In-Class Project Management",
      "Time-Zone Compatibility",
      "Agile Adaptability",
    ],
    image:
      Reactangle,
  },
  "Key Factors To Consider While Hiring": {
    description:
      "Some key factors include clear communication, technical evaluation, cost-effectiveness, timezone compatibility, and cultural alignment.",
    points: [
      "Communication Skills",
      "Tech Stack Understanding",
      "Timezone Overlap",
      "Past Experience & Reviews",
    ],
    image:
      Reactangle,
  },
  // Add remaining topics similarly...
};

export default function UserGuide() {
  const [activeTab, setActiveTab] = useState(topics[0]);

  const current = guideData[activeTab];

  return (
    <section className="py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          User Guide To Hire Dedicated Software Developers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Side Tabs */}
          <div className="bg-white rounded-lg shadow p-4 col-span-1">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setActiveTab(topic)}
                className={`block w-full text-left px-4 py-2 my-1 rounded-md font-medium ${
                  activeTab === topic
                    ? "bg-green-500 text-white"
                    : "text-gray-700 hover:bg-green-100"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Right Side Content */}
          <div className="bg-white rounded-lg shadow p-6 col-span-1 md:col-span-3">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">{activeTab}</h3>
            <p className="text-sm text-gray-600 mb-6">{current?.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {current?.points?.map((point, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="text-green-500 mt-1" size={18} />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <img
              src={current?.image}
              alt={activeTab}
              className="w-full h-64 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
