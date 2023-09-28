export enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
  }
  
export interface IAddress {
    street: string;
    postcode: string;
    house_number: number;
  }

export interface IOrder {
    orderId: string,
    order_date: Date,
    amount: number,
}

export interface ICustomer {
    customerId: number,
    name: string,
    age: Date | null,
    gender: Gender,
    address: IAddress[],
    orders: IOrder[]
}