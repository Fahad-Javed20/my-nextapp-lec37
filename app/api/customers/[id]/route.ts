import { getCustomerById, updateCustomer, deleteCustomer } from "@/app/data/customers";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const customerId = await params;
  const customer = await getCustomerById(+customerId);
  return new Response(JSON.stringify(customer), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const customerId = await params;
  await deleteCustomer(+customerId);
  return new Response(
    JSON.stringify({ message: "Customer deleted successfully" }),
    { status: 200, headers: { "Content-Type": "application/json" } },
  );
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
    const customerId = await params;
  const customerData = await request.json();
  const updatedCustomer = await updateCustomer({ ...customerData, id: +customerId });
  return new Response(JSON.stringify(updatedCustomer), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
