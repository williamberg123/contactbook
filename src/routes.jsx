import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AppContext from './contexts/AppProvider/AppContext';
import CreateAccount from './pages/CreateAccount';

import Home from './pages/Home';
import Login from './pages/Login';
import NewContact from './pages/NewContact';

export default function AppRoutes() {
	const { user } = useContext(AppContext);

	return (
		<Routes>
			<Route
				path="/"
				element={ <Home /> }
				index
			/>

			<Route
				path="/login"
				element={(
					<PrivateRoute isAuth={ !user }>
						<Login />
					</PrivateRoute>
				)}

			/>

			<Route
				path="/createaccount"
				element={ <CreateAccount /> }
			/>

			<Route
				path="/newcontact"
				element={(
					<PrivateRoute isAuth={ !!user }>
						<NewContact />
					</PrivateRoute>
				)}
			/>
		</Routes>
	);
}
