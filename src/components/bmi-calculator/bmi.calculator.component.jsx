import React, { useState, useEffect } from "react";
import './bmi.styles.css';

import BmiRating from './bmi.logic.component';
import BmiInput from "./bmi.input.component";

const BmiCalculator = () => {
	const [kilos, setKilos] = useState(0);
	const [metres, setMetres] = useState(0);

	useEffect(() => {
		document.title = 'BMI Calculator'
	}, [])
	
	const handleChangeKilos = e => {
		setKilos(e.target.value);
	}
	
	const handleChangeMetres = e => {
		setMetres(e.target.value);
	}
	
	const handleSubmit = e => {
		e.preventDefault();
		// call the function that will run when you click on convert
	}

	let bmi = Number((kilos / (metres * metres)).toFixed(2));


	return (
		<div className="bmi">
			<form className="bmi__form" onSubmit={handleSubmit}>
				<BmiInput measure="weight" unit={kilos} handleChange={handleChangeKilos} />
				<BmiInput measure="height" unit={metres} handleChange={handleChangeMetres} />
			</form>

			{//render the number, for now
				bmi !== Infinity && !isNaN(bmi) ? bmi : ""
			}

			{
				<BmiRating bmi={bmi} />
			}

		</div>
	)
}

export default BmiCalculator;