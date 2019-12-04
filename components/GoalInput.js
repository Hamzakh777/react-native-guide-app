import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Button} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = goal => {
        setEnteredGoal(goal);
    };


    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)} />
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default GoalInput;