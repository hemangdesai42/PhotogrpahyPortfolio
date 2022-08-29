import '../styles/globals.css'
import ResponsiveAppBar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ResponsiveAppBar/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
