export type RestaurantType = {
  name: string;
  time_of_delivery: number;
  stars: number;
  price: number;
  kitchen: string;
  image: string;
  products: string;
};

export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};
