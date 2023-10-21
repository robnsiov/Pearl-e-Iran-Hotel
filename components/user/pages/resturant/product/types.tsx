export default interface ProductImpl extends UseProductImpl {
  title: string;
  price: string;
  src: string;
}

export interface UseProductImpl {
  id: number;
  onIncrease(id: number, count: number): void;
  onDecrease(id: number, count: number): void;
  onRemove(id: number): void;
}
