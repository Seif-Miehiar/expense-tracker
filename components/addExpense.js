import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const AddExpense = ({ sendDataToParent }) => {
	const [data, setData] = useState({});
	const [price, setPrice] = useState({});

	return (
		<View>
			<Text style={styles.textStyle}>hi Add Expense</Text>
			<Input
				placeholder="Add a transaction"
				onChangeText={(text) => {
					// console.log(text);
					setData(text);
				}}
			/>
			<Input
				placeholder="price"
				onChangeText={(price) => {
					console.log(price);
					setPrice(price);
				}}
				rightIcon={
					<Icon
						onPress={() => {
							// console.log(data);
							sendDataToParent([data, price]);
						}}
						name="plus-circle"
						size={24}
						color="black"
					/>
				}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	textStyle: {
		fontSize: 21,
	},
});

export default AddExpense;
