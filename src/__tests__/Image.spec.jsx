import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Image from '../components/Image';

describe('<Image />', () => {
	it('should render Image with the correctly source', () => {
		expect.assertions(2);
		const imageSource = 'img/img.png';

		render(<Image source={imageSource} />);
		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByRole('img')).toHaveAttribute('src', imageSource);
	});

	it('should match snapshot', () => {
		const imageSource = 'img/img.png';

		render(<Image source={imageSource} />);
		expect(screen.getByRole('img')).toMatchSnapshot();
	});
});
