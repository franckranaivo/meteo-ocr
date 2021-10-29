import React, { Component } from 'react'
import { TouchableOpacity, Text, TextInput, View } from 'react-native'
import  style from '../styles'


export class Search extends Component {
    
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
        console.log('ici')
        this.props.navigation.navigate('Result', {city: this.state.city})
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


