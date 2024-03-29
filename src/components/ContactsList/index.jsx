import { useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Loader from 'react-js-loader';
import { RiContactsFill } from 'react-icons/ri';

import RenderIf from '../RenderIf';
import ListItem from '../ListItem';

import { db } from '../../data/Firebase';
import AppContext from '../../contexts/AppProvider/AppContext';

import StyledContactsList from './styles';

export default function ContactsList() {
	const [ contacts, setContacts ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(true);

	const { user } = useContext(AppContext);

	const getUserContacts = async () => {
		const collectionRef = collection(db, 'users', user.uid, 'userContacts');

		const userContacts = await getDocs(collectionRef);

		const contactsList = [];

		userContacts.forEach((doc) => {
			const contactInfo = doc.data();
			contactsList.push({
				docRef: doc.id,
				...contactInfo,
			});
		});

		setContacts(contactsList);
		setIsLoading(false);
	};

	useEffect(() => {
		getUserContacts();
	}, []);

	return (
		<StyledContactsList>
			<RenderIf isTrue={ isLoading }>
				<Loader type="spinner-default" bgColor="#000000" size={50} />
			</RenderIf>

			<RenderIf isTrue={ !!contacts?.length && !isLoading }>
				{
					contacts?.map((contact, index) => <ListItem key={`contact-${index}`} {...contact} />)
				}
			</RenderIf>

			<RenderIf isTrue={ !contacts?.length && !isLoading }>
				<RiContactsFill />
				<span>Sem contatos</span>
			</RenderIf>
		</StyledContactsList>
	);
}
