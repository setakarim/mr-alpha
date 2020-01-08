import React from 'react';
import { Appbar } from 'react-native-paper';
import { TabView, TabBar } from 'react-native-tab-view';
import Colors from '@app/assets/colors';
import { Metrics } from '@app/themes';

const renderTabBar = props => (
	<TabBar
		{...props}
		activeColor={Colors.primaryColor}
		inactiveColor={Colors.black4A}
		indicatorStyle={{ backgroundColor: Colors.primaryColor }}
		style={{ backgroundColor: Colors.white }}
	/>
);

const LayoutAppbarTab = ({
	title,
	icon,
	index,
	routes,
	renderScene,
	onIndexChange,
}) => (
	<>
		<Appbar.Header style={{ backgroundColor: Colors.white, elevation: 0 }}>
			<Appbar.Content title={title} color={Colors.black4A} />
			{icon !== null && <Appbar.Action icon={icon} />}
		</Appbar.Header>
		<TabView
			renderTabBar={renderTabBar}
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={onIndexChange}
			initialLayout={Metrics.DEVICE_WIDTH}
		/>
	</>
);
export default LayoutAppbarTab;
