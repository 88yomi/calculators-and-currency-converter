import React, { useEffect, useState, useRef } from 'react';
import './currency.converter.styles.scss';

const date = 'latest';
const apiVersion = '1';

const urlStart = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@${apiVersion}/${date}`;

const CurrencyConverter = () => {
	const dropDownOne = useRef(null);
	const dropDownTwo = useRef(null);

	const [currencyList, setCurrencyList] = useState({})

	const [inputOne, setInputOne] = useState(0);
	const [inputTwo, setInputTwo] = useState(0);

	const [selectOne, setSelectOne] = useState('usd')
	const [selectTwo, setSelectTwo] = useState('ngn')


	// get the list of currencies obj
	useEffect(() => {
		document.title = 'Currency Converter'

		async function listCurr() {
			let response = await fetch(`${urlStart}/currencies.json`)
			let data = await response.json();
			setCurrencyList(data);
		}
		listCurr();
	}, [])

	// get the exchange rate and multiply it by the value of the 1st input field
	useEffect(() => {
		async function getCurrencyCompare() {
			fetch(`${urlStart}/currencies/${dropDownOne.current.value}/${dropDownTwo.current.value}.json`)
				.then(response => response.json())
				.then(data => {
					console.log(data[dropDownTwo.current.value])
					setInputTwo((data[dropDownTwo.current.value] * inputOne).toFixed(2))
				})
		}
		getCurrencyCompare();
	}, [inputOne, selectOne, selectTwo])


	const handleChange = e => {
		setInputOne(e.target.value);
	}

	const handleSelectChange = e => {
		if (e.target.name === 'selectOne') {
			setSelectOne(e.target.value);
		}
		else if (e.target.name === 'selectTwo') {
			setSelectTwo(e.target.value);
		}
	}
	return (
		<div>
			<form className='currency'>
				<label htmlFor="selectOne">
					<input
						name="selectOne"
						value={inputOne}
						onChange={handleChange}
						type="number"
						min='1'
					/>
					<select
						name='selectOne'
						ref={dropDownOne}
						onChange={handleSelectChange}
						value={selectOne}
					>
						{Object.entries(currencyList).map(item => {
							return <option
								key={item[0]}
								value={item[0]}>
								{item[1]}
							</option>
						})}
					</select>
				</label>

				<label htmlFor="selectTwo">
					<input
						name='selectTwo'
						type="number"
						readOnly
						value={inputTwo}
						min='1'
					/>
					<select
						name="selectTwo"
						ref={dropDownTwo}
						onChange={handleSelectChange}
						value={selectTwo}
					>
						{Object.entries(currencyList).map(item => {
							return <option
								key={item[0]}
								value={item[0]}>
								{item[1]}
							</option>
						})}
					</select>
				</label>
			</form>
		</div>
	)
}

export default CurrencyConverter;