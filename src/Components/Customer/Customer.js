import "./Customer.css"
import customerImg1 from "../../img/customer1.png"
function Customer (){
    return(
        <section className="customers">
			<div className="container">
				<h7 className="customers_tit">What Our Customers Say</h7>
				<div className="customer_cards flex">
					<div className="customer_card">
						<h6 className="customer_tit">“The best restaurant”</h6>
						<p className="customer_p">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>  <div className="customer_footer flex"> <div className="cust_left"><img src= {customerImg1} alt="" className="customer_ic"/></div>
						<div className="cust_right"><p class="customer_name">Sophire Robson</p>
							<p className="customer_city">Los Angeles, CA</p></div>	</div>
						
					</div>
					<div className="customer_card">
						<h6 className="customer_tit">“The best restaurant”</h6>
						<p className="customer_p">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>  <div className="customer_footer flex"> <div className="cust_left"><img src={customerImg1}  alt="" className="customer_ic"/></div>
						<div className="cust_right"><p class="customer_name">Sophire Robson</p>
							<p className="customer_city">Los Angeles, CA</p></div>	</div>
						
					</div>
					<div className="customer_card">
						<h6 className="customer_tit">“The best restaurant”</h6>
						<p class="customer_p">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
						 <div className="customer_footer flex"> <div className="cust_left"><img src={customerImg1}  alt="" className="customer_ic"/></div>
						<div className="cust_right"><p class="customer_name">Sophire Robson</p>
							<p className="customer_city">Los Angeles, CA</p></div>	</div>
						
					</div>
					
				</div>
					</div>
				
		</section>
    )
}
export default Customer