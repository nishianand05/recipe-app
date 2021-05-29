import React, {Component} from 'react';
import "./Navbar.css"

class Navbar extends Component {
	render(){
		return (
			<header>	
				<h2><a href='.'>Recipe App</a></h2>
				<nav>
					<li><a href='.'>New Recipe</a></li>
					<li><a href='.'>Home</a></li>
					<li><a href='.'>About</a></li>
					<li><a href='.'>Contact Us</a></li>
				</nav>
			</header>

		);
	}
}

export default Navbar;