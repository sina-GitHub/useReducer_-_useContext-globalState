import {createContext, useReducer} from 'react';
import Reducer from './Reducer';

const initialState = {
	num: 0,
};

const Store = (props) => {
	const [state, dispatch] = useReducer(Reducer, initialState);
	return (
		<Context.Provider value={[state, dispatch]}>
			{props.children}
		</Context.Provider>
	);
};

export const Context = createContext(initialState);
export default Store;
