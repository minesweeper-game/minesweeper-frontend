import { render, screen } from 'test-utils';
import BoardBox from "./BoardBox";

let component

describe("<BoardBox />", () => {
    
        beforeEach(() => {
            component = render(<BoardBox row={5} column={10}/>)
        })

        it('should render correctly', () => {
            expect(component).toBeDefined()
            expect(component.getByTestId("text-row-columns")).toBeDefined()
        })

        it('should create a Text element with the number of rows and columns', () => {
            expect(component.queryByText(5 + ":" + 10)).not.toBeNull()
        })
})