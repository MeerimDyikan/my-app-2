import "./Footer.css"
import logo from "../../img/logo-footer.svg"
import footImg1 from "../../img/eiliv-aceron-d5PbKQJ0Lu8-unsplash 1.jpg"
import footImg2 from "../../img/pexels-ella-olsson-1640772 1.jpg"
import footImg3 from "../../img/pexels-steve-3789885 1.jpg"
import footImg4 from "../../img/pexels-ash-376464 1.jpg"

function Footer (){
    return (
        <footer>
            <div className="container">
                <div className="footer_in flex">
                    <div className="footer_info">
                        <a href="index.html" class="footer_logo">
                            <img src={logo} alt=""/>
                        </a>
                        <p className="footer_txt">In the new era of technology we look a <br/> in the future with certainty and pride to <br/> for our company and.</p>
                        <div className="footer_icons flex">
                            <a href={footImg1} class="footer_ic footer_ic-tw"></a>
                            <a href={footImg2} class="footer_ic footer_ic-fb"></a>
                            <a href={footImg3} class="footer_ic footer_ic footer_ic-inst"></a>
                            <a href={footImg4} class="footer_ic footer_ic-git"></a>
                        </div>
                    </div>
                    <div className="footer_menu">
                        <h4 className="footer_tit">Pages</h4>
                        <ul class="footer_list">
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Menu</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Delivery</a></li>
                        </ul>
                    </div>
                    <div className="footer_menu">
                        <h4 className="footer_tit">Utility Pages</h4>
                        <ul className="footer_list">
                            <li><a href="">Start here</a></li>
                            <li><a href="">Styleguide</a></li>
                            <li><a href="">Password Protected</a></li>
                            <li><a href="">404 Not Found</a></li>
                            <li><a href="">Licenses</a></li>
                            <li><a href="">Changelog</a></li>
                            <li><a href="">View More</a></li>
                        </ul>
                    </div>
                    <div className="footer_imgs">
					<h4 className="footer_tit">Follow Us On Instagramm</h4>
					<div className="footer_img-wrap flex"><a href="" className="footer_img"><img src={footImg1} alt=""/></a>
						
						<a href="" className="footer_img"><img src={footImg2} alt=""/></a><a href="" className="footer_img"><img src={footImg3} alt=""/></a>
						<a href="" className="footer_img"><img src={footImg4} alt=""/></a></div>
				</div>
			</div>
                <p className="footer_copy">Copyright © 2023 Hashtag Developer. All Rights Reserved</p>

            </div>
        </footer>
    )
}

export default Footer 