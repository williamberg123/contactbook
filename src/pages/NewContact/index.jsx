import { useContext, useRef } from 'react';

import Input from '../../components/Input';
import Form from '../../containers/Form';
import SubmitButton from '../../components/SubmitButton';

import AppContext from '../../contexts/AppProvider/AppContext';

import StyledNewContact, { StyledLabel } from './styles';

export default function NewContact() {
	const { createNewContact } = useContext(AppContext);

	const contactFirstNameRef = useRef(null);
	const contactLastNameRef = useRef(null);
	const contactEmailRef = useRef(null);
	const contactPhoneNumberRef = useRef(null);

	return (
		<StyledNewContact>
			<h1>Criar novo contato</h1>
			<Form submitFunc={
					(e) => createNewContact(
						e,
						contactFirstNameRef.current.value,
						contactLastNameRef.current.value,
						contactEmailRef.current.value,
						contactPhoneNumberRef.current.value,
					)
				}
			>
				<span>Dados do novo contato</span>
				<StyledLabel>
					First name
					<Input elementRef={contactFirstNameRef} type="text" placeholder="digite o primeiro nome do contato" />
				</StyledLabel>

				<StyledLabel>
					Last name
					<Input elementRef={contactLastNameRef} type="text" placeholder="digite o último nome do contato" />
				</StyledLabel>

				<StyledLabel>
					Email
					<Input elementRef={contactEmailRef} type="email" placeholder="digite o email do contato" />
				</StyledLabel>

				<StyledLabel>
					Phonenumber
					<Input elementRef={contactPhoneNumberRef} type="text" placeholder="digite o telefone do contato" />
				</StyledLabel>

				<SubmitButton>Criar contato</SubmitButton>
			</Form>
		</StyledNewContact>
	);
}
