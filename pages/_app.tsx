import { AppProps } from 'next/app'
import '../styles/index.css'

export const runtime = 'experimental-edge' // 'nodejs' (default) | 'edge'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
