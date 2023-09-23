import React, { useState , useEffect } from 'react';
import './AnimatedText.css';
import robot from './robot.png';



import Content from './Content';
import Home from './Home';

function AnimatedText() {
  

  const [isLoading, setIsLoading] = useState(true); // Added loading state


  useEffect(() => {
    // Simulate loading time with a delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed
  }, []);




  return (
    <div className='container-fluid'>
    
      {isLoading ? ( // Display the loading message or spinner
        <div className="loading"> 
        
        <div className="container-fluid">
        <div className="text">
            <span className="letter">K</span>
            <span className="loading-text">
      
    </span>
            <span className="letter">s</span>
            <span className="loading-text-h"></span>
            <span className="letter">a</span>
            <span className="loading-text-n"></span>
        </div>
        
    </div>
        
        
        </div>
      ) : (
        <>
        <Home></Home>
   
    
        </>
      )}
    
    </div>
  );
};

export default AnimatedText;

