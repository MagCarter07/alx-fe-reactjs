import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Responsive Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover"
            />

            {/* Card Content */}
            <div className="p-4 sm:p-5">
              <h2 className="text-lg sm:text-xl font-semibold mb-2">
                {recipe.title}
              </h2>

              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {recipe.summary}
              </p>

              <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-600 hover:underline font-medium"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
