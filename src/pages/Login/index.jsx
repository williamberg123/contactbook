import { useContext, useRef } from 'react';
import { FcGoogle } from 'react-icons/fc';

import Main from '../../containers/Main';
import Input from '../../components/Input';
import Form from '../../containers/Form';
import SubmitButton from '../../components/SubmitButton';
import LoginWithGoogle from '../../components/LoginWithGoogle';

import AppContext from '../../contexts/AppProvider/AppContext';
import StyledLoginPage, { StyledLabel, StyledSpan } from './styles';

export default function Login() {
	const { signInWithEmailAndPassword, signInWithGoogle } = useContext(AppContext);

	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	return (
		<StyledLoginPage>
			<Main>
				<h1>Página de login</h1>
				<Form submitFunc={(e) => signInWithEmailAndPassword(e, emailRef.current.value, passwordRef.current.value)}>
					<StyledSpan>Login</StyledSpan>
					<StyledLabel>
						Email
						<Input elementRef={emailRef} type="email" placeholder="digite seu email" />
					</StyledLabel>
					<StyledLabel>
						Password
						<Input elementRef={passwordRef} type="password" placeholder="digite sua senha" />
					</StyledLabel>

					<LoginWithGoogle buttonFunc={signInWithGoogle}>
						Entrar com o Google
						<FcGoogle />
					</LoginWithGoogle>

					<SubmitButton>Entrar</SubmitButton>
				</Form>
			</Main>
		</StyledLoginPage>
	);
}
