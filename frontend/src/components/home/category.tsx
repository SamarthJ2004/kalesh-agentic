import React from "react";
import { Volleyball, Gamepad2, Landmark, Film, Coffee } from "lucide-react";

const Category = () => {
  const categories = [
    {
      name: "Gaming",
      icon: Gamepad2,
      gradient: "from-violet-500 to-purple-600",
      hoverEffect: "hover:from-violet-600 hover:to-purple-700",
    },
    {
      name: "Sports",
      icon: Volleyball,
      gradient: "from-blue-500 to-cyan-600",
      hoverEffect: "hover:from-blue-600 hover:to-cyan-700",
    },
    {
      name: "Politics",
      icon: Landmark,
      gradient: "from-red-500 to-orange-600",
      hoverEffect: "hover:from-red-600 hover:to-orange-700",
    },
    {
      name: "Movies",
      icon: Film,
      gradient: "from-pink-500 to-rose-600",
      hoverEffect: "hover:from-pink-600 hover:to-rose-700",
    },
    {
      name: "Casual",
      icon: Coffee,
      gradient: "from-emerald-500 to-teal-600",
      hoverEffect: "hover:from-emerald-600 hover:to-teal-700",
    },
  ];

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Browse Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`
              relative group overflow-hidden rounded-xl
              bg-gradient-to-br ${category.gradient}
              hover:shadow-lg transform hover:-translate-y-1
              transition-all duration-300
            `}
          >
            <div className="relative z-10 p-6 flex flex-col items-center">
              <category.icon className="w-10 h-10 text-white mb-3" />
              <span className="text-white font-medium">{category.name}</span>
            </div>
            <div
              className={`
              absolute inset-0 bg-gradient-to-br ${category.gradient} ${category.hoverEffect}
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            `}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
