import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Form from '../containers/Form';
import Input from '../components/Input';

describe('<Form />', () => {
	it('should render Form children correctly', () => {
		render(
			<Form>
				<Input type="text" placeholder="text" />
				<Input type="number" placeholder="number" />
				<Input type="email" placeholder="email" />
			</Form>,
		);

		expect(screen.getByPlaceholderText('text')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('number')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
	});

	it('should call submit function when form is submited', () => {
		const fn = vi.fn();

		render(
			<Form submitFunc={fn}>
				<Input type="text" placeholder="text" />
			</Form>,
		);

		fireEvent.submit(screen.getByPlaceholderText('text').parentElement);

		expect(fn).toBeCalled();
	});

	it('should match snapshot', () => {
		render(
			<Form>
				<Input type="text" placeholder="text" />
				<Input type="number" placeholder="number" />
				<Input type="email" placeholder="email" />
			</Form>,
		);

		expect(screen.getByPlaceholderText('text').parentElement).toMatchSnapshot();
	});
});
