import { Layout } from '../components/Layout'
import '../styles/globals.css'
import './../components/RichTextEditor/Editor.css'
import 'draft-js/dist/Draft.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
