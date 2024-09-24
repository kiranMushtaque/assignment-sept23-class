
'use client'
import Link from "next/link";
import {useRouter} from 'next/navigation';
import React from "react";





export default function Home (){
  const route = useRouter();
  return (
    <>
      <h1>This is a Homepage</h1>
      <button onClick={() => route.push("/about")}>Go to About Page</button>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/navbar">Navbar</Link>
      <br />
      <Link href="/contact">Contact</Link>
      <br />
      <Link href="/footer">Footer</Link>
    </>
  );
}