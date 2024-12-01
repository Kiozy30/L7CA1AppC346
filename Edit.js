import React, {useState} from 'react'
import {datasource} from "./Data";
import {TextInput, View, Text, Button, Alert, StyleSheet} from "react-native";

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

const Edit = ({navigation, route}) => {
    const [food, setFood] = useState(route.params.food)
    const [calorie, setCalorie] = useState(route.params.calorie)
    return(
        <View style={styling.container}>
            <Text style={styling.title}>Update</Text>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Food Name:</Text>
                <TextInput value={food} style={{borderWidth: 1}} onChangeText= {(text)=> setFood(text)}/>
                <Text style={{fontWeight: 'bold'}}>Calorie:</Text>
                <TextInput value={calorie} style={{borderWidth: 1}} onChangeText= {(text) => setCalorie(text)}/>
            </View>
            <View style={ {padding: 10, flexDirection: 'row' , justifyContent: 'space-between'} }>
                <Button title="Save"
                        onPress={() => {
                            let item = {food: food, calorie:calorie};
                            let indexNum = 0;
                            datasource[indexNum].data[route.params.index].food=food;
                            datasource[indexNum].data[route.params.index].calorie=calorie;
                            navigation.navigate("Home");
                        }
                        }/>
                <Button title="Delete"
                        onPress={() => {
                            let indexnum = 0;
                            Alert.alert("Are you sure?", '',
                                [{text: 'Yes', onPress: () => {
                                        datasource[indexnum].data.splice(route.params.index, 1);
                                        navigation.navigate("Home");
                                    }},
                                    {text: 'No'}]);
                        }}/>
            </View>
            <Button title="Back" onPress={() => {
                navigation.navigate("Home");
            }}/>
        </View>
    )
}

export default Edit
