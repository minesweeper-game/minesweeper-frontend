import { render, fireEvent } from 'test-utils';
import Home from './Home';

describe("<Home />", () => {
        
    it('should render correctly', () => {
        //given
        const component = render(<Home />)
         
        //when
                 
        //then
        expect(component).toBeDefined()
        expect(component.getByTestId("button-new-game")).toBeDefined()
        expect(component.getByText("Welcome to Minesweeper Game!")).not.toBeNull()
    })
     
    it('should navigate to GameStartForm when the button is pressed', () => {
        //given
        const navigate = jest.fn()
        const {getByTestId} = render(<Home navigation={ { navigate } }/>)
        
        //when
        fireEvent.press(getByTestId("button-new-game"))
         
        //then
        expect(navigate).toHaveBeenCalledWith('Form')
    })
})