import { Textfit } from 'react-textfit';
import './screen.styles.scss';

const Screen = ({ value }) => (
	<Textfit className="screen" mode="single" max={70}>
		{value}
	</Textfit>
);

export default Screen;