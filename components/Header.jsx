import { Text } from "@nextui-org/react";
import Link from "next/link";

export default function Header(){
  return(
    <header>
      <div>
        <Text small>next xkcd</Text>
      </div>
      <nav>
        <ul>
          <li><Link href='/'>Home</Link></li>
        </ul>
      </nav>
    </header>
  )
}