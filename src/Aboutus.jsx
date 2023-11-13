import React from 'react'
import './Aboutus.css'
function Aboutus() {
    return (
        <div className="container text-center">
            <div className="about-section">
                <h3 id='v'>Some text about  who we are and what we do.</h3>
                <p>Our team of 8000+ professionals includes the world's leading public mobile experts, including CEO,Founder,Director,managers. Together, we coordinate the Mobile experts are responsible for delivering mobile solutions to customers in the field. By connecting nations, people and partners to latest Technologies.</p>
            </div>
            <h2 id='v'>Our Microtech  Team</h2>
            <div className="row">
                <div className="col">
                    <div className="card w-50 h-20">
                        <img src="/images/jane.jpg" alt="Jane" />
                        <div className="container">
                            <h2>Jane Doe</h2>
                            <p className="title">CEO & Founder</p>
                            <p>CEO & Founder of Microtech Mobile</p>
                            <p>jane@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card w-50 h-20">
                        <img src="/images/mike.jpg" alt="Mike" />
                        <div className="container">
                            <h2>Mike Ross</h2>
                            <p className="title">Director</p>
                            <p>Director of Microtech Mobile</p>
                            <p>mike@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card w-50 h-20">
                        <img src="/images/john.jpg" alt="John" />
                        <div className="container">
                            <h2>John Doe</h2>
                            <p className="title">Sales Co-ordinator</p>
                            <p>Sales Co-ordinator of Microtech Mobile</p>
                            <p>john@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aboutus
