import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import Constants from 'expo-constants'
import { useState, useEffect } from 'react'

const isValidRowAndColumnInputValue = (inputValue) => {
    return !Number.isNaN(inputValue) && (inputValue >= 3 && inputValue <= 17)
}

const GameStartForm = ({ navigation }) => {
    //const [randomId, setRandomId] = useState("")
    const [users, setUsers] = useState([])
    const [inputRows, setInputRows] = useState("")
    const [inputColumns, setInputColumns] = useState("")
    const [inputDifficulty, setInputDifficulty] = useState("EASY")

    const fetchString = async () => {
        setUsers([])
        console.log("fetch started")
        const response = await globalThis.fetch('https://reqres.in/api/users')
        const json = await response.json()
        console.log("fetch finished")
        console.table(json.data)
        setUsers(json.data)
    }

    const onRowsChangeHandler = (rows) => {
        //console.log("ROWS: "+rows)
        setInputRows(rows)

    }

    const onColumnsChangeHandler = (columns) => {
        //console.log("COLUMNS: "+columns)
        setInputColumns(columns)
    }

    const onSubmitHandler = () => {
        if (!isValidRowAndColumnInputValue(inputRows)){
            Alert.alert('Rows value should not be less than 3 and no more than 17')
            setInputRows("")
            return
        } 

        if (!isValidRowAndColumnInputValue(inputColumns)){
            Alert.alert('Columns value should not be less than 3 and no more than 17')
            setInputColumns("")
            return
        }

        navigation.navigate("GameScreen", {
            rows: parseInt(inputRows),
            columns: parseInt(inputColumns)
        })
    }
    

    return (
        <View style={styles.container}>
            <View>
                <Text>Rows:</Text>
                <TextInput 
                    style={styles.textInput} 
                    keyboardType='number-pad'
                    placeholder='rows amount' 
                    onChangeText={(rows) => onRowsChangeHandler(rows) } 
                    value={inputRows}
                    maxLength={2}
                    testID="input-rows" />

                <Text>Columns:</Text>
                <TextInput 
                    style={styles.textInput} 
                    keyboardType='number-pad'
                    placeholder='columns amount'
                    onChangeText={(columns) => onColumnsChangeHandler(columns) } 
                    value={inputColumns} 
                    maxLength={2} 
                    testID="input-columns" />

                <Button 
                    title="START GAME"
                    onPress={() => onSubmitHandler()} 
                    testID="button-start-game"/>
            </View>
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
    },
    mainTitle: {
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16,
        fontSize: 32,
    },
    textInput: {
        borderRadius: 5,
        borderColor: "#999",
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10
    }
});

export default GameStartForm