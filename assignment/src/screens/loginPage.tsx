import { FC, useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button, ScrollView, View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import tw from 'twrnc'
import { TouchAbleButton } from '../components'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useUserContext } from '../../App'
import { StackNavigationProp } from '@react-navigation/stack'

type FormData = {
    name: string
    email: string
    password: string
}

const initialValue: FormData = {
    name: '',
    email: '',
    password: '',
}

const schema = yup.object().shape({
    name: yup.string().min(4).required('Name is Required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(8).required('Password is required'),
})

export const LoginPage: FC<any> = ({ navigation }) => {
    const [notExists, setNotExists] = useState<boolean>(false)
    const { setUserName, userName } = useUserContext()
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: initialValue,
        resolver: yupResolver(schema),
    })

    const onSubmit = useCallback(
        async (data: FormData) => {
            console.log('Form Data:', data)
            const serializedData = await AsyncStorage.getItem(
                'emailPasswordData'
            )
            if (serializedData !== null) {
                const emailPasswordList = JSON.parse(serializedData)
                const isValid = emailPasswordList.filter(
                    (x: { email: string; password: string }) =>
                        x.email === data.email && x.password === data.password
                )
                if (isValid.length === 1) {
                    setUserName(data.name)
                    navigation.navigate('home')
                } else {
                    setNotExists(true)
                }
            }
        },
        [navigation, setUserName, setNotExists]
    )

    useEffect(() => {
        if (userName) {
            navigation.navigate('home')
        }
    }, [navigation, userName])

    return (
        <FormProvider {...useForm<FormData>()}>
            <View
                style={tw`w-full h-full flex justify-center bg-slate-500 p-8 gap-y-4 `}
            >
                <View>
                    <TextInput
                        style={tw`h-14 w-full border-2 bg-white rounded-lg text-black text-2xl px-4`}
                        placeholder="Name..."
                        placeholderTextColor="black"
                        onChangeText={(text) => setValue('name', text)}
                    />
                    {errors.name && (
                        <Text style={{ color: '#EE4E4E' }}>
                            {errors.name.message}
                        </Text>
                    )}
                </View>
                <View>
                    <TextInput
                        style={tw`h-14 w-full border-2 bg-white rounded-lg text-black text-2xl px-4`}
                        placeholder="Email..."
                        placeholderTextColor="black"
                        onChangeText={(text) => setValue('email', text)}
                    />
                    {errors.email && (
                        <Text style={{ color: '#EE4E4E' }}>
                            {errors.email.message}
                        </Text>
                    )}
                </View>
                <View>
                    <TextInput
                        style={tw`h-14 w-full border-2 bg-white rounded-lg text-black text-2xl px-4`}
                        placeholder="Password..."
                        placeholderTextColor="black"
                        onChangeText={(text) => setValue('password', text)}
                    />
                    {errors.password && (
                        <Text style={{ color: '#EE4E4E' }}>
                            {errors.password.message}
                        </Text>
                    )}
                </View>
                <TouchAbleButton
                    label="login"
                    onPress={handleSubmit(onSubmit)}
                    classes="h-10 w-full bg-white flex justify-center items-center rounded-xl"
                />
                {notExists && (
                    <Text style={[tw`text-xl`, { color: '#EE4E4E' }]}>
                        Your Email , Password is not correct.
                    </Text>
                )}
            </View>
        </FormProvider>
    )
}
