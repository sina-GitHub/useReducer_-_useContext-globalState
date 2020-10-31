import {useContext} from 'react';
import Store, {Context} from './ContextAPI';

export default function App() {
	return (
		<>
			<Store>
				<Temp />
			</Store>
		</>
	);
}

function Temp() {
	const [state, dispatch] = useContext(Context);

	return (
		<>
			<div>Count: {state.num}</div>

			<button onClick={() => dispatch({type: 'inc'})}>plus</button>
			<button onClick={() => dispatch({type: 'dec'})}>minus</button>
		</>
	);
}
