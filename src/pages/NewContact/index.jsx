import Input from '../../components/Input';
import Form from '../../containers/Form';
import StyledNewContact, { StyledLabel } from './styles';

export default function NewContact() {
	return (
		<StyledNewContact>
			<Form>
				<StyledLabel>
					First name
					<Input type="text" placeholder="digite o primeiro nome do contato" />
				</StyledLabel>

				<StyledLabel>
					Last name
					<Input type="text" placeholder="digite o último nome do contato" />
				</StyledLabel>
			</Form>
		</StyledNewContact>
	);
}
