import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';

import Main from '../../containers/Main';
import Form from '../../containers/Form';
import LoginWithGoogle from '../../components/LoginWithGoogle';

import AppContext from '../../contexts/AppProvider/AppContext';
import StyledLoginPage, { StyledLabel, StyledSpan } from './styles';

export default function CreateAccount() {
	const { signInWithGoogle } = useContext(AppContext);

	return (
		<StyledLoginPage>
			<Main>
				<h1>Página de cadastro</h1>
				<Form>
					<StyledSpan>Create account</StyledSpan>
					<StyledLabel>
						Conecte-se a aplicação usando sua conta Google
					</StyledLabel>
					<StyledLabel>
						Rápido e prático, com um clique você já começa a usar o App
					</StyledLabel>

					<LoginWithGoogle buttonFunc={signInWithGoogle}>
						Cadastrar com o Google
						<FcGoogle />
					</LoginWithGoogle>
				</Form>
			</Main>
		</StyledLoginPage>
	);
}
