import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import ShoppingList from './components/ShoppingList';

export default function App() {
	return (
		<View style={styles.container}>
			<ImageBackground style={styles.image} source={require('./assets/shopping-bag.jpg')}>
				<Text style={styles.heading}>Einkaufsliste</Text>
				<ShoppingList />
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: '100vh',
	},
	heading: {
		textAlign: 'center',
		fontSize: 32,
		color: '#efe',
		marginVertical: 25,
	},
	image: {
		height: '100%',
	},
});
