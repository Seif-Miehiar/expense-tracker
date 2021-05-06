import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const AddExpense = ({ sendDataToParent }) => {
	const [data, setData] = useState("");
	return (
		<View>
			<Text style={styles.textStyle}>hi Add Expense</Text>
			<Input
				placeholder="Add a transaction"
				rightIcon={
					<Icon
						onPress={() => {
							// console.log(data);
							sendDataToParent(data);
						}}
						name="plus-circle"
						size={24}
						color="black"
					/>
				}
				onChangeText={(text) => {
					// console.log(text);
					setData(text);
				}}
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
