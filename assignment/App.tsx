import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import {
    Home,
    LoginPage,
    Map,
    MapDetailsScreen,
    MoviesList,
    dummyEmailPassword,
} from './src'
import { NavigationContainer } from '@react-navigation/native'
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from 'react-native'

const Stack = createStackNavigator()

type UserContextType = {
    userName: string
    setUserName: (name: string) => void
}

const UserContext = createContext<UserContextType>({
    userName: '',
    setUserName: () => {},
})

export const useUserContext = () => useContext(UserContext)

export default function App() {
    const [userName, setUserName] = useState<string>('')

    const setDummyEmails = useCallback(async () => {
        try {
            const serializedData = JSON.stringify(dummyEmailPassword)
            await AsyncStorage.setItem('emailPasswordData', serializedData)
        } catch (error) {}
    }, [])

    useEffect(() => {
        setDummyEmails()
    }, [setDummyEmails])

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={userName ? 'home' : 'auth'}>
                    {!userName && (
                        <Stack.Screen
                            name="auth"
                            component={LoginPage}
                            options={{
                                headerShown: false,
                            }}
                        />
                    )}
                    <Stack.Screen
                        name="home"
                        component={Home}
                        options={({ navigation }) => ({
                            headerShown: true,
                            title: `Hi, ${userName}`,
                            headerRight: () => (
                                <Button
                                    onPress={() => {
                                        setUserName('')
                                    }}
                                    title="Logout"
                                    color="#000"
                                />
                            ),
                        })}
                    />
                    <Stack.Screen
                        name="map"
                        component={Map}
                        options={{
                            title: 'Map View',
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="mapDetails"
                        component={MapDetailsScreen}
                        options={{
                            title: 'Map View',
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="movies"
                        component={MoviesList}
                        options={{
                            title: 'Map View',
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UserContext.Provider>
    )
}
