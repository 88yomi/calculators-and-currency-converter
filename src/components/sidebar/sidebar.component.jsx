import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar.styles.css';

const Sidebar = () => (
	<nav className='sidebar'>
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
);

export default Sidebar;