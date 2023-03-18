import Head from "next/head";
import NavigationBar from "../NavigationBar";
import Banner from "../Banner";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState, useRef } from "react";
import Footer from "../Footer";


const DefaultLayout = ({ children }) => {
    const innerPages = useRef([
        {
            name: 'Welcome to courier',
            path: '/'
        },
        {
            name: 'About Us',
            path: '/about-us'
        },
        {
            name: 'Cargo Tracking',
            path: '/track'
        },
        {
            name: 'Contact Us',
            path: '/contact-us'
        },
        {
            name: 'Services',
            path: '/services'
        }
    ]).current

    const [isLoading, setIsLoading] = useState(true)
    const [isHomePage, setIsHomePage] =  useState(true);
    const [pageTitle, setPageTitle] = useState("Welcome to Xdevlogistics");
    const router = useRouter();

    const handlePageTitle = () => {
        const page = innerPages.find((page) => router.pathname === page.path)
        setIsLoading(false)
        if(router.pathname !== '/'){
            setIsHomePage(false);
            setPageTitle(page.name);
        }
    }

    useEffect(() => {
        handlePageTitle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const title = `Courier - ${pageTitle}`;
    return(
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Xdevlogistics" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavigationBar />
                {!isLoading && <Banner isFull={isHomePage} pageTitle={pageTitle} /> }
                {children}
            <Footer/>
        </Fragment>
    )
}
export default DefaultLayout;