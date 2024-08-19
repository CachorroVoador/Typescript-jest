import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { NoDiscount } from "./classes/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer";
import { Messaging } from "./services/message";


const individualCustomer  = new IndividualCustomer('Eu', 'Sim', '111.111.111');
const enterpriseCustomer = new EnterpriseCustomer('Empresa gigante', '324234521451245 sei lá n lembro de cnpj');
const shoppingCart = new ShoppingCart(new NoDiscount());
shoppingCart.addItem(new Product( 'Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno Tilibra Surfista', 9.9));
shoppingCart.addItem(new Product('Lápis 20cm', 4.3));

const order = new Order(shoppingCart, new Persistency(), new Messaging(), enterpriseCustomer);
console.log(shoppingCart.totalWithDiscount());
order.checkout();
