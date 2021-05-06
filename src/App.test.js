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
  // test('input textfile', () => {
  //   // const component = render(<App />);

  //   // fireEvent.click(screen.getByText('Upload File'));
  // });
  test('handleFiles', () => {
    
  });
  test('handleSubmit', () => {

  });
  test('has correct body', () => {
    render(<App />);
    let headertwo = [<h2 title="word-count">Word Count: </h2>, <h2>Word Frequency: </h2>, <h2>Line Count: </h2>, <h2>Char Count: </h2>, <h2>Unique Char Frequency: </h2>, <h2>Word Replacement: </h2>]
    // let wordCountHeader = <h2 t)
    // expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Created by: Sergio J Falcon');
    // expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Upload a file to run Word Statistics');
    // expect(screen.queryAllByRole('heading', { level: 2 })).toHaveTextContent(headertwo);
    // console.log(getByText('Word Count: ', 'h2'))
    //expect(screen.getAllByTitle('word-count')).toHaveTextContent('Word Count: ');

  })
});