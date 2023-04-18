import Head from 'next/head'
import { Header } from '@/components/Header';
import fs from 'fs/promises'
import Link from 'next/link';
import Image from 'next/image';

export default function Home({ latestComics }) {
  return (
    <>
      <main>
        <h2 className='text-3xl font-bold text-center'>Latest Comiscs</h2>+
        <section className='grid grid-cols-1 gap-2 max-w-5xl m-auto mb-3 sm:grid-cols-2 lg:grid-cols-3'>
          {
            latestComics.map(comic =>{
              return(
                <Link className='mb-4 pb-4 m-auto' href={`/comics/${comic.id}`} key={comic.id}>
                  <h3 className='font-bold text-sm pb-2 text-center'>{comic.title}</h3>
                  <Image width='300' height='300' src={comic.img} alt={comic.alt} />
                </Link>
              )
            })
          }
        </section>
      </main>
    </>
  )
}

export async function getStaticProps(context){
  const files = await fs.readdir("./comics")
  //console.log(files)
  const latestComicsFiles = files.slice(-9, files.length)
  //console.log(lastComics)

  const promisesReadFiles = latestComicsFiles.map(async (file) =>{
    const content = await fs.readFile(`./comics/${file}`, "utf-8")
    return JSON.parse(content)
  })

  const latestComics = await Promise.all(promisesReadFiles)
  console.log(latestComics)

  return {
    props: {
      latestComics
    }
  }
}
