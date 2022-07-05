import { useContext } from 'react';
import ContactsList from '../../components/ContactsList';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import RenderIf from '../../components/RenderIf';
import AppContext from '../../contexts/AppProvider/AppContext';
import StyledHome from './styles';

export default function Home() {
	const { user } = useContext(AppContext);

	return (
		<StyledHome>
			<Header />
			<PageTitle />

			<RenderIf isTrue={ !!user }>
				<ContactsList />
			</RenderIf>
		</StyledHome>
	);
}
