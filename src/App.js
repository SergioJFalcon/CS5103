/**
  Author: Sergio J Falcon
  Date: May 6th, 2021
  Course: CS5103 - Software Engineering
  Project: Word Statistics
**/

import React, { useState, useEffect } from 'react';
import { useInput } from './hooks/input-hook';

import { printCleanList, cleanList, wordCount, wordFrequency, lineCount, charCount, uniqueCharFrequency, replaceWord } from './manipulation';

import './App.css';


function App() {
  const [text, setText] = useState('');
  const [fileName, setFileName] = useState('');

  const { value: previousWord, bind:bindPreviousWord, reset:resetPreviousWord} = useInput('');
  const { value: replacementWord, bind:bindReplacementWord, reset:resetReplacementWord} = useInput('');


  useEffect(() => {
    document.title = `File name is ${fileName}`;
  })

  const handleFiles = (e) => {
    const reader = new FileReader();
    let file = e.target.files[0];
    setFileName(file.name);
  
    reader.readAsText(e.target.files[0]);

    reader.onload = function () {
      setText(reader.result);
    };
    reader.onerror = function () {
      console.log(reader.error);
    };
  }

  const handleSubmit = event => {
    event.preventDefault();

    setText(replaceWord(text, previousWord, replacementWord));
    resetPreviousWord();
    resetReplacementWord();
  }
    return (
      <div className="App">
      <div className="header">
        <h4>Created by: Sergio J Falcon</h4>
      </div>

        {!fileName ? <h1>Upload a file to run Word Statistics</h1>
        : <h1 data-testid="file-name">File uploaded: {fileName}</h1>}
        <div className="container">
          <div className="button-wrap">
            <label className="button" htmlFor="uploadFile">Upload File</label>
            <input id="uploadFile" type="file" data-testid="upload-input" onChange={(e) => handleFiles(e, 0)}></input>
          </div>
        </div>
        <div className='text' data-testid="file-text">
          {text ? printCleanList(cleanList(text)) : <p>empty</p>}
        </div>
        <div className="function_container">
          <div className="column">
            <h2 title="word-count">Word Count: </h2>
            <p>{wordCount(text)}</p>
          </div>
          <div className="column">
            <h2>Word Frequency: </h2>
              {text ? (wordFrequency(text).map(entry =>(
                <p key={entry.word}>{entry.word}: {entry.counter}</p>
              ))) : null}
          </div>
          <div className="column">
            <h2>Line Count: </h2>
            <p>{lineCount(text)}</p>
          </div>
          <div className="column">
            <h2>Char Count: </h2>
            <p>{charCount(text)}</p>
          </div>
          <div className="column">
            <h2>Unique Char Frequency: </h2>
            {text ? (uniqueCharFrequency(text).map(entry => (
              <p key={entry.character}>{entry.character}: {entry.counter}</p>
            ))) : null}
          </div>
          <div className="column">
              <h2>Word Replacement: </h2>
              <form id="form-id" onSubmit={handleSubmit} data-testid="form">
                <div>
                  <label>Word to be replaced: </label>
                  <input type="text" data-testid="word-before-input" {...bindPreviousWord} />
                </div>
                
                <div>
                  <label>Replacement for said word:</label>
                  <input type="text" data-testid="new-word" {...bindReplacementWord} />
                </div>
                <button form="form-id" type="submit" data-testid="enter-input">enter</button>
              </form>
              <p>{text}</p>
          </div>
        </div>
      </div>
    );
}

export default App;
