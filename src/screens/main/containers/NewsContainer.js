import React, { useState, useEffect } from 'react';
import { Text, Button, CardNews } from '@app/components';
import { View } from 'react-native';
import Styles from '@app/assets/styles';
import Colors from '@app/assets/colors';
import { NavigationServices } from '@app/services';

const Data = [
	{
		id: '1',
		author: 'Budi',
		date: '2019-10-1 10:20:00',
		title: 'Judul Berita 1',
		description: 'Ini Deskripsi Berita 1',
	},
	{
		id: '2',
		author: 'Budi',
		date: '2019-10-1 10:20:00',
		title: 'Judul Berita 2',
		description: 'Ini Deskripsi Berita 2',
	},
	{
		id: '3',
		author: 'Budi',
		date: '2019-10-1 10:20:00',
		title: 'Judul Berita 3',
		description: 'Ini Deskripsi Berita 3',
	},
	{
		id: '4',
		author: 'Budi',
		date: '2019-10-1 10:20:00',
		title: 'Judul Berita 4',
		description: 'Ini Deskripsi Berita 4',
	},
];

const NewsContainer = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(Data);
	}, []);

	return (
		<View
			style={{
				flexDirection: 'column',
				marginHorizontal: 16,
				marginVertical: 16,
			}}
		>
			<Text style={{ fontWeight: 'bold', marginBottom: 16 }}>
				Berita Terbaru
			</Text>
			{data.map(item => (
				<CardNews
					key={item.id}
					title={item.title}
					description={item.description}
					link={item.link}
					data={item}
				/>
			))}
			<Button
				onPress={() => NavigationServices.navigate('News')}
				uppercase={false}
				labelStyle={[Styles.font, { color: Colors.primaryColor }]}
			>
				Lihat Berita Lainnya
			</Button>
		</View>
	);
};

export default NewsContainer;
