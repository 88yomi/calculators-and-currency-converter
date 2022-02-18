import React, { useEffect, useState, useRef } from 'react';
import './currency.converter.styles.scss';

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
let fakeCurrenciesResObj = Object.entries(CURRENCIES)[0];


const CurrencyConverter = () => {
	const [firstDropdown, setFirstDropdown] = useState('');
	const [secondDropdown, setSecondDropdown] = useState('');

	const [inputOne, setInputOne] = useState(1);
	const [inputTwo, setInputTwo] = useState(1);

	const [query, setQuery] = useState('');

	const [serverCurrency, setServerCurrency] = useState(0);

	const dropDownOne = useRef(null);
	const dropDownTwo = useRef(null);


	useEffect(() => {
		document.title = 'Currency Converter';
		// using useRef to select the default checkboxes on component load
		setFirstDropdown(dropDownOne.current.value);
		setSecondDropdown(dropDownTwo.current.value);
	}, [])

	useEffect(() => {
		setQuery(`${firstDropdown}_${secondDropdown}`);
	}, [firstDropdown, secondDropdown])

	useEffect(() => {
		const convertInputTwo = async () => {
			let conversionObject = await convertCurrencies(firstDropdown, secondDropdown);
			setServerCurrency((inputOne * conversionObject[query]).toFixed(2))
		}
		convertInputTwo();
	}, [inputOne, query])

	const handleSelectChange = e => {
		if (e.target.name === 'premiere') {
			setQuery(`${firstDropdown}_${secondDropdown}`);
			setFirstDropdown(e.target.value);
		}

		else if (e.target.name === 'deuxieme') {
			setQuery(`${secondDropdown}_${firstDropdown}`);
			setSecondDropdown(e.target.value);
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

	return (
		<div>
			<form className='currency' onSubmit={handleSubmit}>
				<label htmlFor='premiere'>
					<input
						type='number'
						name='first-number'
						onChange={handleInputChange}
						value={inputOne}
					/>
					<select
						name="premiere"
						onChange={handleSelectChange}
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
				</label>

				<label htmlFor='deuxieme'>
					<input
						type='number'
						name='second-number'
						readOnly
						value={serverCurrency}
					/>
					<select
						name="deuxieme"
						onChange={handleSelectChange}
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
				</label>
			</form>
			{serverCurrency}
		</div>
	)
};

export default CurrencyConverter;