import React, { Component } from 'react'
import { TouchableOpacity, Text, TextInput, View } from 'react-native'
import  style from '../styles'
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";


export default class Search extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
            city: ''
        }
    }
    
    handleChange(city) {
        this.setState({city: city})
    }

    submit (event) {
        console.log(event)
        this.props.navigation.navigate('Result',{city: this.state.city})
    }

    render() {
        return (
            <View style={style.general}>
                <TextInput 
                    style={ style.textinput } 
                    placeholder='Ville ...' 
                    value={this.state.city}
                    onChange={(event) => this.handleChange(event.nativeEvent.text)}
                />
                <TouchableOpacity
                    style={style.button}
                    onPress={(event) => {this.submit(event)}}
                    >
                    <Text style={style.buttonText}>Rechercher</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function Result(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Result screen {props.city}</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Search">
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Result" component={Result} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
