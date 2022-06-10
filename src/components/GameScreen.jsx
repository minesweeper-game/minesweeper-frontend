import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import GameBoard from './GameBoard'

const GameScreen = ({ route, navigation }) => {
    const { rows, columns, difficulty, id } = route.params

    return (
        <View testID="container" style={styles.container}>
            <Text>GAME ID: {id}</Text>
            <Text>LEVEL: {difficulty}</Text>
            <GameBoard 
                rows={rows} 
                columns={columns} 
                testID="component-gameboard" />
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default GameScreen