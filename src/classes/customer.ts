import { IndividualCustomerProtocol, EnterpriseCostumerProtocol, CustomerOrder } from "./interfaces/customer-protocol";

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(  firstName: string,
    lastName: string,
    cpf: string,) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.cpf = cpf;
    }
  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  getIDN(): string {
    return this.cpf;
  }

}
export class EnterpriseCustomer implements EnterpriseCostumerProtocol, CustomerOrder {

  constructor(  name: string,
    cnpj: string,) {
      this.name = name;
      this.cnpj = cnpj;
    }
  getName(): string {
    return this.name;
  }
  getIDN(): string {
    return this.cnpj;
  }
  name: string;
  cnpj: string;
}
