const BmiRating = ({ bmi }) => {
	let rating = '';
	if (bmi < 18.5) {
		rating = 'Underweight';
	}
	else if (bmi >= 18.5 && bmi <= 24.9) {
		rating = 'Normal';
	}
	else if (bmi >= 25 && bmi <= 29.9) {
		rating = 'Overweight';
	}
	else if (bmi >= 30 && bmi <= 34.9) {
		rating = 'Obese';
	}
	else if (bmi >= 35 && bmi <= 39.9) {
		rating = 'Severely obese';
	}
	else if (bmi >= 40) {
		rating = 'Morbidly obese';
	}
	else {
		rating = 'Out of range';
	}
	return rating;
}

export default BmiRating; 