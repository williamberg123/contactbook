import { useContext } from 'react';

import Input from '../../components/Input';
import Form from '../../containers/Form';
import SubmitButton from '../../components/SubmitButton';

import AppContext from '../../contexts/AppProvider/AppContext';

import StyledNewContact, { StyledLabel } from './styles';

export default function NewContact() {
	const { createNewContact } = useContext(AppContext);

	return (
		<StyledNewContact>
			<h1>Criar novo contato</h1>
			<Form submitFunc={createNewContact}>
				<span>Dados do novo contato</span>
				<StyledLabel>
					First name
					<Input type="text" placeholder="digite o primeiro nome do contato" />
				</StyledLabel>

				<StyledLabel>
					Last name
					<Input type="text" placeholder="digite o último nome do contato" />
				</StyledLabel>

				<StyledLabel>
					Email
					<Input type="email" placeholder="digite o email do contato" />
				</StyledLabel>

				<StyledLabel>
					Phonenumber
					<Input type="text" placeholder="digite o telefone do contato" />
				</StyledLabel>

				<SubmitButton>Criar contato</SubmitButton>
			</Form>
		</StyledNewContact>
	);
}
