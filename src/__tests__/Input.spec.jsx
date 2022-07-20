import { useRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PropTypes from 'prop-types';
import Input from '../components/Input';

const Container = ({ inputInfo }) => {
	const elementRef = useRef();

	return (
		<div>
			<Input {...inputInfo} elementRef={elementRef} />
		</div>
	);
};

Container.propTypes = {
	inputInfo: PropTypes.shape({
		type: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
	}).isRequired,
};

describe('<Input />', () => {
	const inputInfo = {
		type: 'number',
		placeholder: 'my input element',
	};

	it('should render Input correctly', () => {
		render(<Container inputInfo={inputInfo} />);

		expect(screen.getByPlaceholderText(inputInfo.placeholder)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(inputInfo.placeholder)).toHaveAttribute('type', 'number');
	});

	it('should match snapshot', () => {
		render(<Container inputInfo={inputInfo} />);
		expect(screen.getByPlaceholderText(inputInfo.placeholder)).toMatchSnapshot();
	});
});
