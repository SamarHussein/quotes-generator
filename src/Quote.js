import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';

const url= 'https://type.fit/api/quotes';
const Quote = ()=> {
    const [quote , setQuote] = useState('qoute 1');


    const [index, setIndex] = useState(0);
    const { text,  author} = quote[index];
 
    const checkNumber = (number) => {
      if (number > quote.length - 1) {
        return 0;
      }
      if (number < 0) {
        return quote.length - 1;
      }
      return number;
    };
    const nextQuote = () => {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
      });
    };
    const prevQuote = () => {
      setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
      });
    };
 
    const getQuote = async () => {
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson)
        if (responseJson) {
                setQuote(responseJson);
            } 
      }

      useEffect(() => {
		getQuote();
  }, []);
  
    return (
        <article className="card card-block ">
        
            <p className='text'><span className='quote-icon'>
                <FaQuoteLeft />
            </span> {text}</p>
            <div className="row">
              <div  className='col-sm-8'>
                  <button className='btn btn-link btn-1' onClick={prevQuote}>
                      <FaChevronLeft />
                  </button>
                  <button className='btn btn-link' onClick={nextQuote}>
                      <FaChevronRight />
                  </button>
              </div>
              <div className="col-sm-4">
                <p className='author'><a id="link" href={`https://en.wikipedia.org/wiki/${author}`}>{author}</a></p>

              </div>
            </div>
        </article>
    );


}

export default Quote;