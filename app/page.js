import Image from "next/image";
import Link from "next/link";
import Layout from "./navigation"

export default function Home() {
  return (
    <Layout>
      <h1 className="font-bold text-4xl">Welcome to Home Page</h1>
      <div><Link href="/about">Go to About</Link></div>
      <div><Link href="/posts/1">Go to Post 1</Link></div>
      <div><Link href="/posts/2">Go to Post 2</Link></div>
    </Layout>
  );
}
