import "./Contact.css"
function Contact (){
    return(
        <section className="book">
		<div className="container">
			<h2 className="page_tit">Contact Us</h2>
			<p class="page_desc">We consider all the drivers of change gives you the components you need to change to create a truly happens..</p>
			<form action="" className="form form_book">
				<div className="form_in flex">
					
					<div className="form_input">
						<span className="form_tit">Date</span>
						<input type="text" className="input" placeholder="04/o1/2021"/>
					</div><div className="form_input">
						<span className="form_tit">Date</span>
						<input type="text" class="input" placeholder="04/o1/2021"/>
					</div><div className="form_input">
						<span className="form_tit">Date</span>
						<input type="text" className="input" placeholder="04/o1/2021"/>
					</div><div className="form_input">
						<span class="form_tit">Date</span>
						<input type="text" className="input" placeholder="04/o1/2021"/>
					</div>
					<div className="form_input form_input__big">
						<span className="form_tit">Date</span>
						<input type="text" className="input" placeholder="04/o1/2021"/>
					</div>
					<div class="form_btn">
						
						<button className="Btn Btn__red" type="submit">Book A Table</button>
					</div>
				</div>
			</form>
		</div>
		<div className="adress">
			<div className="container">
				<div className="adress_in flex">
					<div className="adress_card"><h4 className="adress_tit">Call us</h4>
						<a href="tel:+12345678900" class="adress_link">+1-234-567-8900</a></div>
					<div class="adress_card"><h4 class="adress_tit">Hours</h4>
						<p className="adress_txt">Mon-Fri: 11am - 8pm </p>
					<p className="adress_txt">Sat, Sun: 9am - 10pm</p></div>
					<div className="adress_card">
						<h4 className="adress_tit">Our Location:
							</h4>
						<p className="adress_txt">123 Bridge Street  </p>
						<p className="adress_txt">     Nowhere Land, LA 12345 </p>
						<p className="adress_txt">     United State</p>
					</div>
					
				</div>
			</div>

		</div>
	</section>
    )
}
export default Contact