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

// capitale letters so React Native recognizes it as a custom component
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

// in react native we can\t ouput text directly
// in the view - view is kind off the div for web -
// we have to use the Text component
export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = goal => {
		// to get teh latest snapshot of the state
		setCourseGoals(currentGoals => [...courseGoals, goal]);
	};

	return (
		// {}: dynamic content binding
		// style properties is an object
		// where keys are properties
		// and the value is the value
		<View style={styles.screen}>
			{/*  scroll view renders all the elements in advance even 
			  if they are not visible on the screen yet, this is very bad for performance
			  and can make the app slow if we have a very long list
			  thats why we use FlatList */}
			<GoalInput onAddGoal={addGoalHandler}/>
			<FlatList
				data={courseGoals}
				// render item takes a callback function
				renderItem={itemData => (
					<GoalItem
						title={itemData.item}
					/>
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
	}
});
