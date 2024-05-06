import "./Event.css"
import eventImg1 from "../../img/kebab-set-table 1.jpg"
import eventImg2 from "../../img/event2.jpg"
import eventImg3 from "../../img/event3.jpg"
import eventImg4 from "../../img/event4.jpg"
function Event  (){
    return (<section className="event">
	<div className="container">
		<h3 className="card_tit">We also offer unique services for your events</h3>
		<div className="event_cards flex">
			<div className="event_card">
				<img src={eventImg1} alt="    " class="event1"/>
				<img src="" alt="" />
				<h4 className="sec_event">Caterings</h4>
				<p className="event_p">In the new era of technology we look in the future with certainty for life.</p>
			</div>
			<div className="event_card">
				<img src={eventImg2} alt="" class="event1"/>
				<h4 className="sec_event">Birthdays</h4>
				<p className="event_p">In the new era of technology we look in the future with certainty for life.</p>
			</div>
			<div className="event_card">
				<img src={eventImg3} alt="" className="event1"/>
				<h4 className="sec_event">Weddings</h4>
				<p className="event_p">In the new era of technology we look in the future with certainty for life.</p>
			</div>
			<div className="event_card">
				<img src={eventImg4}alt="" className="event1"/>
				<h4 className="sec_event">Events</h4>
				<p className="event_p">In the new era of technology we look in the future with certainty for life.</p>
			</div>
			

		</div>
	</div>
</section>
	)
}
export default Event