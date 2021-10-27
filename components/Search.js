import React, { Component } from 'react'
import { TouchableOpacity, Text, TextInput, View } from 'react-native'
import  style from '../styles'

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

    submit () {
        
    }

    render() {
        return (
            <View style={{ marginTop: 40 }}>
                <TextInput 
                    style={ style.textinput } 
                    placeholder='Ville ...' 
                    value={this.state.city}
                    onChange={(event) => this.handleChange(event.nativeEvent.text)}
                />
                <TouchableOpacity
                    style={style.button}
                    onPress={this.submit}
                    >
                    <Text style={style.buttonText}>Rechercher</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

