import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PrivateRoute from '../components/PrivateRoute';

describe('<PrivateRoute />', () => {
	it('should render the children element', () => {
		render(
			<PrivateRoute isAuth>
				<h1>Rota renderizada</h1>
			</PrivateRoute>,
		);

		expect(screen.getByRole('heading', { name: /rota renderizada/i })).toBeInTheDocument();
	});

	it('should not render the children element and redirect route', () => {
		render(
			<PrivateRoute isAuth={false}>
				<h1>Rota renderizada</h1>
			</PrivateRoute>,
		);

		expect(screen.queryByRole('heading', { name: /rota renderizada/i })).not.toBeInTheDocument();
		expect(window.location.href).toBe('http://localhost:3000/');
	});

	it('should match snapshot', () => {
		render(
			<PrivateRoute isAuth>
				<h1>Rota renderizada</h1>
			</PrivateRoute>,
		);

		expect(screen.queryByRole('heading', { name: /rota renderizada/i })).toMatchSnapshot();
	});
});
