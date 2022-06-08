import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import GameBoard from './GameBoard'

const GameScreen = ({ route, navigation }) => {
    const { rows, columns } = route.params
    console.log(route.params)
    return (
        <View testID="container" style={styles.container}>
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