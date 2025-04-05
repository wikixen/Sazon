import { User } from "../data/models";

interface Recipe {
  id: number;
  user: User;
  imageUrl?: string;
  name: string;
  desc: string;
  ingredients: string[];
  createdAt: string;
}

export async function getRecipes(id: string): Promise<Recipe> {
  const response = await fetch(`API HERE ${id}`);
  return await response.json();
}
