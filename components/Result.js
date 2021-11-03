import React, { Component } from 'react'
import {  Text, View } from 'react-native'
import { ResultList } from './ResultList'



export default class Result extends Component {

    constructor(props) {
        super(props)
        this.state = {
            city: this.props.route.params.city,
            report: [ {key:'superville'} , {key:'Amazing'} ]
        }
    }


    render () {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ResultList report={this.state.report}/>
            </View>
        )
    }
    
}