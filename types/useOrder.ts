interface Color {
  color: string;
  name: string;
}
export default interface Order {
  readonly id: number;
  title: string;
  type: string;
  thumbnail: string;
  price: number;
  quantity: number;
  category: string;
  size: string;
  color: Color;
}
