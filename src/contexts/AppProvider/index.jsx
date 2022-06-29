import PropTypes from 'prop-types';
import { useCallback, useMemo, useReducer } from 'react';

import AppContext from './AppContext';
import reducer from './reducer';
import buildActions from './buildActions';

export default function AppProvider({ children }) {
	const [ user, userDispatch ] = useReducer(reducer, null);
	const userActions = useCallback(buildActions(userDispatch), []);

	const memoizedContext = useMemo(() => ({
		user, userActions,
	}), [user]);

	return (
		<AppContext.Provider value={memoizedContext}>
			{children}
		</AppContext.Provider>
	);
}

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
