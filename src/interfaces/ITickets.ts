import { IClientDataProtocol } from "./IClients";

export interface ITicketDataProtocol {
  id: string;
  name: string;
  address: string;
  created_at: Date;
  updated_at: Date;
  userId: string;
  status: string;
  desciption: string;
  customerId: string;
  customer: IClientDataProtocol;
}
