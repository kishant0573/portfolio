import Navbar from "./Navbar";
import { BsFillFilePersonFill,BsPencilSquare } from "react-icons/bs";
import Kishan from './Me.jpg';
import Code from './About.jpg'
import Did from './didw.PNG'

import './Home.css';
import { useState } from "react";


const Home = () => {
  const[about , setAbout] =useState('none');

  const handleAbout = () =>{
    setAbout('block');
  }
  
    return ( 
        <>
        <Navbar/>

   <div className="bob">
   <div className="con">

   <a href="#About" onClick={handleAbout}>
    <div className="glass gal1" data-text="About">
  
    <BsFillFilePersonFill style={{ fontSize: 50 }}/>
    
  </div>
  </a>
 
  <div className="glass gal2" data-text="Code">
   <BsPencilSquare  style={{ fontSize: 50 }} />
  </div>
  <div className="glass gal3" data-text="Launch"></div>
  <div className="glass gal4" data-text="Earn"></div>
</div>
   </div>
      
  <div  id="About" style={{display:about}}>
  <div className="main">
  <div className="carde">
    <div className="contents">
      <h2>image hover effect</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <a id="About_link" href="#">read more</a>
    </div>
    <img id="about_img" src={Code} />
  </div>
  <div id="middle" className="carde">
    <div className="contents">
      <h2>image hover effect</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <a id="About_link" href="#">read more</a>
    </div>
    <img id="about_img" src={Kishan} />
  </div>
  <div className="carde">
    <div className="contents">
      <h2>image hover effect</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <a id="About_link" href="#">read more</a>
    </div>
    <img id="about_img" src={Did} />
  </div>
</div>
  </div> 

  <div >
      
  </div>

        </>
     );
}
 
export default Home;