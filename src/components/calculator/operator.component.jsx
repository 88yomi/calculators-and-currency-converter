import React from 'react';

const Operator = ({ op, handleClickButton }) => (
	<button onClick={handleClickButton} value={op}>
		{op}
	</button>
)

export default Operator;