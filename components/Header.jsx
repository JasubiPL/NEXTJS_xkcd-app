import { Container, Text } from "@nextui-org/react";
import Link from "next/link";

export function Header(){
  return(
    <header className="flex justify-between items-center p-4 mx-w-xl m-auto">
      <h1 className="font-bold">NEXT <span className=" font-light">xkcd</span></h1>
      <nav>
        <ul className="flex flex-row gap-2">
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/search'>Search</Link></li>
        </ul>
      </nav>
    </header>
  )
}