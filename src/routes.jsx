import { Routes, Route } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';

import Home from './pages/Home';
import Login from './pages/Login';

export default function AppRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={ <Home /> }
				index
			/>

			<Route
				path="/login"
				element={ <Login /> }
			/>

			<Route
				path="/createaccount"
				element={ <CreateAccount /> }
			/>
		</Routes>
	);
}
