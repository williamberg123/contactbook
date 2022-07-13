import { useContext, useEffect, useRef, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useSearchParams } from 'react-router-dom';

import Form from '../../containers/Form';
import Input from '../../components/Input';
import Main from '../../containers/Main';

import AppContext from '../../contexts/AppProvider/AppContext';
import SubmitButton from '../../components/SubmitButton';
import { db } from '../../data/Firebase';

import StyledEditContact, { StyledLabel, StyledSpan } from './styles';

export default function EditContact() {
	const [ isDisabled, setIsDisabled ] = useState(true);
	const { editContact, user } = useContext(AppContext);

	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);
	const emailRef = useRef(null);
	const phoneNumberRef = useRef(null);

	const [ searcParams ] = useSearchParams();

	const getContactInfo = async () => {
		const documentRef = doc(db, 'users', user.uid, 'userContacts', searcParams.get('id'));

		const contactQuery = await getDoc(documentRef);
		const contactData = contactQuery.data();

		const { firstName, lastName, email, phoneNumber } = contactData;

		firstNameRef.current.value = firstName;
		lastNameRef.current.value = lastName;
		emailRef.current.value = email;
		phoneNumberRef.current.value = phoneNumber;

		setIsDisabled(false);
	};

	useEffect(() => {
		getContactInfo();
	}, []);

	return (
		<StyledEditContact>
			<h1>Página editar contato</h1>
			<Main>
				<Form submitFunc={
					(e) => editContact(e, {
						firstName: firstNameRef.current.value,
						lastName: lastNameRef.current.value,
						email: emailRef.current.value,
						phoneNumber: phoneNumberRef.current.value,
					}, user.uid, searcParams.get('id'))
				}
				>
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

					<SubmitButton disabled={isDisabled}>Salvar alterações</SubmitButton>
				</Form>
			</Main>
		</StyledEditContact>
	);
}
