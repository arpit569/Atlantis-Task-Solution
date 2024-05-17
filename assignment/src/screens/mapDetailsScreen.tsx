import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export const MapDetailsScreen = ({ route }: any) => {
    const { city, desc } = route.params
    console.log({ city, desc })
    return (
        <View style={tw`h-full flex flex-1 bg-zinc-200 pt-10 px-8`}>
            <Text style={tw`text-3xl`}>City: {city}</Text>
            <Text style={tw`text-3xl`}>Details: {desc}</Text>
        </View>
    )
}
