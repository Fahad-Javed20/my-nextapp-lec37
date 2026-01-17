import Link from "next/link";

export default function Home() {
  return (
    <div >
     <h1>This is the HomePage.</h1>
     <Link className="font-bold text-red-600" href="/about">About</Link>
    </div>
  );
}
