import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShoppingList from './components/ShoppingList';

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Einkaufsliste</Text>
			<ShoppingList />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
	heading: {
		textAlign: 'center',
		backgroundColor: 'lightgreen',
		fontSize: 32,
		padding: 20,
		color: '#efe',
	},
});
