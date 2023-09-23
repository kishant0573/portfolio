import React, { useState, useRef } from 'react';
import './Content.css';
import Navbar from './Navbar';

function Content() {
  const [content, setContent] = useState("KIshan");
  const contentRef = useRef(null);

  const handleCopyClick = () => {
    if (contentRef.current) {
      const range = document.createRange();
      range.selectNode(contentRef.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
    }
  };

//   const generateRandomContent = () => {
//     // Replace this with your logic to generate random content.
//     return 'Random Content: ' + Math.random();
//   };

  return (
    <>
    <Navbar/>
    <div className="containers">
      <div className="box" ref={contentRef}>
        {content}
      </div>
      <button onClick={handleCopyClick} className="copy-button">
        Copy
      </button>
    </div>
    </>
  );
}

export default Content;