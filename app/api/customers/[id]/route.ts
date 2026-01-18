import { getCustomerById } from "@/app/data/customers";
import { deleteCustomer } from "@/app/data/customers";
import { updateCustomer } from "@/app/data/customers";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const customerId = parseInt(params.id, 10);
  const customer = await getCustomerById(customerId);
  return new Response(JSON.stringify(customer), { status: 200, headers: { "Content-Type": "application/json" } });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const customerId = parseInt(params.id, 10);
  const deletedCustomer = await deleteCustomer(customerId);
  return new Response(JSON.stringify(deletedCustomer), { status: 200, headers: { "Content-Type": "application/json" } });
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const customerId = parseInt(params.id, 10);
    const updatedCustomer = await request.json();
    const customer = await updateCustomer({ ...updatedCustomer, id: customerId });
    return new Response(JSON.stringify(customer), { status: 200, headers: { "Content-Type": "application/json" } });
}