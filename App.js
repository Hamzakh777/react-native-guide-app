import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Button,
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
	const [isAddMode, setIsAddMode] = useState(false);

	const addGoalHandler = goal => {
		// to get teh latest snapshot of the state
		setCourseGoals(currentGoals => [...currentGoals, goal]);
		setIsAddMode(false);
		// when settings two states together, react will batch these together so it will
		// only have to rerender the dom once
	};

	const removeGoalHandler = goalToRemove => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter((goal) => goal !== goalToRemove);
		});
	};

	return (
		// {}: dynamic content binding
		// style properties is an object
		// where keys are properties
		// and the value is the value
		<View style={styles.screen}>
			<Button title="Add new goal" onPress={() => setIsAddMode(true)}/>
			{/*  scroll view renders all the elements in advance even 
			  if they are not visible on the screen yet, this is very bad for performance
			  and can make the app slow if we have a very long list
			  thats why we use FlatList */}
			<GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
			<FlatList
				data={courseGoals}
				// render item takes a callback function
				renderItem={(itemData) => (
					<GoalItem
						title={itemData.item}
						onDelete={removeGoalHandler}
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
