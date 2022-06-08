import { render, fireEvent } from 'test-utils';
import GameStartForm from './GameStartForm';
import { Alert } from 'react-native';

let component
let inputRows
let inputColumns
let buttonNewGame
const ROWS_VALUE_ERROR_MESSAGE = "Rows value should not be less than 3 and no more than 17"
const COLUMNS_VALUE_ERROR_MESSAGE = "Columns value should not be less than 3 and no more than 17"

describe("<GameStartForm />", () => {
        beforeEach(() => {
            component = render(<GameStartForm />)
            inputRows      = component.getByTestId("input-rows")
            inputColumns   = component.getByTestId("input-columns")
            buttonNewGame  = component.getByTestId("button-start-game")
        })

        it('should render correctly', () => {
            //given

            //when

            //then
            expect(component).toBeDefined()
            expect(inputRows).toBeDefined()
            expect(inputColumns).toBeDefined()
            expect(buttonNewGame).toBeDefined()
        })

        it('should navigate to GameScreen when row and column values are correct', () => {
            //given
            const newRowValue    = 5
            const newColumnValue = 9
            const navigate       = jest.fn()
            const {getByTestId}  = render(<GameStartForm navigation={ { navigate } }/>)

            //when
            fireEvent.changeText(getByTestId("input-rows"), newRowValue.toString())
            fireEvent.changeText(getByTestId("input-columns"), newColumnValue.toString())
            fireEvent.press(getByTestId("button-start-game"))

            //then
            expect(navigate).toHaveBeenCalledWith("GameScreen", {rows: newRowValue, columns: newColumnValue})
        })

        it('should not create a new game if rows value is below 3', () => {
            //given
            const newRowValue    = 2
            const newColumnValue = 9
            const myAlert        = jest.spyOn(Alert, 'alert')

            //when
            fireEvent.changeText(inputRows, newRowValue.toString())
            fireEvent.changeText(inputColumns, newColumnValue.toString())
            fireEvent.press(buttonNewGame)

            //then
            expect(myAlert).toHaveBeenCalledWith(ROWS_VALUE_ERROR_MESSAGE)
        })

        it('should not create a new game if rows value is above 17', () => {
            //given
            const newRowValue    = 20
            const newColumnValue = 9
            const myAlert        = jest.spyOn(Alert, 'alert')

            //when
            fireEvent.changeText(inputRows, newRowValue.toString())
            fireEvent.changeText(inputColumns, newColumnValue.toString())
            fireEvent.press(buttonNewGame)

            //then
            expect(myAlert).toHaveBeenCalledWith(ROWS_VALUE_ERROR_MESSAGE)
        })

        it('should not create a new game if columns value is below 3', () => {
            //given
            const newRowValue    = 9
            const newColumnValue = 2
            const myAlert        = jest.spyOn(Alert, 'alert')

            //when
            fireEvent.changeText(inputRows, newRowValue.toString())
            fireEvent.changeText(inputColumns, newColumnValue.toString())
            fireEvent.press(buttonNewGame)

            //then
            expect(myAlert).toHaveBeenCalledWith(COLUMNS_VALUE_ERROR_MESSAGE)
        })

        it('should not create a new game if columns value is above 17', () => {
            //given
            const newRowValue    = 9
            const newColumnValue = 20
            const myAlert        = jest.spyOn(Alert, 'alert')

            //when
            fireEvent.changeText(inputRows, newRowValue.toString())
            fireEvent.changeText(inputColumns, newColumnValue.toString())
            fireEvent.press(buttonNewGame)

            //then
            expect(myAlert).toHaveBeenCalledWith(COLUMNS_VALUE_ERROR_MESSAGE)
        })
})