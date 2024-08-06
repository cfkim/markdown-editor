import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { FaBold, FaItalic, FaHeading, FaStrikethrough, FaListUl, FaListOl,
  FaQuoteRight, FaCode, FaTable, FaLink
 } from 'react-icons/fa';
import { MdChecklist } from "react-icons/md";


function App() {
  const [value, setValue] = useState("");
  
  function updatePreview(e) {
    setValue(e.target.value);
  }

  function addTool(tool) {
    setValue(prevValue => prevValue + tool + '\n');
  }

  return (
    <div className="main">
      <div className="toolbar-container">
        <div className="toolbar">
        <FaBold className="icon-style" onClick={() => addTool('**Bold Text**')} />
          <FaItalic className="icon-style" onClick={() => addTool('*Italic Text*')} />
          <FaHeading className="icon-style" onClick={() => addTool('# Heading 1')} />
          <FaStrikethrough className="icon-style" onClick={() => addTool('~~Strikethrough~~')} />
          <FaListUl className="icon-style" onClick={() => addTool('- List Item 1\n- List Item 2')} />
          <FaListOl className="icon-style" onClick={() => addTool('1. List Item 1\n2. List Item 2')} />
          <MdChecklist className="icon-style" onClick={() => addTool('- [ ] Task 1\n- [ ] Task 2')} />
          <FaQuoteRight className="icon-style" onClick={() => addTool('> Blockquote Text')} />
          <FaCode className="icon-style" onClick={() => addTool('`Code Snippet`')} />
          <FaTable className="icon-style" onClick={() => addTool('| Name   | Age |\n|--------|-----|\n| Alice  | 24  |\n| Bob    | 30  |')} />
          <FaLink className="icon-style" onClick={() => addTool('[Link Text](http://example.com)')} />
        </div>
        
    </div>
      <div className="main__content">
        <div className="editor__container">
          <div className="editing__box">
            <textarea name="input" id="input" onChange={updatePreview} value={value}></textarea>
          </div>
        </div>
        <div className="preview__container">
          <div className="preview__content">
            <div className="preview__text">
              <ReactMarkdown id="preview" remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
  );
}


export default App;
