import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { Input, ListItem } from "react-native-elements";
// import Icon from "react-native-vector-icons/FontAwesome";

const Expenses = ({ data }) => {
	console.log(data);
	return (
		<View>
			{data.map((exp, index) => {
				console.log("test log");
				return (
					<TouchableOpacity key={index} style={styles.listItem}>
						<View style={styles.listItemView}>
							<Text style={styles.listItemText}>{exp}</Text>
						</View>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};
// <View style={styles.container}>
// 	<Text> test1</Text>
// 	{data.map((item, index) => {
// 		<ListItem>
// 			<ListItem.Content>
// 				<ListItem.Title>
// 					Limited supply! Its like digital gold!
// 				</ListItem.Title>
// 				<View style={styles.subtitleView}>
// 					<Text style={styles.ratingText}>5 months ago</Text>
// 				</View>
// 			</ListItem.Content>
// 		</ListItem>;
// 		// <ListItem key={index} bottomDivider>
// 		// 	<ListItem.Content>
// 		// 		<ListItem.Title>{index + 1}</ListItem.Title>
// 		// 		{/* <ListItem.Subtitle>{item}</ListItem.Subtitle> */}
// 		// 	</ListItem.Content>
// 		// 	<ListItem.Chevron />
// 		// </ListItem>;
// 	})}
// </View>
const styles = StyleSheet.create({
	listItem: {
		padding: 15,
		backgroundColor: "#f8f8f8",
		borderBottomWidth: 2,
		borderColor: "#eee",
	},
	listItemView: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	listItemText: {
		fontSize: 18,
	},
});
export default Expenses;
