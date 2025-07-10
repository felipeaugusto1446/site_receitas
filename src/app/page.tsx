import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { recipes } from "@/lib/data";
import RecipeCard from "@/components/RecipeCard";

export default function Home() {
  const featureRecipes = recipes.slice(0, 3);

  return (
    <main className="flex-grow">
      <section className="bg-orange-50 py-12">
        <div className="flex flex-col gap-6 items-center px-4 sm:px-6 lg:px-8 container mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold">Receitas Deliciosas</h1>
          <p className="text-base sm:text-xl text-center">
            Descubra receitas simples e saborosas para todas as ocasiões
          </p>
          <Link
            className="bg-amber-500 hover:bg-amber-700 transition-colors text-white font-bold rounded-lg px-4 py-2"
            href="/receitas"
          >
            Ver todas as receitas
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8 container mx-auto">
          <h2 className="text-lg font-bold">Receitas em destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {featureRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          <Link
            className="flex items-center text-orange-400 hover:text-orange-800 transition-colors"
            href="/receitas"
          >
            Ver todas as receitas <ChevronRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
