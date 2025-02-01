import React from 'react'
import CustomerForm from '@/components/customers/CustomerForm'

import { customers } from '@/components/customers/constants'

async function CustomerDetail({params}: {params: Promise<{ slug: string }>}) {
  // convert the slug to number
  
  const slug = parseInt((await params).slug.toString());
  const customer = customers.find(customer => customer.id === slug);

  return (
    <CustomerForm customer={customer}>
    </CustomerForm>
  )
}

export default CustomerDetail