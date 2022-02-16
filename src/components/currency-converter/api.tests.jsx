import React, { useState, useEffect } from 'react';
import COUNTRIES from './countries';
import CURRENCIES from './currencies';

// import {
// 	getCountries,
// 	getCurrencies,
// 	convertCurrencies
// } from './requests';

const ApiTest = () => {
	let url = 'https://free.currconv.com/api/v7/countries?apiKey=5bc1b768d6ae9601014c';
	const [myList, setMyList] = useState([]);

	useEffect(() => {
		let infoResponseObj = {};
		for (let key in COUNTRIES.results) {
			infoResponseObj[COUNTRIES.results[key].currencyName] = COUNTRIES.results[key];
			delete infoResponseObj[COUNTRIES.results[key].currencyName].currencyName;
		}
		setMyList(Object.entries(infoResponseObj));
	}, [COUNTRIES])

	// item[0] + ' (' + item[1].currencyId + ')'}>{(item[0])

	return (
		<>
			<label htmlFor="">List of available currencies</label>
			<select>
				{myList.map((item, index) => {
					return <option
						key={item[1].currencyId + index}
						value={item[1].currencyId}
					>
						{(item[0] + ' (' + item[1].currencyId + ')')}
					</option>
				})}
			</select>
		</>
	)
}
export default ApiTest;