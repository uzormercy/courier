import { Fragment } from "react"
import Head from "next/head";
import Sidebar from "../Sidebar";


const DashboardLayout =  ({children}) => {

    return (
         <Fragment>
            <Head>
                <title>Courier</title>
                <meta name="description" content="Courier" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="root-dashboard">
                <div className="dashboard-main">
                    <Sidebar />
                    <div className="dashboard-wrap">
                        <div className="dashboard-header dashboard-header-fixed"></div>
                        <div className="dashboard-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12"></div>
                                    <div className="col-12">
                                       {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
        )
}

export default DashboardLayout