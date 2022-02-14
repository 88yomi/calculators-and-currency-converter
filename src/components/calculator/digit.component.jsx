import React from 'react';

const Digit = ({ figure, handleClick }) => (
	<button onClick={handleClick} value={figure}>
		{figure}
	</button>
)

export default Digit;