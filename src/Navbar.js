import React from 'react'
import Home from './Home'
import { Router, Route } from 'react-router-dom'
import Contactus from './Contactus'
import Aboutus from './Aboutus'
import Products from './Products'
function Navbar() {
    return (
        <Router>
            <div>
                <Route path='/home'><Home /></Route>
                <Route path='/contact'><Contactus /></Route>
                <Route path='/about'><Aboutus /></Route>
                <Route path='/products'><Products /></Route>
            </div>
        </Router>
    )
}
export default Navbar

