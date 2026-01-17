const customers = [
  { id: 1, name: 'Alice Johnson', email: 'K6B0F@example.com', phone: '123-456-7890', address: '123 Main St, Anytown, USA' },
  { id: 2, name: 'Bob Smith', email: 'q0m7d@example.com', phone: '987-654-3210', address: '456 Elm St, Anytown, USA' },
  // Add more customers here
  { id: 3, name: 'Charlie Brown', email: 'fzK6G@example.com', phone: '555-123-4567', address: '789 Oak St, Anytown, USA' }, 
    { id: 4, name: 'Diana Prince', email: 'RcEhY@example.com', phone: '555-123-4567', address: '789 Oak St, Anytown, USA' }, 
    { id: 5, name: 'Eva Green', email: 'RcEhY@example.com', phone: '555-123-4567', address: '789 Oak St, Anytown, USA' }, 
    { id: 6, name: 'Fiona Red', email: 'RcEhY@example.com', phone: '555-123-4567', address: '789 Oak St, Anytown, USA' }, 
    { id: 7, name: 'Grace Blue', email: 'RcEhY@example.com', phone: '555-123-4567', address: '789 Oak St, Anytown, USA' },  
    { id: 8, name: 'Helen Yellow', email: 'RcEhY@example.com', phone: '555-123-4567', address: '789 Oak St, Anytown, USA' },  
    { id: 9, name: 'Ivy White', email: 'RcEhY@example.com', phone: '555-123-4567', address: '789 Oak St, Anytown, USA' },       
    { id: 10, name: 'Jack Black', email: 'RcEhY@example.com', phone: '555-123-4567', address: '789 Oak St, Anytown, USA' }];

import { NextResponse } from 'next/server';
export async function GET() {
  return NextResponse.json(customers);
}
export async function POST(request: Request) {
  const newCustomer = await request.json();
  customers.push(newCustomer);
  return NextResponse.json(newCustomer, { status: 201 });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get('id') || '0', 10);
  const index = customers.findIndex((customer) => customer.id === id);  
    if (index !== -1) {
      const deletedCustomer = customers.splice(index, 1)[0];
      return NextResponse.json(deletedCustomer);
    } else {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
    }
  }

export async function PATCH(request: Request) {
  const updatedCustomer = await request.json();
  const index = customers.findIndex((customer) => customer.id === updatedCustomer.id);
  if (index !== -1) {
    customers[index] = updatedCustomer;
    return NextResponse.json(updatedCustomer);
  } else {
    return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
  }
}