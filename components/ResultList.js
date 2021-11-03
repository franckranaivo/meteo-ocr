import React from "react";
import { FlatList, Text ,View } from "react-native";

export const ResultList = (props) => {
    return (
        <View>
            <FlatList data={props.report} 
            renderItem={({item}) => <Text>{item.key}</Text>}
            />
        </View>
    );
}