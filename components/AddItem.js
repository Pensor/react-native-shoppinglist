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
		backgroundColor: '#ffe',
		borderColor: 'gray',
		borderRadius: 5,
		borderWidth: 1,
		paddingHorizontal: 10,
		width: '90%',
	},
});
