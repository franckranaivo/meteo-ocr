import React, { Component } from "react";

import {Text, View , StyleSheet } from 'react-native';

export default class About extends Component {
    render () {
        return (
            <View style={style.view}>
                <Text style={style.title}>About Me</Text>
                <Text>
                    lorem  ipsum dolor sic amet
                    lorem  ipsum dolor sic amet
                    lorem  ipsum dolor sic amet
                </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10
    },
    title: {
        fontSize: 33,
        marginBottom: 35
    }
})