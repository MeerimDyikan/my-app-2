import "./Browse.css"
import browseImg1 from "../../img/icons/Vector (8).png"
import browseImg2 from "../../img/icons/Group (1).png"
import browseImg3 from "../../img/icons/Group.png"
import browseImg4 from "../../img/icons/Vector (9).png"
function Browse(){
    return (
        	
	<section className="browse">
    <div className="container">
        <h2 className="sec_tit">Browse our menu</h2>
        <div className="browse_cards flex">
            <div className="browse_card"> <i className="browse_ic"><img src={browseImg1} alt="" className="browse_ic"/></i>
                <h3 className="browse_tit">Breakfast</h3>
                <p className="browse_txt">In the new era of technology we look in the future with certainty and pride
                    for our life.</p>
                <a href="" className="browse_link">Explore menu</a>
            </div>
            <div class="browse_card"> <i class=""><img src={browseImg3}alt=""className="browse_ic"/></i>
                <h3 className="browse_tit">Main Dishes</h3>
                <p className="browse_txt">In the new era of technology we look in the future with certainty and pride
                    for our life.</p>
                <a href="" className="browse_link">Explore menu</a>
            </div>
            <div class="browse_card"> <i className="browse_ic"><img src={browseImg4}alt="" className="browse_ic"/></i>
                <h3 className="browse_tit">Drinks</h3>
                <p className="browse_txt">In the new era of technology we look in the future with certainty and pride
                    for our life.</p>
                <a href="" className="browse_link">Explore menu</a>
            </div>
            <div class="browse_card"> <i className="browse_ic"><img src={browseImg2} alt="" className="brose_ic"/></i>
                <h3 className="browse_tit">desserts</h3>
                <p className="browse_txt">In the new era of technology we look in the future with certainty and pride
                    for our life.</p>
                <a href="" className="browse_link">Explore menu</a>
            </div>

        </div>
    </div>
</section>
    )
}
export default Browse
