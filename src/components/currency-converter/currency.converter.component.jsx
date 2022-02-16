import React, { useEffect, useState, useRef } from 'react';
import ApiTest from './api.tests';

import COUNTRIES from './countries';
import CURRENCIES from './currencies';
import CONVERTED from './converted';

import {
	FULL_API_KEY,
	urlStart,
	getCountries,
	getCurrencies,
	convertCurrencies
} from './api.requests';


let fakeCountriesResObj = Object.entries(COUNTRIES)[0][1];
// let fakeCurrenciesResObj = Object.entries(CURRENCIES)[0][1];
let fakeCurrenciesResObj = Object.entries(CURRENCIES)[0];

// console.log({ fakeCountriesResObj, fakeCurrenciesResObj })

const CurrencyConverter = () => {

	const [first, setFirst] = useState('');
	const [second, setSecond] = useState('');

	const [inputOne, setInputOne] = useState(0);
	const [inputTwo, setInputTwo] = useState(0);

	const [serverCurrency, setServerCurrency] = useState(1);

	const dropDownOne = useRef(null);
	const dropDownTwo = useRef(null);

	useEffect(() => {
		document.title = 'Currency Converter';
		// using useRef to select the default checkboxes on component load
		setFirst(dropDownOne.current.value);
		setSecond(dropDownTwo.current.value);
	}, [])

	useEffect(() => {
		async function convertAndMultiply() {
			let bareConversion = await convertCurrencies(first, second);
			let multiplied = await bareConversion;
			setServerCurrency((multiplied * inputOne).toFixed(2));
		}
		convertAndMultiply();
	}, [inputOne, first, second])

	let query = `${first}_${second}`;
	// console.log('query: ' + query)

	const handleChange = e => {
		if (e.target.name === 'premiere') {
			setFirst(e.target.value);
		}

		else if (e.target.name === 'deuxieme') {
			setSecond(e.target.value);
		}
	}

	const handleInputChange = e => {
		if (e.target.name === 'first-number') {
			setInputOne(e.target.value);
		}
		if (e.target.name === 'second-number') {
			setInputTwo(e.target.value);
		}
	}

	const handleSubmit = e => {
		e.preventDefault();
	}

	// console.log(convertCurrencies(first, second, inputOne))

	return (
		<div>
			{<ApiTest />}
			<form className='currency' onSubmit={handleSubmit}>

				<label htmlFor='premiere'>
					<select
						name="premiere"
						onChange={handleChange}
						defaultValue="USD"
						ref={dropDownOne}
					>
						{Object.keys(fakeCurrenciesResObj[1]).map(item => {
							return (
								<option
									key={item}
									value={item}
								>
									{fakeCurrenciesResObj[1][item].currencyName}
								</option>
							)
						})
						}
					</select>
					<hr />
					<input
						type='number'
						name='first-number'
						onChange={handleInputChange}
						value={inputOne}
					/>
					<hr />
				</label>

				<label htmlFor='deuxieme'>
					<select
						name="deuxieme"
						onChange={handleChange}
						defaultValue="NGN"
						ref={dropDownTwo}
					>
						{Object.keys(fakeCurrenciesResObj[1]).map(item => {
							return (
								<option
									key={item}
									value={item}
								>
									{fakeCurrenciesResObj[1][item].currencyName}
								</option>
							)
						})
						}
					</select>
					<hr />
					<input
						type='number'
						name='second-number'
						onChange={handleInputChange}
						value={inputTwo}
					/>
				</label>

				<hr />
				<button type="submit">
					Convert
				</button>
				<button>
					Switch currencies
				</button>
			</form>
			{serverCurrency}
		</div>
	)
};

export default CurrencyConverter;