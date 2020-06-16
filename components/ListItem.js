import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export function Separator() {
	return <View style={styles.separator} />;
}

const RightAction = () => {
	return (
		<View style={styles.rightAction}>
			<Text style={styles.rightText}>Delete</Text>
		</View>
	);
};

export default function ListItem({ item, onSwipeFromRight }) {
	return (
		<Swipeable renderRightActions={RightAction} onSwipeableRightOpen={onSwipeFromRight} o>
			<View style={styles.item}>
				<Text style={styles.text}>{item.label}</Text>
			</View>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: 'whitesmoke',
		padding: 15,
	},
	separator: {
		flex: 1,
		height: 1,
		marginLeft: 5,
		marginRight: 5,
		backgroundColor: '#e4e4e4',
	},
	rightAction: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'red',
		alignItems: 'flex-end',
	},
	rightText: {
		color: '#fff',
		fontWeight: '600',
		padding: 20,
	},
	text: {
		textAlign: 'center',
		fontSize: 24,
		color: '#000',
	},
});
