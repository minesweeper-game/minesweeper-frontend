import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native"
import Home from './Home'
import GameStartForm from './GameStartForm'
import GameScreen from './GameScreen'

const { Navigator, Screen } = createNativeStackNavigator()

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    animation: 'slide_from_right'
}

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Screen name="Home" component={Home} options={{title: 'Minesweeper Game'}}></Screen>
            <Screen name="Form" component={GameStartForm} options={{title: 'New Game'}}></Screen>
            <Screen name="GameScreen" component={GameScreen} options={{title: 'Playing'}}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator