import React from 'react'

export default function Header() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src="./assets/image/bkn-logo.jpg" style={{width: '8%'}} />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <h5 style={{marginLeft: '2%', fontWeight: 'bold', color: '#b61e83'}}>Dashboard Statistik SI-ASN Badan Kepegawaian Negara</h5>
                <ul className="navbar-nav mr-auto">
                </ul>
                <form className="form-inline ml-3">
                <div className="input-group input-group-sm" style={{marginRight: '10%'}}>
                    <input className="form-control form-control-navbar" type="search" style={{width: 300}} placeholder="Search Here" aria-label="Search" />
                    <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search" />
                    </button>
                    </div>
                </div>
                </form>
                <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <div className="inisial">
                    <p className="nama-inis">EW</p>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" style={{color: '#b61e83'}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Evans Winanda
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Profil</a>
                    <a className="dropdown-item" href="#">Pengaturan</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#"><i className="fas fa-power-off">&nbsp; </i> Keluar (Sign Out) </a>
                    </div>
                </li>
                </ul>
            </div>
            </nav>
        </React.Fragment>
    )
}
