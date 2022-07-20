import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RenderIf from '../components/RenderIf';

describe('<RenderIf />', () => {
	it('should render element when prop isTrue is true', () => {
		render(
		<RenderIf isTrue={5 > 3}>
			<p>Fui renderizado</p>
		</RenderIf>,
		);

		expect(screen.getByText(/fui renderizado/i)).toBeInTheDocument();
	});

	it('should not render element when prop isTrue is false', () => {
		render(
		<RenderIf isTrue={5 < 3}>
			<p>Fui renderizado</p>
		</RenderIf>,
		);

		expect(screen.queryByText(/fui renderizado/i)).not.toBeInTheDocument();
	});

	it('should match snapshot', () => {
		render(
		<RenderIf isTrue>
			<p>Fui renderizado</p>
		</RenderIf>,
		);

		expect(screen.queryByText(/fui renderizado/i)).toMatchSnapshot();
	});
});
