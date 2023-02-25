import Cookies from "js-cookie"
import Link from "next/link"
import { useRouter } from "next/router"

const { Fragment } = require("react")


const Sidebar = () => {
    const router =  useRouter();
    return (
        <Fragment>
             <div id="sidebar" className="main-sidebar fixed-sidebar">
                <div className="sidebar-head">
                    <div className="sidebar-brand">
                        <Link href="/adminaccess/dashboard">
                            <span className="logo-link">Courier</span>
                        </Link>
                    </div>
                </div>
                <div className="sidebar-body">
                    <div className="sidebar-content">
                        <div className="sidebar-menu" data-simplebar="init">
                            <div className="sidebar-menu-wrapper">
                                <div className="simplebar-mask">
                                    <div className="simplebar-offset">
                                    <div className="simplebar-content-wrapper">
                                        <div className="simplebar-content">
                                            <ul className="sidebar-menu-item">
                                                <li>
                                                    <Link href="/adminaccess/dashboard">
                                                        <span className="sidebar-menu-link" >Dashboard</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <span className="sidebar-menu-link" onClick={() => {
                                                        Cookies.remove('_token')
                                                        router.reload();
                                                    }} >Logout</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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

export default Sidebar