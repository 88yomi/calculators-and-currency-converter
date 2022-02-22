import React from 'react';

const BmiInput = ({ measure, unit, handleChange }) => {
	return (
		<label className="bmi__form-label" htmlFor={measure}>
			{measure === 'weight'
				? `${measure} (in kg)`
				: `${measure} (in metres)`
			}
			<input
				className="bmi__form-input"
				type="number"
				name={measure}
				value={unit}
				min="1"
				max={measure === 'height' ? 10 : ''}
				onChange={handleChange}
				step='0.01'
			/>
		</label>
	)
}

export default BmiInput;