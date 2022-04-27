const { render, screen } = require('@testing-library/react')
const { default: userEvent } = require('@testing-library/user-event')
const { default: Radio } = require('.')

describe('<Radio />', () => {
  it('should render the radio with label (black)', () => {
    const { container } = render(<Radio label="Radio" 
      labelFor="check" 
      value="anyValue"/>)

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: 'black'});
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  })

  it('should render with label (white)', () => {
    render(<Radio label="Radio" labelColor="white"/>);

    const label = screen.getByText('Radio');
    expect(label).toHaveStyle({ color: 'white'});
  })

  it('should render without label', () => {
    render(<Radio />);
    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument();
  })

  it('should dispatch onCheck when radio changes', () => {

    const onCheck = jest.fn();

    render(<Radio 
      label="Radio"
      labelFor='Radio'
      value='anyValue'
      onCheck={onCheck}
    />);

    expect(onCheck).not.toHaveBeenCalled();
    userEvent.click(screen.getByLabelText('Radio'))
    
    expect(onCheck).toHaveBeenCalledTimes(1);
  })
})
