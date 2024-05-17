import { FC, useCallback } from 'react'
import { Pressable, Text, View } from 'react-native'
import tw from 'twrnc'

interface IProps {
    label: string
    navigateTo: string
    navigation: any
}

export const ListView: FC<IProps> = ({ navigation, label, navigateTo }) => {
    const handleNavigation = useCallback(() => {
        navigation.navigate(navigateTo)
    }, [])

    return (
        <Pressable onPress={handleNavigation}>
            <View
                style={[
                    tw`w-full h-14 justify-center rounded-2 p-4 mb-4`,
                    {
                        backgroundColor: '#9ba3ae',
                    },
                ]}
            >
                <Text style={[tw`text-white text-lg`]}>{label}</Text>
            </View>
        </Pressable>
    )
}
