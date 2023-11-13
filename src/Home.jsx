import React from 'react'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
function Home() {
    return (
        <div className='container' id='home'>
            <div className='text-center p-5'>
                <h2 id='v'>Microtech Mobile </h2>
                <p>Welcome to Microtech Mobile ! Online store for mobiles! </p>
            </div>
            <div class="container">
                <h2 className="text-center" id='v'>Our Gallery</h2>
                <br></br>
                <div class="gallery">
                    <div>
                        <img src="/images/img1.jpg" />
                    </div>
                    <div>
                        <img src="images/img2.jpg" />
                    </div>
                    <div>
                        <img src="images/img3.jpg" />
                    </div>
                    <div>
                        <img src="images/img4.jpg" />
                    </div>
                    <div>
                        <img src="images/img5.jpg" />
                    </div>
                    <div>
                        <img src="images/img6.jpg" />
                    </div>
                    <div>
                        <img src="images/img7.jpg" />
                    </div>
                    <div>
                        <img src="images/img8.jpg" />
                    </div>
                    <div>
                        <img src="images/img9.jpg" />
                    </div>
                    <div>
                        <img src="images/img10.jpg" />
                    </div>
                    <div>
                        <img src="images/img11.jpg" />
                    </div>
                    <div>
                        <img src="images/img12.jpg" />
                    </div>
                </div>
            </div>
            <div>
                <Aboutus />
                <Contactus />
            </div>
        </div>

    )
}
export default Home
