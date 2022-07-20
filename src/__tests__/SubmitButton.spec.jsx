import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SubmitButton from '../components/SubmitButton';

describe('<SubmitButton />', () => {
	it('should render SubmitButton with the text correctly', () => {
		render(<SubmitButton>Este é o botão de submit</SubmitButton>);
		expect(screen.getByRole('button', { name: /este é o botão de submit/i })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /este é o botão de submit/i })).toHaveAttribute('type', 'submit');
	});

	it('should render SubmitButton with the text correctly', () => {
		render(<SubmitButton>Este é o botão de submit</SubmitButton>);
		expect(screen.getByRole('button', { name: /este é o botão de submit/i })).toMatchSnapshot();
	});
});
