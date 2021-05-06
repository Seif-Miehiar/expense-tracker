import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppHeader from "./components/header";
import Balance from "./components/balance";
import AppExpense from "./components/addExpense";
import Expenses from "./components/expenses";
import {
	// SafeAreaView,
	SafeAreaProvider,
	// SafeAreaInsetsContext,
	// useSafeAreaInsets,
	// initialWindowMetrics,
} from "react-native-safe-area-context";

const App = () => {
	const [transactionData, setTransactionData] = useState([]);
	var balance = 100;

	const transactionCallback = (transactionChildData) => {
		setTransactionData((transactionData) => [
			transactionChildData,
			...transactionData,
		]);
	};
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<AppHeader />
				<Balance balance={balance} />
				<AppExpense sendDataToParent={transactionCallback} />
				{/* <Text style={styles.textStyle}>
					Hello World App
					{transactionData}
				</Text> */}
				<Expenses data={transactionData} />
				<StatusBar style="auto" />
			</View>
		</SafeAreaProvider>
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
