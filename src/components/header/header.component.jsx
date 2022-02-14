import React from 'react';

import { ReactComponent as Logo } from '../../logo.svg';
import './header.styles.css';

const Header = () => (
	<header>
		<div className="icon">
			<Logo height='30px' />
		</div>
		<nav>
			<ul>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
			</ul>
		</nav>
	</header>
)

export default Header;