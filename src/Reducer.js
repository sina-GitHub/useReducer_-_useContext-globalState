const Reducer = (state, action) => {
	switch (action.type) {
		case 'inc':
			return {
				num: state.num + 1,
			};
		case 'dec':
			return {
				num: state.num - 1,
			};
		default:
			return state;
	}
};

export default Reducer;
