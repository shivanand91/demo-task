import React from "react";
import { CheckCircle } from "lucide-react";
import Typing from "../assets/images/typing.png"

const features = [
  "Client-Centric Approach",
  "Global Quality Standards",
  "Cutting-Edge Infrastructure",
  "Best-In-Class Project Management",
  "Time-Zone Compatibility",
  "Agile Adaptability",
];

export default function TopCompanies() {
  return (
    <section className="bg-gradient-to-r from-white to-pink-50 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="flex-1">
          <img
            src={Typing}
            alt="Developer Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Top Companies Trust ValueCoders <br /> For Hiring Software Developers
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The
            1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To
            Make A Type Specimen Book.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-gray-800">
                <CheckCircle className="text-green-500 w-5 h-5" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
