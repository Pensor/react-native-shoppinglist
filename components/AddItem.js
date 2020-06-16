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
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 20,
	},
	input: {
		fontSize: 20,
		color: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'whitesmoke',
		paddingHorizontal: 10,
		width: '80%',
		height: 50,
	},
});
