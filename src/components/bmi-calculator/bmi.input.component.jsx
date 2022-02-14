import React from 'react';

const BmiInput = ({ measure, unit, handleChange }) => {
	return (
		<label className="bmi__form-label" htmlFor={measure}>
			{measure}
			<input
				className="bmi__form-input"
				type="number"
				name={measure}
				value={unit}
				onChange={handleChange} />
		</label>
	)
}

export default BmiInput;