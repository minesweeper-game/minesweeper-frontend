import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import Constants from 'expo-constants'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.mainTitle}>Welcome to Minesweeper Game!</Text>    
            <Button 
                style={styles.newGameButton}
                title="New Game"
                onPress={() => navigation.navigate("Form")}
                testID="button-new-game" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainTitle: {
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16,
        fontSize: 32,
        textAlign: 'center',
        marginVertical: 20
    },
    newGameButton: {

    }
});

export default Home