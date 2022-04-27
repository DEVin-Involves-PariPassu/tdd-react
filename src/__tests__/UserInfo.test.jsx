import { render, screen } from '@testing-library/react'
import UserInfo from '../components/UserInfo';

// <UserInfo name={danilo} />
describe('UserInfo', () => {
  it('render the user name', () => {
    const user = { name: 'Danilo Sales'}

    // <h1 class="estilo">Hello</h1>
    render(<UserInfo name={user.name} />);
    
    const element = screen.getByText(/danilo/i);

    expect(element).toBeInTheDocument();

  })
})