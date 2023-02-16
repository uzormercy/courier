const { Fragment } = require("react")


const Sidebar = () => {
    return (
        <Fragment>
             <div id="sidebar" className="main-sidebar fixed-sidebar">
                <div className="sidebar-head">
                    <div className="sidebar-brand">
                        <a href="/adminaccess/dashboard" className="logo-link">Courier</a>
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
                                                <li><a href="" className="sidebar-menu-link">Dashboard</a></li>
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