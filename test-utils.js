import { render } from '@testing-library/react-native'

const customRender = (ui, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed  
    wrapper: ({ children }) => children, 
    ...options,
})

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }