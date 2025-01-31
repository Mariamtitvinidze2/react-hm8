import React, { useState } from 'react';
import '../Texts/Texts.css';
import Icon from '../../../assets/icon/Path.png';

const Texts = ({ author, quote }) => {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <div className='TextContainer'>
      <div className='TextHeader'>
        <h1 className='Text'>{author}</h1>
        <img 
          className='Icon' 
          src={Icon} 
          alt="Icon" 
          onClick={() => setShowQuote(!showQuote)} 
        />
      </div>
      <div className={`quote-container ${showQuote ? 'visible' : 'hidden'}`}>
        <p className="quote">{quote}</p>
      </div>
      <hr className="line" />
    </div>
  );
};

export default Texts;