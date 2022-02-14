import React, { useEffect } from 'react';

const ApiTest = () => {
	let url = 'https://free.currconv.com/api/v7/countries?apiKey=5bc1b768d6ae9601014c';
	let myRes = {};

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				let individual = {};
				for (let key in data.results) {
					individual[data.results[key].currencyName] = data.results[key];
					delete individual[data.results[key].currencyName].currencyName;
				}
				console.log(individual);
				myRes = individual;
			})
	}, [])

	// return myRes;
	return null;
}
export default ApiTest;