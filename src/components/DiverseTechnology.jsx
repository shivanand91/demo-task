import CategoryCard from './CategoryCard'
import WebSetting1 from '../assets/images/web-settings 1.png'
import WebSetting2 from '../assets/images/web-settings 2.png'
import WebSetting3 from '../assets/images/web-settings 3.png'
import WebSetting4 from '../assets/images/web-settings 4.png'
import WebSetting5 from '../assets/images/web-settings 5.png'
import WebSetting6 from '../assets/images/web-settings 6.png'

const DiverseTechnology = () => {
  return (
    <div className='relative bg-gradient-to-r from-white to-green-50 py-6 px-2 sm:px-4'>
      {/* Top Section  */}
      <div className='z-10'>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-gray-800 mb-4">
          Our Diverse Technology Competency
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm text-center leading-relaxed mb-2">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been
        </p>
        <p className="text-gray-500 text-xs sm:text-sm text-center leading-relaxed mb-6">
          The Industry’s Standard Dummy Text Ever Since
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 pb-10 px-0 sm:px-4 md:px-10'>
        <CategoryCard
          image={WebSetting1}
          heading="Backend Development"
          bgColor="bg-indigo-50"
          categories={[
            ".NET", "C/C++", "DJANGO", "Firebase", "GOLANG",
            "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON",
            "RUBY ON RAILS", "JAVA"
          ]}
        />
        <CategoryCard
          image={WebSetting2}
          heading="Backend Development"
          bgColor="bg-yellow-50"
          categories={[
            ".NET", "C/C++", "DJANGO", "Firebase", "GOLANG",
            "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON",
            "RUBY ON RAILS", "JAVA"
          ]}
        />
        <CategoryCard
          image={WebSetting3}
          heading="Backend Development"
          bgColor="bg-pink-50"
          categories={[
            ".NET", "C/C++", "DJANGO", "Firebase", "GOLANG",
            "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON",
            "RUBY ON RAILS", "JAVA"
          ]}
        />
        <CategoryCard
          image={WebSetting4}
          heading="Backend Development"
          bgColor="bg-violet-50"
          categories={[
            ".NET", "C/C++", "DJANGO", "Firebase", "GOLANG",
            "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON",
            "RUBY ON RAILS", "JAVA"
          ]}
        />
        <CategoryCard
          image={WebSetting5}
          heading="Backend Development"
          bgColor="bg-green-50"
          categories={[
            ".NET", "C/C++", "DJANGO", "Firebase", "GOLANG",
            "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON",
            "RUBY ON RAILS", "JAVA"
          ]}
        />
        <CategoryCard
          image={WebSetting6}
          heading="Backend Development"
          bgColor="bg-red-50"
          categories={[
            ".NET", "C/C++", "DJANGO", "Firebase", "GOLANG",
            "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON",
            "RUBY ON RAILS", "JAVA"
          ]}
        />
      </div>
    </div>
  )
}

export default DiverseTechnology
