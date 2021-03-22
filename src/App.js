/**
  Author: Sergio J Falcon
  Date: March 22nd, 2021
  Course: CS5103 - Software Engineering
  Project: Word Statistics
**/

import React, { useState, useEffect } from 'react';

import { printCleanList, cleanList, wordCount, wordFrequency, lineCount, charCount, uniqueCharFrequency } from './manipulation';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const [fileName, setFileName] = useState('');
  
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
     
    return (
      <div className="App">
      <div className="header">
        <h4>Created By: Sergio J Falcon</h4>
      </div>
        {!fileName ? <h1>Upload a file to run Word Statistics</h1>
        : <h1>File uploaded: {fileName}</h1>}
        <div class="container">
          <div class="button-wrap">
            <label class="button" for="upload">Upload File</label>
            <input id="upload" type="file" onChange={(e) => handleFiles(e, 0)}></input>
          </div>
        </div>
        <div className='text'>
          {text ? printCleanList(cleanList(text)) : <p>empty</p>}
        </div>
        <div className="function_container">
          <div class="column">
            <h2>Word Count: </h2><p>{wordCount(text)}</p>
          </div>
          <div class="column">
            <h2>Word Frequency: </h2>
              {text ? (wordFrequency(text).map(entry =>(
                <p>{entry.word}: {entry.counter}</p>
              ))) : null}
          </div>
          <div class="column">
            <h2>Line Count: </h2>
            <p>{lineCount(text)}</p>
          </div>
          <div class="column">
            <h2>Char Count: </h2><p>{charCount(text)}</p>
          </div>
          <div class="column">
            <h2>Unique Char Frequency: </h2>
            {text ? (uniqueCharFrequency(text).map(entry => (
              <p>{entry.character}: {entry.counter}</p>
            ))) : null}
          </div>
        </div>
      </div>
    );
}

export default App;
