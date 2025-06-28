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
  orderQuantity: number;
  category: string;
  size: string;
  color: Color;
}
