import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { create } from 'react-test-renderer'

describe('My first snapshot test', ()=> {
  test('testing app', () => {
    let tree = create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  })
});
describe('Inputting a text file', () => {
  test('input textfile', () => {
    const component = render(<App />);

    fireEvent.click(screen.getByText('Upload File'));
  });
  test('has correct Author header', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Created by: Sergio J Falcon');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Upload a file to run Word Statistics');
    
  })
});