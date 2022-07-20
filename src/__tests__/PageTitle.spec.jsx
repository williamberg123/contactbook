import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PageTitle from '../components/PageTitle';

describe('<PageTitle />', () => {
	it('should render PageTitle correctly', () => {
		render(<PageTitle />);

		expect(screen.getByRole('heading', { name: /agenda/i })).toBeInTheDocument();
		expect(screen.getByText(/seus contatos estão logo abaixo/i)).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		render(<PageTitle />);

		expect(screen.getByRole('heading', { name: /agenda/i }).parentElement).toMatchSnapshot();
	});
});
