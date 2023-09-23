// import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import Logo from './logo1.png';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    
    <nav className="navbar">
      
        <div className="navbar-left">
          <a href ="/">
          <img src={Logo} alt="Logo1" />
          </a>
      </div>
        <div className='rope'></div>
      <div className="navbar-content">
      <Link to="/home">Home</Link>
      <Link to="/projects">Projects</Link>
        <a href="https://github.com/kishant0573">GitHub</a>
        
        <Link to="/code">Code</Link>
      </div>
    </nav>
  );
}

export default Navbar;


// import React from 'react';
// import './Navbar.css'; // Import your CSS file

// function Navbar() {
//   return (
//     <div className="navbar-container">
//       <div className="navbar">
//         <div className="logo">Logo</div>
//         <div className="nav-links">
//           <a href="#">Home</a>
//           <a href="#">Projects</a>
//           {/* Add more links as needed */}
//         </div>
//         <div className="user-menu">
//           {/* Add user menu items here */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;