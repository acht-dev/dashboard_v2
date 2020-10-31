import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const currentLoc = window.location.pathname;
    console.log(currentLoc)
    return (
        <React.Fragment>
            <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{marginTop:'3.6%'}}>
            <nav className="navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" style={{color: 'white'}} /></a>
                </li>
                </ul>
            </nav>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="info">
                    <a href="#" className="d-block">Dashboard</a>
                </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library "nav-link {(currentLoc == '/' ? 'active' : '')}" */}
                    <li className="nav-item">
                    <a href="/" className={currentLoc === '/' ? 'nav-link active' : 'nav-link'}>
                        <i className="nav-icon fas fa-users" />
                        <p>
                        Statistik Kepegawaian
                        </p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="/detail-layanan" className={currentLoc === '/detail-layanan' ? 'nav-link active' : 'nav-link'}>
                        <i className="nav-icon fas fa-chart-bar" />
                        <p>
                        Statistik Layanan
                        </p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="/kebijakan" className={currentLoc === '/kebijakan' ? 'nav-link active' : 'nav-link'}>
                        <i className="nav-icon fas fa-file-alt" />
                        <p>
                        Kebijakan
                        </p>
                    </a>
                    </li>
                </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
            </aside>
        </React.Fragment>
    )
}
