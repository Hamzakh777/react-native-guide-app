import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Button,
    Modal
} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = goal => {
        setEnteredGoal(goal);
    };

    const addGoal= goal => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
    };


    return (
        <Modal
            visible={props.visible}
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title="Add" onPress={addGoal} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: '80%',
        borderBottomColor: "black",
        borderBottomWidth: 2,
        marginBottom: 10,
        fontSize: 18,
        marginRight: 16
    }
})

export default GoalInput;