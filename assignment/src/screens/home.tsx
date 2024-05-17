import { StackNavigationProp } from '@react-navigation/stack'
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import tw from 'twrnc'
import { ListDetails } from '../dummyData'
import { ListView } from '../components'
import { useEffect } from 'react'
import { useUserContext } from '../../App'

export const Home = ({ navigation }: any) => {
    const { userName } = useUserContext()
    useEffect(() => {
        if (!userName) {
            navigation.navigate('auth')
        }
    }, [navigation,userName])
    return (
        <View style={[tw`w-full px-4 pt-20`]}>
            <FlatList
                data={ListDetails}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
                renderItem={({ item }) => (
                    <ListView
                        label={item.text}
                        navigateTo={item.navigateTo}
                        navigation={navigation}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
