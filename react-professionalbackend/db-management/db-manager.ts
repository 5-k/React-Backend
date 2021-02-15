import { CustomerSchema } from "../db-schemas";
import { Mongoose } from "./connection-manager";
import { CustomerDocument } from "./customer-document";

var mongooseScheema = new Mongoose.Schema(CustomerSchema);
const CustomersContext = Mongoose.model<CustomerDocument>("customers",mongooseScheema);

export {
    CustomersContext
}; 