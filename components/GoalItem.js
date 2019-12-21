import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity
            onPress={props.onDelete.bind(this, props.title)}
            activeOpacity={0.6}
        >
            <View style={styles.listItem} >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        borderColor: "#000",
        borderWidth: 2,
        backgroundColor: "#ccc",
        marginVertical: 10
    }
});

export default GoalItem;