import { View, StyleSheet } from "react-native"
import BoardBox from "./BoardBox"

const BoardBoxStack = ({ rowIndex, amount, stackStyle }) => {
    return (
        <View style={stackStyle}>
        {[...Array(amount).keys()].map((index) => <BoardBox key={index} row={rowIndex} column={index} /> )}
        </View>
    )
}

const BiMatix = ({ rows, columns }) => {
    return (
        <View>
        {[...Array(rows).keys()].map((rowIndex) => <BoardBoxStack stackStyle={styles.row} key={rowIndex} rowIndex={rowIndex} amount={columns}/> )}
        </View>
    )
}

const GameBoard = ({rows = 3, columns = 3, testID}) => { 
    return (
		<View testID={testID}>
            <BiMatix rows={rows} columns={columns}/>
        </View>
	)
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: '#ccc',
		height: 20,
		width: 20,
		borderWidth: 2,
		borderStyle: "solid",
		borderColor: "#333"
	},
    column: {
        flexDirection: "column"
    },
    row: {
        flexDirection: "row"
    }
})

export default GameBoard