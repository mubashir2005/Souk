import Link from 'next/link'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return(
    <div>
    <nav className='border-b p-6'>
      <p className='text-4xl font-bold '>Souk NFT</p>
      <div className='flex mt-4'></div>
      <Link href={'/home'}>
      <a className='mr-6 text-pink-500'>Home</a>
      </Link>
            <Link href={'/sell'}>
      <a className='mr-6 text-pink-500'>Sell</a>
      </Link>
            <Link href={'/assets'}>
      <a className='mr-6 text-pink-500'>My assets</a>
      </Link>
    </nav>
    <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
