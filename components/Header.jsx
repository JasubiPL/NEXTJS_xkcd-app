import { Container, Text } from "@nextui-org/react";
import Link from "next/link";

export function Header(){
  return(
    <header className="flex justify-between items-center p-4 max-w-5xl m-auto">
      <Link href='/' className="font-bold">NEXT <span className=" font-light">xkcd</span></Link>
      <nav>
        <ul className="flex flex-row gap-2">
          <li><Link href='/' className="text-sm font-semibold">Home</Link></li>
          <li><Link href='/search' className="text-sm font-semibold">Search</Link></li>
        </ul>
      </nav>
    </header>
  )
}