import { useContext } from 'react';
import Main from '../../containers/Main';
import Input from '../../components/Input';
import Form from '../../containers/Form';
import StyledLoginPage, { StyledLabel, StyledSpan } from './styles';
import AppContext from '../../contexts/AppProvider/AppContext';

export default function CreateAccount() {
	const { createAccount } = useContext(AppContext);

	return (
		<StyledLoginPage>
			<Main>
				<h1>Página de cadastro</h1>
				<Form submitFunc={createAccount}>
					<StyledSpan>Create account</StyledSpan>
					<StyledLabel>
						Email
						<Input type="email" placeholder="digite seu email" />
					</StyledLabel>
					<StyledLabel>
						Password
						<Input type="password" placeholder="digite sua senha" />
					</StyledLabel>

					<Input type="submit">Entrar</Input>
				</Form>
			</Main>
		</StyledLoginPage>
	);
}
