import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Header from '../components/Header';
import AppContext from '../contexts/AppProvider/AppContext';

describe('<Header />', () => {
	it('should render span with the text "AGENDA"', () => {
		render(
			<BrowserRouter>
				<AppContext.Provider value={{ user: null }}>
						<Header />
				</AppContext.Provider>,
			</BrowserRouter>,
		);

		expect(screen.getByText(/agenda/i)).toBeInTheDocument();
	});

	it('should render signin and register links when there is no loggedin user', () => {
		expect.assertions(6);

		render(
			<BrowserRouter>
				<AppContext.Provider value={{ user: null }}>
						<Header />
				</AppContext.Provider>,
			</BrowserRouter>,
		);

		expect(screen.getByRole('link', { name: /entrar/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /cadastrar/i })).toBeInTheDocument();

		expect(screen.getByRole('link', { name: /entrar/i })).toHaveAttribute('href', '/login');
		expect(screen.getByRole('link', { name: /cadastrar/i })).toHaveAttribute('href', '/createaccount');

		expect(screen.queryByRole('link', { name: /criar contato/i })).not.toBeInTheDocument();
		expect(screen.queryByRole('img')).not.toBeInTheDocument();
	});

	it('should render criar contato link and profile image when there is a loggedin user', () => {
		expect.assertions(3);

		const context = {
			user: {
				email: 'williamberg567@gmail.com',
				photoURL: 'https://lh3.googleusercontent.com/a-/AFdZucreO7tbhF4l_S5dyGaniu68GR3ftpjaE3RYVvUVeQ=s96-c',
			},
		};

		render(
			<BrowserRouter>
				<AppContext.Provider value={context}>
						<Header />
				</AppContext.Provider>,
			</BrowserRouter>,
		);

		expect(screen.getByRole('link', { name: /criar contato/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /criar contato/i })).toHaveAttribute('href', '/newcontact');
		expect(screen.getByRole('img')).toHaveAttribute('src', context.photoURL);
	});

	it('should render hidden options when profile is hover', () => {
		const context = {
			user: {
				email: 'williamberg567@gmail.com',
				photoURL: 'https://lh3.googleusercontent.com/a-/AFdZucreO7tbhF4l_S5dyGaniu68GR3ftpjaE3RYVvUVeQ=s96-c',
			},
		};

		render(
			<BrowserRouter>
				<AppContext.Provider value={context}>
						<Header />
				</AppContext.Provider>,
			</BrowserRouter>,
		);

		const userProfile = document.querySelector('.user-profile');

		expect(userProfile).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		render(
			<BrowserRouter>
				<AppContext.Provider value={{ user: null }}>
						<Header />
				</AppContext.Provider>,
			</BrowserRouter>,
		);

		expect(screen.getByText(/agenda/i).parentElement).toMatchSnapshot();
	});
});
