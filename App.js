import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppHeader from "./components/header";
import Balance from "./components/balance";
import AppExpense from "./components/addExpense";
import Expenses from "./components/expenses";
import Icon from "react-native-vector-icons/FontAwesome";
import {
	// SafeAreaView,
	SafeAreaProvider,
	// SafeAreaInsetsContext,
	// useSafeAreaInsets,
	// initialWindowMetrics,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import AddExpense from "./components/addExpense";

const Stack = createStackNavigator();

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
			<NavigationContainer>
				{/* <Stack.Navigator> */}
				{/* <Stack.Screen
						name="Add Expense"
						component={AddExpense}
						// options={{ title: "Welcome" }}
					/> */}
				{/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
				{/* </Stack.Navigator> */}

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
				<TouchableOpacity
					activeOpacity={0.7}
					// onPress={clickHandler}
					// onPress={(e) => navigation.navigate("AddExpense")}
					style={styles.touchableOpacityStyle}
				>
					<Icon name="plus-circle" size={50} color="green" />
				</TouchableOpacity>
			</NavigationContainer>
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
	touchableOpacityStyle: {
		position: "absolute",
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		right: 30,
		bottom: 30,
	},
});

export default App;
