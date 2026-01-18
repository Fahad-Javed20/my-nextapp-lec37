const customers = [
  { id: 1, name: 'Alice Johnson', email: 'K6B0F@example.com', phone: '123-456-7890', address: '123 Main St, Anytown, USA' },
  { id: 2, name: 'Bob Smith', email: 'q0m7d@example.com', phone: '987-654-3210', address: '456 Elm St, Anytown, USA' },
  { id: 3, name: 'Charlie Brown', email: 'fzK6G@example.com', phone: '555-123-4567', address: '789 Oak St, Anytown, USA' },
  { id: 4, name: 'Diana Prince', email: 'RcEhY@example.com', phone: '555-123-4567', address: '789 Oak St, Anytown, USA' },
  { id: 5, name: 'Eva Green', email: 'RcEhY@example.com', phone: '555-123-4567', address: '789 Oak St, Anytown, USA' }
];

export async function getCustomerById(id: number) {
  return customers.find(customer => customer.id === id) || null;
}

export async function getAllCustomers() {
  return customers;
}

export async function addCustomer(customer: { id: number; name: string; email: string; phone: string; address: string; }) {
  customers.push(customer);
  return customer;
}

export async function deleteCustomer(id: number) {
  const index = customers.findIndex(customer => customer.id === id);
  if (index !== -1) {
    const deletedCustomer = customers.splice(index, 1)[0];
    return deletedCustomer;
  }
  return null;
}

export async function updateCustomer(updatedCustomer: {
   id: number;
    name: string;
     email: string; 
     phone: string; 
     address: string; }) {
  const index = customers.findIndex(customer => customer.id === updatedCustomer.id);
  if (index !== -1) {
    customers[index] = updatedCustomer;
    return updatedCustomer;
  }
  return null;
}

