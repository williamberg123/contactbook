import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import IsAuth from './components/IsAuth';
import Home from './pages/Home';
import Login from './pages/Login';

import AppContext from './contexts/AppProvider/AppContext';

export default function AppRoutes() {
	const { user } = useContext(AppContext);

	return (
		<Routes>
			<Route
				path="/login-firebase/"
				element={ <IsAuth isAuth={ !!user }> <Home /> </IsAuth> }
			/>

			<Route
				path="/login-firebase/login/"
				element={ <Login /> }
			/>
		</Routes>
	);
}
