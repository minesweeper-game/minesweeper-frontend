import { render } from 'test-utils';
import GameScreen from './GameScreen';

describe("<GameScreen />", () => {
       
        it('should render correctly', () => {
            //given
            const params = {
                rows: 5,
                columns: 9
            }

            //when
            const { getByTestId } = render(<GameScreen route={ { params } }/>)

            //then
            expect(getByTestId("container")).toBeDefined()
            expect(getByTestId("component-gameboard")).toBeDefined()
        })
})