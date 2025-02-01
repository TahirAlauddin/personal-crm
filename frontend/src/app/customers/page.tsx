import CustomerTable from "@/components/customers/CustomerTable";
import CustomerForm from "@/components/customers/CustomerForm";

import { customers } from "@/components/customers/constants";

export default function Customers() {
  return (
    <>
      <div className="m-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Customers</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Add New Customer
          </button>
        </div>

        {/* <CustomerForm customer={customers[0]} /> */}
      </div>
      <CustomerTable />
    </>
    
  );
}
