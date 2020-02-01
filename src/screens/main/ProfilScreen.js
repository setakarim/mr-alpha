import React, { PureComponent } from 'react';
import {
	SafeAreaView,
	View,
	StyleSheet,
	TouchableNativeFeedback,
} from 'react-native';
import { Appbar, List, RippleEffect, Divider, Avatar } from '@app/components';
import Colors from '@app/assets/colors';
import Styles from '@app/assets/styles';
import { NavigationServices } from '@app/services';

const navigateToSettings = name => NavigationServices.navigate(name);
const navigateToEditProfile = () => NavigationServices.navigate('EditProfile');

type Props = {};

const Menu = [
	{
		id: '1',
		title: 'Edit Profil',
		icon: 'gear',
		nav: 'EditProfile',
	},
	{
		id: '2',
		title: 'Ganti Password',
		icon: 'lock',
		nav: 'ChangePass',
	},
	{
		id: '3',
		title: 'Menjadi Koordinator',
		icon: 'group',
		nav: 'BeCoordinator',
	},
	{ id: '4', title: 'Tentang Aplikasi', icon: 'book', nav: 'AboutApp' },
];
class ProfilScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			profile: [
				{ id: '1', title: 'Nama', value: 'Budi' },
				{ id: '2', title: 'Nomor Telepon', value: '082152368795' },
			],
		};
	}

	componentDidMount() {}

	render() {
		const { profile } = this.state;
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<Appbar.Header style={{ backgroundColor: Colors.white }}>
					<Appbar.Content title="Profil" color={Colors.black4A} />
				</Appbar.Header>
				<View style={{ flexDirection: 'column', padding: 24 }}>
					<Avatar.Text
						size={80}
						label="XD"
						style={[Styles.shadowOn, { alignSelf: 'center' }]}
					/>
					{profile.map(item => (
						<List.Item
							key={item.id}
							title={item.title}
							description={item.value}
							titleStyle={Styles.font}
							descriptionStyle={InnerStyles.font}
							style={{ padding: 0 }}
						/>
					))}
					<Divider style={{ marginTop: 16, marginBottom: 24 }} />
					{Menu.map(item => (
						<RippleEffect
							onPress={() => navigateToSettings(item.nav)}
							key={item.id}
						>
							<List.Item
								title={item.title}
								titleStyle={Styles.font}
								left={props => <List.Icon {...props} icon={item.icon} />}
								style={{ padding: 0 }}
							/>
						</RippleEffect>
					))}

					<RippleEffect onPress={() => console.log('uwuw')}>
						<List.Item
							title={'Log Out'}
							titleStyle={Styles.font}
							left={props => <List.Icon {...props} icon={'power-off'} />}
							style={{ padding: 0 }}
						/>
					</RippleEffect>
				</View>
			</SafeAreaView>
		);
	}
}

export default ProfilScreen;

const InnerStyles = StyleSheet.create({
	font: {
		fontWeight: 'bold',
		fontSize: 14,
		lineHeight: 16,
		marginVertical: 4,
		color: Colors.black4A,
	},
});
