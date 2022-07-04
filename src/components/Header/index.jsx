import { useContext } from 'react';
import { Link } from 'react-router-dom';

import RenderIf from '../RenderIf';

import AppContext from '../../contexts/AppProvider/AppContext';
import StyledHeader from './styles';

export default function Header() {
	const { user, logout, deleteUser } = useContext(AppContext);

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
							{/* eslint-disable-next-line */}
							<div onClick={deleteUser} className="account-actions">excluir conta</div>
							{/* eslint-disable-next-line */}
							<div onClick={logout} className="account-actions">sair</div>
						</div>
					</div>
				</RenderIf>
			</div>
		</StyledHeader>
	);
}
