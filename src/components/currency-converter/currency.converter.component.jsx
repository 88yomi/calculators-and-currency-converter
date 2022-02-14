import React, { useEffect } from 'react';
import ApiTest from './api.test';

const CurrencyConverter = () => {
	useEffect(() => {
		document.title = 'Currency Converter'
	}, [])

	// API CALLS
	const API_KEY = '5bc1b768d6ae9601014c';
	const countryorcurrency = '';
	const url = 'https://free.currconv.com/api/v7/' + countryorcurrency + 'apiKey=' + API_KEY;


	return (
		<div>
			<form className='currency'>
				<label htmlFor='up-currency'>
					{/*currency 1 */}
					<input type='text' name='up-currency' />
				</label>
				
				<label htmlFor='down-currency'>
					{/*currency 2 
				*/}
					<input type='text' name='down-currency' />
				</label>
				<hr />
				<button>
					Convert
				</button>
				<button>
					Switch currencies
				</button>
			</form>
			{<ApiTest />
				}
		</div>
	)
};

export default CurrencyConverter;