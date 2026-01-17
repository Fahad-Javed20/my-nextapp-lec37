import Link from "next/link";
import axios from "axios";

export default async function Home() {
  let customers = [];
  
  try {
    const response = await axios.get('http://localhost:3000/api/customers');
    customers = response.data;
  } catch (error) {
    console.error('Error fetching customers:', error);
  }

  return (
    <div>
      <h1>This is the HomePage.</h1>
      <Link href="/about">About</Link>
      
      <h2>Customers List</h2>
      <ul>
        {customers.map((customer: any) => (
          <li key={customer.id || customer.name}>
            {customer.name}
          </li>
        ))}
      </ul>
    </div>
  );
}