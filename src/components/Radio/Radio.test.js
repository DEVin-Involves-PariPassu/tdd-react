import 'jest-styled-components'
const { render, screen } = require('@testing-library/react')
const { default: Radio } = require('.')

describe('<Radio />', () => {
  it('should render the radio', () => {
    const { container } = render(<Radio label="Radio" labelFor="check" value="anyValue"/>)

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  })
})