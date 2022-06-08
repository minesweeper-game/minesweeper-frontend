import { View, Text, StyleSheet } from "react-native"

const BoardBox = ({ row, column}) => { 
	return (
		<View style={styles.box}>
			<Text 
				testID="text-row-columns"
				style={styles.boxText}>{`${row}:${column}`}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: '#ccc',
		height: 30,
		width: 30,
		borderWidth: 2,
		borderStyle: "solid",
		borderColor: "#333"
	},
	boxText: {
		fontSize: 8
	}
})

export default BoardBox