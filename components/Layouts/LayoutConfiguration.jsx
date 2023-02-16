import { useRouter } from "next/router"
import url from 'url';
import DefaultLayout from "./DefaultLayout";
import EmptyLayout from "./EmptyLayout";
import DashboardLayout from "./DashboardLayout";

const LayoutConfig = [
    {
        path: '/',
        layout: DefaultLayout
    },
    {
        path: '/track',
        layout: DefaultLayout
    },
    {
        path: '/about-us',
        layout: DefaultLayout
    },
    {
        path: '/contact-us',
        layout: DefaultLayout
    },
    {
        path: '/services',
        layout: DefaultLayout
    },
    {
        path: '/adminaccess',
        layout: EmptyLayout
    },
    {
        path: '/adminaccess/dashboard',
        layout: DashboardLayout
    },
    {
        path: '/adminaccess/parcels',
        layout: DashboardLayout
    },
    {
        path: '/adminaccess/parcels/create',
        layout: DashboardLayout
    }
]


const GetLayout = (path) => {
    const router = useRouter();
    const { pathname } = url.parse(process.env.NEXT_PUBLIC_BASE_URL + router.asPath, true)
    const config = LayoutConfig.find(({path}) => path === pathname);
    if(config) return config.layout;
    if(config === undefined && pathname.includes('adminaccess'))return DashboardLayout
    if(router.query) return DefaultLayout;
}

export { GetLayout }