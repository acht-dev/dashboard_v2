import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Detail_Layanan from '../pages/Detail_Layanan'
import Kebijakan from '../pages/Kebijakan'
import Kepegawaian from '../pages/Kepegawaian'
 
export default function Routes() {
    return (
        <Router>
            <React.Fragment>
                <Route exact path='/' component={Kepegawaian}/>
                <Route path='/detail-layanan' component={Detail_Layanan}/>
                <Route path='/kebijakan' component={Kebijakan}/>
            </React.Fragment>
        </Router>
    )
}
