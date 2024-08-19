import { OrderStatus } from "./interfaces/order-status";
import { CustomerOrder } from "./interfaces/customer-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { IMessaging } from "./interfaces/messaging-protocol";
import { IPersistency } from "./interfaces/persistency-protocol";

export class Order {
  private _orderStatus: OrderStatus = 'open'; //

  constructor(private readonly cart: ShoppingCartProtocol,
    private readonly persistency: IPersistency, private readonly messaging: IMessaging, private readonly customer: CustomerOrder) {}
  get orderStatus(): OrderStatus { //
    return this._orderStatus;
  }

  checkout(): void { //
    if(this.cart.IsEmpty()){
      console.log('Seu carrinho está vazio');
      return;
    }
    this.persistency.saveOrder();
    this.messaging.sendMessage(`Seu pedido com total de ${this.cart.total()} foi recebido.`);
    this.cart.clear();
    this.messaging.sendMessage('O cliente é:' + this.customer.getName() + ' ' + this.customer.getIDN());
  }


}

