import { IPersistency } from "../classes/interfaces/persistency-protocol";

export class Persistency implements IPersistency{
  saveOrder(): void{ //
    console.log('Pedido salvo com sucesso...');
  }
}
