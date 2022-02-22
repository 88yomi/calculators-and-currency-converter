import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './sidebar.styles.scss';


const Sidebar = () => {
	const [show, toggle] = useState(false);

	const handleNavClick = () => {
		toggle(!show);
	}

	return (
		<section className='navigation'>
			<button onClick={handleNavClick}>
				==
			</button>
			<nav className={`sidebar ${show ? 'hide' : ""}`}>
					<ul>
						<li>
							<Link to="/">Simple Calculator</Link>
						</li>
						<li>
							<Link to="currency">Currency Converter</Link>
						</li>
						<li>
							<Link to="bmi">BMI Calculator</Link>
						</li>
					</ul>
				</nav>
		</section>
	)
};

export default Sidebar;