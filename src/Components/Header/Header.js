import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"
import "./Header.css"
import Button from "../Button/Button"
function Header (){
    return(
        <header>
		<div className="container">
			<div className="head_in flex">
                <Logo />
				<Nav/>
				<Button/>

			</div>

		</div>
	</header>

    )
}
export default Header