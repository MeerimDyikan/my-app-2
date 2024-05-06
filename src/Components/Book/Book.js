import "./Book.css"

function Book (){
    return(
        <section className="book">
		<div className="container">
			<h2 className="page_tit">Book a table</h2>
			<p className="page_desc">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
			<form action="" className="form form_book">
				<div className="form_in flex">
					
					<div className="form_input">
						<span className="form_tit">Date</span>
						<input type="text" className="input" placeholder="04/o1/2021"/>
					</div><div className="form_input">
						<span className="form_tit">Date</span>
						<input type="text" className="input" placeholder="04/o1/2021"/>
					</div><div className="form_input">
						<span className="form_tit">Date</span>
						<input type="text" className="input" placeholder="04/o1/2021"/>
					</div><div className="form_input">
						<span className="form_tit">Date</span>
						<input type="text" className="input" placeholder="04/o1/2021"/>
					</div>
					<div className="form_input form_input__big">
						<span className="form_tit">Date</span>
						<input type="text" className="input" placeholder="04/o1/2021"/>
					</div>
					<div className="form_btn">
						
						<button className="Btn Btn__red" type="submit">Book A Table</button>
					</div>
				</div>
			</form>
		</div>
		<div className="map"><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6fa38b93a0c4aa8a9eecfe85e48ede1138420c5932b02726017b0fb4e054eab1&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe></div>
	</section>
	
    )
}
export default Book