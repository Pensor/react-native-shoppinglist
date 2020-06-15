import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import AddItem from './AddItem';
import ListItem from './ListItem';
import { Separator } from './ListItem';

export default function ShoppingList() {
	const [list, setList] = useState([
		{ label: 'Tomate', id: 1 },
		{ label: 'Gurke', id: 2 },
		{ label: 'Salat', id: 3 },
		{ label: 'Fisch', id: 4 },
		{ label: 'Kohl', id: 5 },
	]);

	function addItem(item) {
		let id = Math.max(...list.map(item => item.id), 0) + 1;
		const newItem = { ...item, id };
		setList([...list, newItem]);
	}

	function onSwipeFromRight(id) {
		const newList = list.filter(item => item.id !== id);
		setList(newList);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={list}
				renderItem={({ item }) => (
					<ListItem item={item} onSwipeFromRight={() => onSwipeFromRight(item.id)} />
				)}
				ItemSeparatorComponent={() => <Separator />}
			/>
			<AddItem addItem={addItem} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		justifyContent: 'space-between',
	},
});
