import { useContext, useRef } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

import Main from '../../containers/Main';
import Form from '../../containers/Form';
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
						Acesse sua conta clicando no botão logo abaixo
					</StyledLabel>
					<StyledLabel>
						Caso não tenha uma conta, crie uma acessando este link
					</StyledLabel>

					<Link to="/createaccount">não tem uma conta? Crie uma clicando aqui</Link>

					<LoginWithGoogle buttonFunc={signInWithGoogle}>
						Entrar com o Google
						<FcGoogle />
					</LoginWithGoogle>
				</Form>
			</Main>
		</StyledLoginPage>
	);
}
