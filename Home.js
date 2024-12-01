import React, { useState } from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, Button, Alert} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import {datasource} from "./Data";

const styling = StyleSheet.create({
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    container: {
        padding: 20,
        flexDirection: 'column',
        backgroundColor: 'lightblue',
        flex:2,
        justifyContent: 'center',
    },
    list: {
        flex: 2,
        fontSize: 15,
        textAlign: 'center',
        borderWidth: 10,
        borderStyle: 'solid',
    },
    minititle: {
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase',
    }
})

const Home = ({ navigation }) => {
    const [totalCalories, setTotalCalories] = useState(0);

    const calculateCalories = () => {
        const total = datasource[0].data.reduce((sum, item) => sum + Number(item.calorie), 0);
        setTotalCalories(total);

        Alert.alert(
            'Calorie Calculation',
            `Total Calories: ${total}\n` +
            (total < 2800
                ? 'Below Recommended Daily Intake of 2800 for men'
                : 'Above Recommended Daily Intake for men') +
            `\n` +
            (total < 2000
                ? 'Below Recommended Daily Intake of 2000 for women'
                : 'Above Recommended Daily Intake for women'),
            [{ text: 'OK' }]
        );
    };
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                              onPress={() => {
                                  navigation.navigate("Edit", {index:index, food:item.food, calorie:item.calorie});
                              }}>
                <Text style={styling.list}>Food: {item.food} - Calories: {item.calorie}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styling.container}>
            <Text></Text>
            <Text></Text>
            <Text style={styling.titleStyle}>Calorie Intake Tracker</Text>
            <Text></Text>
            <Text></Text>
            <Button title="Add Food" onPress={() => {navigation.navigate('Add')}} style={styling.addButton} />
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text style={styling.minititle}>Here's the List of food you have eaten:</Text>
            <Text></Text>
            <FlatList
                data={datasource[0].data}
                keyExtractor={(item, index) => item.food + index.toString()}
                renderItem={renderItem}
            />
            <Text style={styling.minititle}> Press here to check the total calories</Text>
            <Text></Text>
            <Button title="Calculate Calories" onPress={calculateCalories} />
        </View>
    )

}

export default Home;
