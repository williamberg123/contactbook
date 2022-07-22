import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListItem from '../components/ListItem';
import AppContext from '../contexts/AppProvider/AppContext';

const context = {
	user: {
		uid: 'oifrtjrr3298rdh34f45',
	},
	deleteContact: vi.fn(),
};

const AppProvider = ({ children }) => {
	return (
		<AppContext.Provider value={context}>{children}</AppContext.Provider>
	);
};

AppProvider.propTypes = {
	children: PropTypes.node,
};

describe('<ListItem />', () => {
	const contactInfo = {
		firstName: 'Edivar',
		lastName: 'Diogo',
		email: 'edivardiogo@gmail.com',
		phoneNumber: '8899999-9999',
		docRef: '8h4f89ug54u56y32r32f43',
	};

	it('should render correctly ListItem', () => {
		expect.assertions(6);
		render(
			<BrowserRouter>
				<AppProvider>
					<ListItem {...contactInfo} />
				</AppProvider>
			</BrowserRouter>,
		);

		expect(screen.getByText(contactInfo.firstName)).toBeInTheDocument();
		expect(screen.getByText(contactInfo.lastName)).toBeInTheDocument();
		expect(screen.getByText(/edivardiogo@gmail.com/i)).toBeInTheDocument();
		expect(screen.getByText(/8899999-9999/i)).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /editar/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /excluir/i })).toBeInTheDocument();
	});

	it('should render links with the correct value to href attribute', () => {
		render(
			<BrowserRouter>
				<AppProvider>
					<ListItem {...contactInfo} />
				</AppProvider>
			</BrowserRouter>,
		);

		expect(screen.getByRole('link', { name: /editar/i })).toHaveAttribute('href', `/editcontact?id=${contactInfo.docRef}`);
		expect(screen.getByRole('link', { name: /excluir/i })).toHaveAttribute('href', '/deletecontact');
	});

	it('should call function when Link is clicked', () => {
		render(
			<BrowserRouter>
				<AppProvider>
					<ListItem {...contactInfo} />
				</AppProvider>
			</BrowserRouter>,
		);

		fireEvent.click(screen.getByRole('link', { name: /excluir/i }));

		expect(context.deleteContact).toBeCalled();
	});

	it('should match snapshot', () => {
		render(
			<BrowserRouter>
				<AppProvider>
					<ListItem {...contactInfo} />
				</AppProvider>
			</BrowserRouter>,
		);

		expect(screen.getByRole('link', { name: /editar/i }).parentElement).toMatchSnapshot();
	});
});
