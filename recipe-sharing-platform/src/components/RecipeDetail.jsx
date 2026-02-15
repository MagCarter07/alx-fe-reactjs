import { useParams } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();

  const recipe = recipesData.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div className="p-6">Recipe not found.</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      <p className="text-gray-700">{recipe.summary}</p>
    </div>
  );
}

export default RecipeDetail;
