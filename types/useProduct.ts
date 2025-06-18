interface Color {
  color: string;
  name: string;
}
export default interface Product {
  readonly id: number;
  title: string;
  description: string;
  type: string;
  thumbnail: string;
  price: number;
  available: boolean;
  rate: number;
  category: string;
  sizes: string[];
  colors: Color[];
  images?: string[];
}