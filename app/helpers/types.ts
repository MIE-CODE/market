export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
};

export type FormData = {
  name: string;
  gmail: string;
  password: string;
};

export type User = {
  name?: string;
  email?: string;
  password?: string;
  deleted?: string;
};
