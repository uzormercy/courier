import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import { useEffect } from 'react';
import { GetLayout } from '@/components/Layouts/LayoutConfiguration';

export default function App({ Component, pageProps, router }) {
  const layout = GetLayout(router.pathname)
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])
  return <>
        {layout({ children:  <Component {...pageProps} /> })}
        </> 
}
