import { PlayCircle, Star } from "lucide-react";
import Vector1 from "../assets/images/Vector 1.png";
import Vector2 from "../assets/images/Vector 2.png";
import Vector3 from "../assets/images/Vector 3.png";
import Vector4 from "../assets/images/Vector 4.png";

const testimonials = [
  {
    name: "Krish Bruynson",
    role: "Director, Storloft",
    image: Vector1,
  },
  {
    name: "Krish Bruynson",
    role: "Director, Storloft",
    image: Vector2,
  },
  {
    name: "Krish Bruynson",
    role: "Director, Storloft",
    image: Vector3,
  },
  {
    name: "Krish Bruynson",
    role: "Director, Storloft",
    image: Vector4,
  },
];

export default function OurClients() {
  return (
    <section className="bg-gradient-to-r from-rose-50 to-green-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          What Our Clients Have To Say About Us
        </h2>
        <p className="text-gray-600 text-sm mb-10 max-w-xl mx-auto">
          Take A Look At Our Simple And Straightforward Process To Hire Software
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
          {testimonials.map((client, index) => (
            <div key={index} className="text-left">
              <div className="relative group">
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-64 object-cover"
                />
                <button className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 bg-green-500 p-3 rounded-full text-white hover:scale-110 transition-all shadow-lg">
                  <PlayCircle className="w-6 h-6" />
                </button>
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mt-3">{client.name}</h4>
              <p className="text-sm text-gray-600">{client.role}</p>
              <div className="flex space-x-1 mt-1 text-green-500">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
