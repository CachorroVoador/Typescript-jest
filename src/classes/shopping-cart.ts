import { Discount, NoDiscount } from "./discount";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { Product } from "./product";

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: Product[] = [];

  constructor(private readonly discount: Discount = new NoDiscount){}

  addItem(product: Product): void {
    this._items.push(product);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<Product[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  IsEmpty(): boolean {
    return this._items.length === 0;
  }

  totalWithDiscount(): number {
    return +this.discount.calculate(this.total()).toFixed(2);
  }

  clear(): void {
    this._items.length = 0;
  }
}
