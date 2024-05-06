import "./Food.css"
import foodImg1 from "../../img/food.jpg"
import foodImg2 from "../../img/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food 1.jpg"
import foodImg3 from "../../img/fooddown.jpg"

 function Food (){
    return (
        <section className="food grey">
		<div class="container">
			<div className="food_in flex">
				<div className="food_img-big">
					<div className="food_img">
						<img src={foodImg1} alt=""/>
					</div>
				</div>
				<div className="food_img-sm">
					<div className="food_img">
						<img src={foodImg2}alt=""/>
					</div>
					<div className="food_img">
						<img src= {foodImg3}alt=""/>
					</div>
				</div>
				<div className="food_right">
					<h2 className="sec_tit tal">Fastest Food Delivery in City</h2>
					<p className="food_txt">Our visual designer lets you quickly and of drag a down your way to customapps
						for both keep desktop.

					</p>
					<ul className="food_list">
						<li>Delivery within 30 minutes</li>
						<li>Best Offer & Prices</li>
						<li>Online Services Available</li>
					</ul>
				</div>
				<h2 className="sec_tit"></h2>
			</div>
		</div>
		</section>
    )
 }
 export default Food