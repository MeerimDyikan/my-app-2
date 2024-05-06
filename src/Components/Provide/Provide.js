import "./Provide.css"
import provideImg1 from "../../img/image 111.jpg"
function Provide (){
    return (
    <section className=" provide grey">
    <div className="container">
        <div className="provide_in flex">

            <div className="provide_left">
                <div className="provide_img">
                    <img src={provideImg1} alt=""/>
                    <div className="provide_info">
                        <p className="provide_info-tit">Come and visit us</p>
                        <ul className="provide_info-list">
                            <li> <a href="tel:4148570107">(414) 857 - 0107</a>
                            </li>
                            <li> <a className="provide_mail"
                                    href="mailto:happytummy@restaurant.com">happytummy@restaurant.com</a>
                            </li>
                            <li> <a className="provide_locate"
                                    href="https://www.google.kg/maps/search/837+W.+Marshall+Lane+Marshalltown,+IA+50158,+Los+Angeles/@37.4089828,-116.3770521,5z/data=!3m1!4b1?entry=ttu">837
                                    W. Marshall Lane Marshalltown, IA 50158, Los Angeles</a></li>
                        </ul>
                    </div>

                </div>
                

            </div>
            <div className="provide_right">
                <h2 className="sec_tit tal">We provide healthy food for your family.</h2>
                <p className="provide_txt">Our story began with a vision to create a unique dining experience that
                    merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary
                    culture, we aim to honor our local roots while infusing a global palate.</p>
                <p className="provide_txt-sm">At place, we believe that dining is not just about food, but also about
                    the overall experience. Our staff, renowned for their warmth and dedication, strives to make
                    every visit an unforgettable event.</p>
                <a href="" className="Btn">More About Us</a>
            </div>
            
        </div>
        
    </div>
</section>)
}
export default Provide