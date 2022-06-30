import { BrowserRouter } from 'react-router-dom';

import AppProvider from './contexts/AppProvider';
import AppRoutes from './routes';
import GlobalStyles from './styles/globalStyles';

export default function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
			<GlobalStyles />
		</AppProvider>
	);
}
