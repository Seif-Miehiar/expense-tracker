import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const AddExpense = () => {
	return (
		<View>
			<Text style={styles.textStyle}>hi Add Expense</Text>
			<Input
				placeholder="Add a transaction"
				rightIcon={<Icon name="plus-circle" size={24} color="black" />}
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
