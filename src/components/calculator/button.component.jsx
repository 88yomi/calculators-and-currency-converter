import "./button.styles.scss";

const Button = ({ className, value, onClick }) => {
	return (
	<button className={`${className} calculator`} onClick={onClick}>
			{value}
		</button>
	);
};

export default Button;