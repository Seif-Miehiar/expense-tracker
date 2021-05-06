import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppHeader from "./components/header";
import Balance from "./components/balance";
import AppExpense from "./components/addExpense";

const App = () => {
	var balance = 100;
	return (
		<View style={styles.container}>
			<AppHeader />
			<Balance balance={balance} />
			<AppExpense />
			<Text style={styles.textStyle}>Hello World App</Text>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFA500",
		paddingTop: 20,
		// alignItems: "center",
		// justifyContent: "center",
	},
	textStyle: {
		fontSize: 20,
	},
	viewStyle: {
		backgroundColor: "#f3f3f3",
		justifyContent: "center",
		alignItems: "center",
		height: 70,
		paddingTop: 30,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: "relative",
	},
});

export default App;
