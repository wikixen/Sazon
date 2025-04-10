export interface User {
  id: number;
  email: string;
  recipes?: Recipe[];
  pantry?: string[];
}

export interface Recipe {
  id: number;
  user: User;
  imageUrl?: string;
  name: string;
  desc: string;
  ingredients: string[];
  createdAt: string;
}
