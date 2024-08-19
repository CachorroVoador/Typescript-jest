import { Discount, NoDiscount } from "../discount";
import { Product } from "../product";

export interface ShoppingCartProtocol {
  items : Readonly<Product[]>

  addItem(product: Product): void

  removeItem(index: number): void


  total(): number
  IsEmpty(): boolean

  totalWithDiscount(): number

  clear(): void
}
