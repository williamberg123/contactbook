import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Main from '../containers/Main';

describe('<Main />', () => {
	it('should render Main with his children', () => {
		render(
			<Main>
				<h1>titulo</h1>
				<p>paragrafo</p>
				<button type="button">botao</button>
			</Main>,
		);

		expect(screen.getByRole('heading', { name: /titulo/i })).toBeInTheDocument();
		expect(screen.getByText(/paragrafo/i)).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /botao/i })).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		render(
			<Main>
				<h1>titulo</h1>
				<p>paragrafo</p>
				<button type="button">botao</button>
			</Main>,
		);

		expect(screen.getByRole('heading', { name: /titulo/i }).parentElement).toMatchSnapshot();
	});
});
