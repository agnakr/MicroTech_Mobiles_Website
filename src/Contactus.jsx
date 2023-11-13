import React from 'react'
import './Contactus.css'
function Contactus() {
    return (
        <div className="container-a">
            <div className="content-a">
                <div className="left-side-a">
                    <div className="address details-a">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="topic-a">Address</div>
                        <div className="text-one-a">Surkhet, NP12</div>
                        <div className="text-two-a">Birendranagar 06</div>
                    </div>
                    <div className="phone details-a">
                        <i className="fas fa-phone-alt"></i>
                        <div className="topic-a">Phone</div>
                        <div className="text-one-a">+0098 9893 5647</div>
                        <div className="text-two-a">+0096 3434 5678</div>
                    </div>
                    <div className="email details-a">
                        <i className="fas fa-envelope"></i>
                        <div className="topic-a">Email</div>
                        <div className="text-one-a">microtech@gmail.com</div>
                        <div className="text-two-a">info.microtech@gmail.com</div>
                    </div>
                </div>
                <div className="right-side-a">
                    <div className="topic-text-a">Send us a message</div>
                    <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
                    <form action="#">
                        <div className="input-box-a">
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className="input-box-a">
                            <input type="text" placeholder="Enter your email" />
                        </div>
                        <div className="input-box-a message-box-a">
                        </div>
                        <div className="button-a">
                            <input type="button" value="Send Now" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contactus
