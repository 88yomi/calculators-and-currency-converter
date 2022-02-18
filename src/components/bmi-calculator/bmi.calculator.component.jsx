import React, { useState, useEffect } from "react";
import './bmi.styles.scss';

import BmiRating from './bmi.logic.component';
import BmiInput from "./bmi.input.component";

const BmiCalculator = () => {
	const [kilos, setKilos] = useState("");
	const [metres, setMetres] = useState("");


	useEffect(() => {
		document.title = 'BMI Calculator'
	}, [])

	const handleChange = e => {
		if (e.target.name === 'weight') {
			setKilos(e.target.value);
		}
		else if (e.target.name === 'height') {
			setMetres(e.target.value);
		}
	}

	let bmi = Number((kilos / (metres * metres)).toFixed(2));


	return (
		<div className="bmi">
			<form className="bmi__form">
				<BmiInput measure="weight" unit={kilos} handleChange={handleChange} />
				<BmiInput measure="height" unit={metres} handleChange={handleChange} />
			</form>
			<section>
				<article
				>
					{//render the number, for now
						bmi !== Infinity && !isNaN(bmi) ? bmi : ""
					}
				</article>
				<article>
					{
						<BmiRating bmi={bmi} />
					}
				</article>
			</section>
		</div>
	)
}

export default BmiCalculator;