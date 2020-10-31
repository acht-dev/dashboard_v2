import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

export default function Kepegawaian() {
    return (
        <React.Fragment>
            <Header/>
            <Sidebar/>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <h1 className="m-0 text-dark">Statistik Kepegawaian</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-3 offset-sm-3">
                            <div className="form-group">
                                <select className="form-control skala" id="exampleFormControlSelect1">
                                <option>Nasional</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-sm-5 ml-2">
                            <input type="date" id="tanggal" name="tanggal" className="tanggal" />
                            </div>
                        </div>
                        </div>{/* /.col */}
                    </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                    {/* Small boxes (Stat box) */}
                    {/* isi content disini */}
                    {/* /.row (main row) */}
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
                </div>
            <Footer/>
        </React.Fragment>
    )
}
