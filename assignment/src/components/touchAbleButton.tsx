import { FC } from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'twrnc'

interface IProps {
    classes: string
    onPress: () => void
    label: string
}

export const TouchAbleButton: FC<IProps> = ({ classes, onPress, label }) => {
    return (
        <TouchableOpacity onPress={onPress} style={tw`${classes}`}>
            <Text style={tw`text-xl`} >{label}</Text>
        </TouchableOpacity>
    )
}
