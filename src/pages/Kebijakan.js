import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  }

export default function Kebijakan() {
    return (
        <React.Fragment>
            <Header/>
            <Sidebar/>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                        <h1 className="m-0 text-dark">Kebijakan</h1>
                        </div>
                        <div className="col-sm-3">
                        <div className="float-right">
                            <input type="date" id="tanggal" name="tanggal" className="tanggal" />
                        </div>
                        </div>
                    </div>
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
                {/* /.content-header */}
                <div className="container-fluid">
                    {/* Info boxes */}
                    <div className="container">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                    </div>
                </div>
                </div>
            <Footer/>
        </React.Fragment>
    )
}
