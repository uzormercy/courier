import Head from "next/head";
import NavigationBar from "../NavigationBar";
import Banner from "../Banner";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Footer from "../Footer";

const DefaultLayout = ({children}) => {
    const router = useRouter();
    const [isHomePage, setIsHomePage] =  useState(true);
    const [pageTitle, setPageTitle] = useState("Welcome to courier");
    const innerPages = [
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
    ]

    const handlePageTitle = () => {
        const page = innerPages.find((page) => router.pathname === page.path)
        if(router.pathname !== '/'){
            setIsHomePage(false);
            setPageTitle(page.name);
        }
    }

    useEffect(() => {
        handlePageTitle();
    }, [])
    const title = `Courier - ${pageTitle}`;
    return(
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Courier" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavigationBar />
                <Banner isFull={isHomePage} pageTitle={pageTitle} />
                {children}
            <Footer/>
        </Fragment>
    )
}
export default DefaultLayout;