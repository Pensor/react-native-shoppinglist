import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, FlatList, AsyncStorage } from 'react-native';

import AddItem from './AddItem';
import ListItem from './ListItem';
import { Separator } from './ListItem';

export default function ShoppingList() {
	const [list, setList] = useState([]);

	async function storeData(data) {
		try {
			setList(data);
			await AsyncStorage.setItem('todos', JSON.stringify(data));
		} catch (error) {
			console.log(error);
		}
	}

	async function getData() {
		try {
			const todos = await AsyncStorage.getItem('todos');
			if (todos) {
				setList(JSON.parse(todos));
			}
		} catch (error) {
			console.log(error);
		}
	}

	function addItem(item) {
		let id = Math.max(...list.map(item => +item.id), 0) + 1;
		const newItem = { ...item, id: id.toString() };
		storeData([...list, newItem]);
	}

	function deleteItem(id) {
		const newList = list.filter(item => item.id !== id);
		storeData(newList);
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				data={list}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<ListItem item={item} onSwipeFromRight={() => deleteItem(item.id)} />
				)}
				ItemSeparatorComponent={() => <Separator />}
			/>
			<AddItem addItem={addItem} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '85%',
	},
});
