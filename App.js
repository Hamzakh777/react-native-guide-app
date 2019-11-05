import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ScrollView,
	FlatList
} from "react-native";

// in react native we can\t ouput text directly
// in the view - view is kind off the div for web -
// we have to use the Text component
export default function App() {
	const [enteredGoal, setEnteredGoal] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = goal => {
		setEnteredGoal(goal);
	};

	const addGoalHandler = () => {
		// to get teh latest snapshot of the state
		setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
	};

	return (
		// {}: dynamic content binding
		// style properties is an object
		// where keys are properties
		// and the value is the value
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<Button title="Add" onPress={addGoalHandler} />
			</View>
			{/*  scroll view renders all the elements in advance even 
			  if they are not visible on the screen yet, this is very bad for performance
			  and can make the app slow if we have a very long list
			  thats why we use FlatList */}
			<FlatList
				data={courseGoals}
				// render item takes a callback function
				renderItem={itemData => (
					<View style={styles.listItem} >
						<Text>{itemData.item}</Text>
					</View>
				)}
				// each list item needs a unique key 
				// keyExtractor tells FlatList how to 
				// extrate the key
				keyExtractor={(itemData, index) => index.toString()}
			/>
		</View>
	);
}

// stylesheet object
// contains all the style configuration
const styles = StyleSheet.create({
	screen: {
		padding: 30
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	input: {
		borderBottomColor: "black",
		borderBottomWidth: 2,
		marginBottom: 10,
		fontSize: 18,
		flexGrow: 1,
		marginRight: 16
	},
	listItem: {
		padding: 10,
		borderColor: "#000",
		borderWidth: 2,
		backgroundColor: "#ccc",
		marginVertical: 10
	}
});
