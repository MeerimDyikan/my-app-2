import "./Logo.css"
import logo from "../../img/logo.svg"
function Logo (){
    return( 
        <a href="index.html" class="logo">
                <img src={logo} alt=""/>
				</a>
    )
}
export default Logo