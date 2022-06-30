import { useContext } from 'react';
import Main from '../../containers/Main';
import Input from '../../components/Input';
import Form from '../../containers/Form';
import StyledLoginPage, { StyledLabel, StyledSpan } from './styles';
import AppContext from '../../contexts/AppProvider/AppContext';

export default function Login() {
	const { signIn, emailRef, passwordRef } = useContext(AppContext);

	return (
		<StyledLoginPage>
			<Main>
				<h1>Página de login</h1>
				<Form submitFunc={signIn}>
					<StyledSpan>Login</StyledSpan>
					<StyledLabel>
						Email
						<Input elementRef={emailRef} type="email" placeholder="digite seu email" />
					</StyledLabel>
					<StyledLabel>
						Password
						<Input elementRef={passwordRef} type="password" placeholder="digite sua senha" />
					</StyledLabel>

					<Input type="submit">Entrar</Input>
				</Form>
			</Main>
		</StyledLoginPage>
	);
}
