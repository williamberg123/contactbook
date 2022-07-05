import { useContext, useRef } from 'react';
import { FcGoogle } from 'react-icons/fc';

import Main from '../../containers/Main';
import Input from '../../components/Input';
import Form from '../../containers/Form';
import LoginWithGoogle from '../../components/LoginWithGoogle';

import AppContext from '../../contexts/AppProvider/AppContext';
import StyledLoginPage, { StyledLabel, StyledSpan } from './styles';

export default function CreateAccount() {
	const { registerAccount, signInWithGoogle } = useContext(AppContext);

	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const phoneNumberRef = useRef(null);

	return (
		<StyledLoginPage>
			<Main>
				<h1>Página de cadastro</h1>
				<Form submitFunc={
						(e) => registerAccount(
							e,
							emailRef.current.value,
							passwordRef.current.value,
							phoneNumberRef.current.value,
						)
					}
				>
					<StyledSpan>Create account</StyledSpan>
					<StyledLabel>
						Email
						<Input elementRef={emailRef} type="email" placeholder="digite seu email" />
					</StyledLabel>
					<StyledLabel>
						Password
						<Input elementRef={passwordRef} type="password" placeholder="digite sua senha" />
					</StyledLabel>
					<StyledLabel>
						Phone
						<Input elementRef={phoneNumberRef} type="tel" placeholder="digite um número de telefone" />
					</StyledLabel>

					<LoginWithGoogle buttonFunc={signInWithGoogle}>
						Entrar com o Google
						<FcGoogle />
					</LoginWithGoogle>

					<Input type="submit">Entrar</Input>
				</Form>
			</Main>
		</StyledLoginPage>
	);
}
