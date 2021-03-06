import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";

const AppHeader = ({ title }) => {
	return (
		<Header
			placement="left"
			leftComponent={{ icon: "menu", color: "#fff", size: 30 }}
			centerComponent={{
				text: title,
				style: { color: "#fff", fontSize: 21, fontStyle: "italic" },
			}}
			rightComponent={{ icon: "home", color: "#fff", size: 30 }}
		/>
		// <View style={styles.headerStyle}>
		// 	<Text style={styles.textStyle}>Expense Tracker</Text>

		// </View>
	);
};
AppHeader.defaultProps = {
	title: "Expense Tracker",
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
		height: 60,
		padding: 15,
		textAlign: "center",
		backgroundColor: "#00CED1",
		alignItems: "center",
	},
});

export default AppHeader;
