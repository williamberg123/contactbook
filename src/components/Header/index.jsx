import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../contexts/AppProvider/AppContext';
import RenderIf from '../RenderIf';
import StyledHeader from './styles';

export default function Header() {
	const { user } = useContext(AppContext);

	return (
		<StyledHeader>
			<span>AGENDA</span>
			<div className="links-div">
				<RenderIf isTrue={ !user }>
						<Link to="/login">Entrar</Link>
						<Link to="/createaccount">Cadastrar</Link>
				</RenderIf>
				<RenderIf isTrue={ !!user }>
					<Link to="/newcontact">Criar contato</Link>
					{/* <Link to="/logout">Sair</Link> */}
					<div className="user-profile">
						<div className="user-first-letter">{user?.email[0].toUpperCase()}</div>
						<div className="hidden-menu">
							<div className="triangle" />
							<div className="account-actions">excluir conta</div>
							<div className="account-actions">sair</div>
						</div>
					</div>
				</RenderIf>
			</div>
		</StyledHeader>
	);
}
