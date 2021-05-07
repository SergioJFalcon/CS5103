import { fireEvent, getByTestId, render, screen, waitFor, debug } from '@testing-library/react';
import App from './App';

describe('App', () => {

  test('renders App Component', async () => {
    render(<App />);
    expect(screen.getByText(/Upload a file to run Word Statistics/)).toBeInTheDocument();
    expect(screen.getByText(/empty/)).toBeInTheDocument();
    expect(screen.getByText(/Word Count:/)).toBeInTheDocument();
    expect(screen.getByText(/Word Frequency:/)).toBeInTheDocument();
    expect(screen.getByText(/Line Count:/)).toBeInTheDocument();
    expect(screen.getByText(/Char Count:/)).toBeInTheDocument();
    expect(screen.getByText(/Unique Char Frequency:/)).toBeInTheDocument();
    expect(screen.getByText(/Word Replacement:/)).toBeInTheDocument();
    expect(screen.getByText(/Word to be replaced:/)).toBeInTheDocument();
    expect(screen.getByText(/Replacement for said word:/)).toBeInTheDocument();
  });

  test('handleFiles', async () => {
    let app = render(<App />);

    const file = new File(['a bb ccc'], 'data.txt', {type: "text/plain;charset=utf-8"});
    const handleFileUploadMockFn = jest.fn();

    await waitFor(() => 
    fireEvent.change(app.getByTestId('upload-input'), {
      target: {files: [file]},
    }));

    let textfile = app.getAllByTestId('file-name').have
    expect(screen.getByText(/File uploaded: data.txt/)).toBeInTheDocument();
  
    await waitFor(() => {
        expect(handleFileUploadMockFn).not.toHaveBeenCalled();
      }
    );
  });
  test('wrong file for fileReader', () => {
    let app = render(<App />);
    const file = new File([], '');
    const mTxt = new Blob(["text inside this file"], {type: "text/plain;charset=utf-8"})

    const mEvent = { target: {files: [file]}};

  })
  test('handleSubmit', () => {
    const mockSubmit = jest.fn(() => {
      console.log("onSubmit");
    });
    const {getByTestId } = render(<App handleSubmit={mockSubmit} />);
    
    fireEvent.change(getByTestId("word-before-input"), { target: {value: 'a' }});
    fireEvent.change(getByTestId("new-word", { target: { value: 'one'}}));
    fireEvent.click(getByTestId("enter-input"));
    fireEvent.submit(getByTestId("form"));

    expect(mockSubmit).not.toHaveBeenCalled();
  });
});