import "./Guest.css"
import guestImg1 from "../../../img/pexels-cottonbro-studio-4252139 1.jpg"

function Guest (){
    return (
        <section className="guest grey">
		<div className="container">
			<div className="guest_in flex">
				<div className="guest_content">
					<h2 className="sec_tit tal">A little information for our valuable guest</h2>
					<p className="guest_txt">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
					<div className="guest_cards flex"> 
						<div className="guest_card">
							<span>

							</span>3
							<p>Location</p>
						</div>
						<div className="guest_card">
							<span>1995

							</span>
							<p>Founded</p>
						</div>
						<div className="guest_card">
							<span>65+

							</span>
							<p>Staff members</p>
						</div><div className="guest_card">
							<span>100%

							</span>
							<p>Satisfied customers</p>
						</div>
					</div>
				</div>
				<div className="guest_img">
					<img src={guestImg1} alt=""/>
				</div>
			</div>
		</div>
	</section>
    )
}
export default Guest