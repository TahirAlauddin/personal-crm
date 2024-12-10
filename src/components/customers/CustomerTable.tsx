import Link from "next/link";
import { customers } from "./constants";

function CustomerRow({ customer }: { customer: any }) {
  return (
    <tr>
      <td className="px-4 py-2">{customer.name}</td>
      <td className="px-4 py-2">{customer.email}</td>
      <td className="px-4 py-2">{customer.company}</td>
      <td className="px-4 py-2">
        <Link className="text-blue-600" href={`/customers/${customer.id}`}>
          Edit
        </Link>
        <button className="text-red-600 ml-2">Delete</button>
      </td>
    </tr>
  );
}

export default function CustomerTable() {
  return (
    <table className="px-4 min-w-full bg-white">
      <thead>
        <tr>
          <th className="text-left bg-blue-500"><span className="mx-5">Name</span></th>
          <th className="text-left bg-blue-500"><span className="mx-5">Email</span></th>
          <th className="text-left bg-blue-500"><span className="mx-5">Company</span></th>
          <th className="text-left bg-blue-500"><span className="mx-5">Actions</span></th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <CustomerRow key={customer.id} customer={customer} />
        ))}
      </tbody>
    </table>
  );
}
