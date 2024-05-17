import { FC } from 'react'
import { Image, Text, View } from 'react-native'
import tw from 'twrnc'

interface IProps {
    movie: string
    rating: number
    image: string
    imdb_url: string
}

export const MovieCard: FC<IProps> = ({ movie, rating, image, imdb_url }) => {
    return (
        <View style={tw`w-full h-20 bg-orange-100 rounded-4 my-2 p-4 `}>
            <Text style={tw`text-xl`}>{movie}</Text>
            <Text style={tw`text-md`}>Rating: {rating}</Text>
        </View>
    )
}
