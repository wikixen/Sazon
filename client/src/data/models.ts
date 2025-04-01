export interface User {
  id: number;
  email: string;
  username: string;
  recipes?: Recipe[];
}

export interface Recipe {
  id: number;
  name: string;
  desc: string;
  ingredients: string[];
  createdAt: string;
}
