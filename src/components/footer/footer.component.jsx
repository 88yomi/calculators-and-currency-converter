import React from 'react';
import './footer.styles.css';

const Footer = () => (
	<footer>
		{/* change it to the html copyright sign; and the date to the javascript date thing too */}
		Oluwayomi Balogun	 © {new Date().getFullYear()}
	</footer>
)

export default Footer;