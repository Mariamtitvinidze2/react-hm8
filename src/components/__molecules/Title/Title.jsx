import React, { useEffect, useState } from 'react';
import '../Title/Title.css';
import Texts from '../Texts/Texts';
import axios from 'axios'; 

const Title = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/quotes') 
      .then(response => {
        const firstFive = response.data.quotes.slice(3, 8); 
        setQuotes(firstFive);
      })
      .catch(error => console.error("Error fetching quotes:", error)); 
  }, []);

  return (
    <div className='MainDiv'>
      <h2 className='Title'>FAQ</h2>
      <div className='Texts'>
        {quotes.map((quote, index) => (
          <Texts key={index} author={quote.author} quote={quote.quote} />
        ))}
      </div>
    </div>
  );
};

export default Title;   
