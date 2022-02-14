import React, { useState, useEffect } from 'react';

import './basic.styles.css';

import Digit from './digit.component';
import Operator from './operator.component';

const Basic = () => {
	const [digit, useDigit] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '=']);
	const [sign, useSign] = useState(['+', '-', '÷', '×']);

	const [screen, setScreen] = useState("");

	useEffect(() => {
		document.title = 'Basic Calculator'
	}, [])

	const handleClickButton = e => {
		setScreen(screen + e.target.value);
	}

	return (
		<div>
			<div className="output">
				<h2 className="history">
				</h2>
				<h4 className="current">
					{screen}
				</h4>
			</div>
			<div className="input">
				<div className="numbers">
					{
						digit.map(d =>
							<Digit figure={d}
								handleClick={handleClickButton}
								key={d}
							/>
						)
					}
				</div>
				<div className="operators">
					{
						sign.reverse().map(sign => <Operator key={sign} op={sign} handleClickButton={handleClickButton}
							value={
								sign === '×' ? '*' :
									sign === '÷' ? '/' :
										sign
							}
						/>)
					}
					{ //	EQUALS BUTTON
						
					}
				</div>
			</div>
		</div>
	)
}

export default Basic;