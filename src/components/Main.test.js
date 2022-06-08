import { render } from 'test-utils';
import Main from './Main';

let component

describe("<Main />", () => {
        beforeEach(() => {
            component = render(<Main />)
        })

        it('should render correctly', () => {
            expect(component).toBeDefined()
        })
})