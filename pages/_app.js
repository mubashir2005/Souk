import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return(
<MoralisProvider appId="yP1JbFgKNjB0K1twWpQNZ8uP03vUV5xg6g8Y9kRY" serverUrl="https://re4hj6vykohs.usemoralis.com:2053/server">
    <Component {...pageProps} />
  </MoralisProvider>
  ) 
}

export default MyApp
