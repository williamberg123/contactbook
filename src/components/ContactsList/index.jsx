import { useContext, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

import Loader from 'react-js-loader';
import RenderIf from '../RenderIf';
import AppContext from '../../contexts/AppProvider/AppContext';

import StyledContactsList from './styles';
import { db } from '../../data/Firebase';
import ListItem from '../ListItem';

export default function ContactsList() {
	const [ contacts, setContacts ] = useState(null);

	const { user } = useContext(AppContext);

	const getUserContacts = async () => {
		const contactsCollectionRef = collection(db, 'contacts');

		const queryObject = query(contactsCollectionRef, where('uid', '==', user.uid));
		const userContacts = await getDocs(queryObject);

		const contactsList = [];

		userContacts.forEach((doc) => contactsList.push(doc.data()));

		setContacts(contactsList);
	};

	useEffect(() => {
		getUserContacts();
	}, []);

	return (
		<StyledContactsList>
			<RenderIf isTrue={ !contacts }>
				<Loader type="spinner-default" bgColor="#000000" size={70} />
			</RenderIf>

			<RenderIf isTrue={ !!contacts }>
				{
					contacts?.map((contact, index) => <ListItem key={`contact-${index}`} {...contact} />)
				}
			</RenderIf>
		</StyledContactsList>
	);
}
