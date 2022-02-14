const unitConverter = (props) => {
	if (props.unit === 'cm') {
		return props.unit / 100
	}
	else {
		return props.unit
	}
}