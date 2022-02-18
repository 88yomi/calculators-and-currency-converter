import CONVERTED from "./converted";

export const urlStart = 'https://free.currconv.com/api/v7/';
export const FULL_API_KEY = 'apiKey=5bc1b768d6ae9601014c';

export const getCountries = () => {
	fetch(urlStart + 'countries?' + FULL_API_KEY)
		.then(response => response.json())
		.then(countries => console.log(countries))
}

export const getCurrencies = () => {
	fetch(urlStart + 'currencies?' + FULL_API_KEY)
		.then(response => response.json())
		.then(currencies => console.log(currencies))
}

export const convertCurrencies = async (first, second) => {
	const response = await fetch(urlStart + `convert?q=${first}_${second},${second}_${first}&compact=ultra&` + FULL_API_KEY);
	return await response.json();
	// return CONVERTED;
}

		//  TRY OFFLINE
// export const convertCurrencies = (first, second) => {
// 	return Object.values(CONVERTED)[0];
// }