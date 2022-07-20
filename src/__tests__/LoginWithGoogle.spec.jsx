import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import LoginWithGoogle from '../components/LoginWithGoogle';

describe('<LoginWithGoogle />', () => {
	it('should render LoginWithGoogle button correctly', () => {
		render(<LoginWithGoogle>Entrar com o google</LoginWithGoogle>);
		expect(screen.getByRole('button', { name: /entrar com o google/i })).toBeInTheDocument();
	});

	it('should call function when button is clicked', () => {
		const fn = vi.fn();
		render(<LoginWithGoogle buttonFunc={fn}>Entrar com o google</LoginWithGoogle>);

		fireEvent.click(screen.getByRole('button', { name: /entrar com o google/i }));
		expect(fn).toBeCalled();
	});

	it('should match snapshot', () => {
		const fn = vi.fn();
		render(<LoginWithGoogle buttonFunc={fn}>Entrar com o google</LoginWithGoogle>);

		expect(screen.getByRole('button', { name: /entrar com o google/i })).toMatchSnapshot();
	});
});
