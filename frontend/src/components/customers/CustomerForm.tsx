"use client";
import { useState } from "react";

export default function CustomerForm({ customer }: { customer?: any } = {}) {
  const [nameValue, setNameValue] = useState(customer?.name);
  const [emailValue, setEmailValue] = useState(customer?.email);
  const [companyValue, setCompanyValue] = useState(customer?.company);

  const handleNameChange = (event: any) => {
    setNameValue(event.target.value);
  };
  const handleEmailChange = (event: any) => {
    setEmailValue(event.target.value);
  }
  const handleCompanyChange = (event: any) => {
    setCompanyValue(event.target.value);
  }

  return (
    <form className="p-4 bg-white shadow rounded">
      <h3 className="text-lg font-bold mb-4">Add/Edit Customer</h3>
      <div className="mb-2">
        <input
          value={nameValue}
          className="border w-full p-2 rounded"
          type="text"
          placeholder="Name"
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-2">
        <input
          value={emailValue}
          className="border w-full p-2 rounded"
          type="email"
          placeholder="Email"
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-2">
        <input
          value={companyValue}
          className="border w-full p-2 rounded"
          type="text"
          placeholder="Company"
          onChange={handleCompanyChange}
        />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}
