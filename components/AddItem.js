import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function AddItem({ addItem }) {
	const [text, onChangeText] = useState('');

	function add() {
		addItem({ label: text });
		onChangeText('');
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				onChangeText={text => onChangeText(text)}
				value={text}
				onSubmitEditing={add}
				placeholder='Add Item...'
				placeholderTextColor='#fff'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'lightgreen',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 20,
	},
	input: {
		backgroundColor: 'lightgreen',
		fontSize: 20,
		borderColor: 'gray',
		paddingHorizontal: 10,
		width: '80%',
		height: 40,
	},
});
