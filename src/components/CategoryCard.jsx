export default function CategoryCard({ image, heading, categories, bgColor }) {
  return (
    <div className={`p-6 rounded-lg ${bgColor} border`}>
      <div className="flex flex-col space-x-4 mb-4">
        <img src={image} alt={heading} className="w-12 h-12" />
        <h2 className="text-xl font-semibold text-gray-800">{heading}</h2>
      </div>
      <div className="flex flex-wrap gap-3 text-sm text-gray-700 font-medium">
        {categories.map((tech, index) => (
          <span key={index} className="border-r pr-3 last:border-none">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
