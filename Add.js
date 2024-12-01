import React, {useState} from 'react'
import {datasource} from "./Data";
import {TextInput, View, Text, Button, StyleSheet} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const styling =StyleSheet.create({
    container: {
        backgroundColor: 'turquoise',
        flex:2,
        justifyContent: 'center',
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 30,
        textAlign: 'center',
    }
})

const Add = ({navigation}) => {
    const [food, setFood] = useState('');
    const [calorie, setCalorie] = useState('');
    return (
        <View style={styling.container}>
            <Text style={styling.title}>Adding New Food</Text>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>What food did you eat today?:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText= {(text)=> setFood(text)}/>
            </View>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>What are the calories?:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText= {(text)=> setCalorie(text)}/>
            </View>
            <Button title="ADD"
                    onPress={() => {
                        let item = {food: food, calorie: calorie};
                        let indexNum = 0;
                        datasource[indexNum].data.push(item);
                        navigation.navigate("Home");
                    }
                    }
            />
            <Text></Text>
            <Text></Text>
            <Button title="Back" onPress={() => {
                navigation.navigate("Home");
            }}/>
        </View>
    )
}

export default Add
