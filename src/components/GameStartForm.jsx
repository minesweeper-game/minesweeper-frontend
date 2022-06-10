import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, Button, Alert, Keyboard, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import doPOSTRequest from '../doPOSTRequest';

const isValidRowAndColumnInputValue = (inputValue) => {
    return !Number.isNaN(inputValue) && (inputValue >= 3 && inputValue <= 17)
}

const GameStartForm = ({ navigation, testingDifficulty=null, fetchCall=null }) => {
    const [inputRows, setInputRows] = useState("")
    const [inputColumns, setInputColumns] = useState("")
    const [showLoader, setShowLoader] = useState(false)

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(null);
    const [dropdownItems, setDropdownItems] = useState([
        { value: 'easy',   label: 'EASY',   testID: 'dropdown-easy'},
        { value: 'medium', label: 'MEDIUM', testID: 'dropdown-medium' },
        { value: 'hard',   label: 'HARD',   testID: 'dropdown-hard' },
    ]);

    const onRowsChangeHandler = (rows) => {
        //console.log("ROWS: "+rows)
        setInputRows(rows)

    }

    const onColumnsChangeHandler = (columns) => {
        //console.log("COLUMNS: "+columns)
        setInputColumns(columns)
    }

    const onSubmitHandler = async () => {
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

        if (testingDifficulty == null){
            if(dropdownValue == null || dropdownValue == ""){
                Alert.alert('Please, select a difficulty level')
                return
            }
        }

        setShowLoader(true)

        if (fetchCall == null) fetchCall = doPOSTRequest

        const response = await fetchCall({
            rows: parseInt(inputRows),
            cols: parseInt(inputColumns),
            difficulty: (testingDifficulty ?? dropdownValue).toUpperCase()
        })

        setShowLoader(false)

        if(response.detail != null) {
            Alert.alert(response.detail)
            return
        }
        
        navigation.navigate("GameScreen", {
            rows: parseInt(response.rows),
            columns: parseInt(response.cols),
            difficulty: response.difficulty,
            id: response.id
        })
    }
    
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" animating={showLoader}/>
            <View style={styles.fieldContainer}>
                <View
                    style={styles.fieldContainer}>
                    <Text style={styles.fieldLabel}>Rows:</Text>
                    <TextInput 
                        style={styles.textInput} 
                        keyboardType='number-pad'
                        placeholder='rows amount' 
                        onChangeText={(rows) => onRowsChangeHandler(rows) } 
                        value={inputRows}
                        maxLength={2}
                        testID="input-rows" />
                </View>
                <View
                    style={styles.fieldContainer}>
                    <Text style={styles.fieldLabel}>Columns:</Text>
                    <TextInput 
                        style={styles.textInput} 
                        keyboardType='number-pad'
                        placeholder='columns amount'
                        onChangeText={(columns) => onColumnsChangeHandler(columns) } 
                        value={inputColumns} 
                        maxLength={2} 
                        testID="input-columns" />
                </View>
                <View
                    style={styles.fieldContainer}>
                    <Text style={styles.fieldLabel} >Difficulty:</Text>
                    
                    <DropDownPicker
                        open={dropdownOpen}
                        value={dropdownValue}
                        items={dropdownItems}
                        setOpen={(param) => {
                            Keyboard.dismiss()
                            setDropdownOpen(param)
                        }}
                        setValue={setDropdownValue}
                        setItems={setDropdownItems}
                        placeholder="Select the difficulty level"
                        testID="dropdown-difficulty"
                        />
                </View>
            </View>
            <Button 
                title="START GAME"
                onPress={() => onSubmitHandler()} 
                testID="button-start-game"/>
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 24
    },
    textInput: {
        borderRadius: 5,
        borderColor: "#333",
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 8
    },
    fieldContainer: {
        marginBottom: 24
    },
    fieldLabel: {
        color: "#666",
        marginBottom: 8
    },
    dropdownMenu: {
        
    }
});

export default GameStartForm