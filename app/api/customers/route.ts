import { getAllCustomers } from "@/app/data/customers";
import { addCustomer } from "@/app/data/customers";

export async function GET() {
  const customers = await getAllCustomers();
  return new Response(JSON.stringify(customers), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const customerData = await request.json();
  const newCustomer = await addCustomer(customerData);
  return new Response(JSON.stringify(newCustomer), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
