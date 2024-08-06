import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';

function App() {
  const [value, setValue] = useState("");
  function updatePreview(e) {
    setValue(e.target.value);
  }



  return (
    <div className="App">
      <header className="App-header">
        <div className="main__content">
          <div className="editor__container">
            <h2>Write</h2>
            <div className="editing__box">
              <textarea name="input" id="input" onChange={updatePreview} value={value}></textarea>
            </div>
          </div>
          
          <div className="preview__content">
            <h2>Preview</h2>
            <div className="preview__text">
              <ReactMarkdown id="preview">{value}</ReactMarkdown>
              <p></p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}


export default App;
