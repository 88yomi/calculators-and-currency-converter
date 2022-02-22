import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../logo.svg';
import './header.styles.scss';

const Header = () => (
	<header>
		<div className="icon">
			<Link to="/">
				<Logo height='30px' />
			</Link>
		</div>
		<nav>
			<ul>
				<li>
					<Link to="/">
						Home
					</Link>
				</li>
				<li>
					<Link to="contact">
						Contact
					</Link>
				</li>
				<li>
					<Link to="about">
						About
					</Link>
				</li>
			</ul>
		</nav>
	</header>
)

export default Header;