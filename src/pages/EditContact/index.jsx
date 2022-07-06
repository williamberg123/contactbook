import { useContext, useEffect, useRef } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useSearchParams } from 'react-router-dom';

import Form from '../../containers/Form';
import Input from '../../components/Input';

import StyledEditContact, { StyledLabel, StyledSpan } from './styles';
import SubmitButton from '../../components/SubmitButton';
import { db } from '../../data/Firebase';
import AppContext from '../../contexts/AppProvider/AppContext';

export default function EditContact() {
	const { editContact } = useContext(AppContext);

	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);
	const emailRef = useRef(null);
	const phoneNumberRef = useRef(null);

	const [ searcParams ] = useSearchParams();

	const getContactInfo = async () => {
		const configQuery = query(collection(db, 'contacts'), where('contactInfo.email', '==', searcParams.get('id')));

		const contactQuery = await getDocs(configQuery);
		let contact = null;

		contactQuery.forEach((doc) => {
			contact = doc.data();
		});

		const { firstName, lastName, email, phoneNumber } = contact.contactInfo;

		firstNameRef.current.value = firstName;
		lastNameRef.current.value = lastName;
		emailRef.current.value = email;
		phoneNumberRef.current.value = phoneNumber;
	};

	useEffect(() => {
		getContactInfo();
	}, []);

	return (
		<StyledEditContact>
			<h1>Página editar contato</h1>
			<Form submitFunc={(e) => editContact(e)}>
				<StyledSpan>Edit Contact</StyledSpan>
				<StyledLabel>
					Primeiro nome
					<Input type="text" elementRef={firstNameRef} placeholder="edite o primeiro nome" />
				</StyledLabel>

				<StyledLabel>
					Último nome
					<Input type="text" elementRef={lastNameRef} placeholder="edite o último nome" />
				</StyledLabel>

				<StyledLabel>
					Email do contato
					<Input type="email" elementRef={emailRef} placeholder="edite o email do contato" />
				</StyledLabel>

				<StyledLabel>
					Telefone do contato
					<Input type="text" elementRef={phoneNumberRef} placeholder="edite o telefone do contato" />
				</StyledLabel>

				<SubmitButton>Salvar alterações</SubmitButton>
			</Form>
		</StyledEditContact>
	);
}
