import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Balance = ({ balance }) => {
	return (
		<View style={styles.headerStyle}>
			<Text style={styles.textStyle}>Balance is {balance}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: "#00CED1",
		paddingTop: 20,
		// alignItems: "center",
		// justifyContent: "center",
	},
	textStyle: {
		fontSize: 25,
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
	headerStyle: {
		height: "auto",
		padding: 15,
		textAlign: "center",
		backgroundColor: "#00CED1",
		borderRadius: 30,
		alignItems: "center",
	},
});

export default Balance;
