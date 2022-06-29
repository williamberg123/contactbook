import { BrowserRouter } from 'react-router-dom';

import AppProvider from './contexts/AppProvider';
import AppRoutes from './routes';

export default function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</AppProvider>
	);
}
