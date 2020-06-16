import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export function Separator() {
	return <View style={styles.separator} />;
}

const RightAction = () => {
	return (
		<View style={styles.rightAction}>
			<Text style={styles.rightText}>Deleting...</Text>
		</View>
	);
};

export default function ListItem({ item, onSwipeFromRight }) {
	return (
		<Swipeable renderRightActions={RightAction} onSwipeableRightOpen={onSwipeFromRight}>
			<View style={styles.item}>
				<Text style={styles.text}>{item.label}</Text>
			</View>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	item: {
		padding: 15,
		backgroundColor: 'rgba(60, 60, 60, 0.3)',
	},
	separator: {
		flex: 1,
		height: 1,
		marginLeft: 5,
		marginRight: 5,
		backgroundColor: '#ededed',
	},
	rightAction: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
		padding: 20,
	},
	rightText: {
		borderRadius: 5,
		backgroundColor: 'red',
		color: '#fff',
		fontSize: 16,
		fontWeight: '700',
		padding: 5,
	},
	text: {
		textAlign: 'center',
		fontSize: 24,
		color: '#fff',
	},
});
