import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import tw from 'twrnc'
import { FlatList } from 'react-native-gesture-handler'
import { MovieCard } from '../components'

export const MoviesList = () => {
    const [isloading, setIsloding] = useState<boolean>(false)
    const [movieData, setMovieData] = useState<any[]>([])

    const getMovieList = useCallback(async () => {
        setIsloding(true)
        try {
            const response = await fetch('https://dummyapi.online/api/movies', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json()
            setMovieData(data)
        } catch (error) {
            console.log(error)
        }
        setIsloding(false)
    }, [])

    useEffect(() => {
        getMovieList()
    }, [])

    return (
        <View
            style={tw`flex flex-1 w-full pt-12 px-4 justify-center items-center`}
        >
            {isloading ? (
                <Text style={tw`text-xl`} >loading...</Text>
            ) : (
                <FlatList
                    data={movieData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <MovieCard {...item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    )
}
