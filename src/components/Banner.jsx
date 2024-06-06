import axios from 'axios';
import { useEffect, useState } from "react";
// import {useNavigate} from 'react-router-dom'

const Banner = () => {
  // const navigate = useNavigate();
  const [quote, setQuote] = useState({ quote: '', authname: '' });

  // const handleClick = () => {
  //   window.location.reload(); // Reload the page
  // };

  const getQuotes = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/quotes");
      console.log('API response:', res.data); // Debug log

      if (res.data && Array.isArray(res.data) && res.data.length > 0) {
        const randomIndex = Math.floor(Math.random() * res.data.length);
        const randomQuote = res.data[randomIndex];
        setQuote(randomQuote);
      } else {
        console.log("Error fetching data from backend: No data or empty array");
      }
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  useEffect(() => {
    getQuotes()
  }, []);

  const handleClick =()=>{
    getQuotes();
  }

  return (
    <>
      <div className='bg-hero-image h-screen flex justify-center items-center'>
        <div className='bg-transparent h-20 w-80 md:h-md:60 md:w-1/2 flex justify-center items-center text-white font-bold text-2xl md:text-4xl flex-col'>
          <p>{quote.quote || 'No quote available'}</p>
          <p className='mt-10 pl-14 md:pl-40 text-xl md:text-2xl'>{quote.authname || 'Unknown author'}</p>
        </div>
        <button 
        onClick={handleClick}
        className='bg-slate-500 rounded hover:bg-slate-700 transition-all duration-200 ease-in-out mt-64 -ml-20 font-semibold text-white px-2 py-2'>
          Next Quote
        </button>
      </div>
    </>
  );
}

export default Banner;
