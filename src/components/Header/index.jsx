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
					<Link to="/profile" className="user-profile">{user?.userEmail[0].toUpperCase()}</Link>
				</RenderIf>
			</div>
		</StyledHeader>
	);
}
