import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import './Code.css'
import Code3 from './Code.jpg'
import { Link } from 'react-router-dom';
const value= ` `;


function Code() {
  return (
    <>
    <Navbar /> 
    <div className="Apps Overlay">
      {/* <table className="App-table table-primary"> */}
      <table className="table App-table table-primary table-striped custom-table">

      


        <thead>
          <tr>
            
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
            {/* <td>Learn React
              <Link className="btn btn-primary Links" to='/content' role="button">Link</Link>
</td> */}
            <td><a href='#'> Build a website</a>
            <a className="btn btn-primary Links" href="#" role="button">Link</a></td>
          </tr>
          <tr>
            
            <td><a href='#'> Build a website</a>
            <a className="btn btn-primary Links" href="#" role="button">Link</a></td>
          </tr>
          <tr>
           
            {/* <td>Write a blog post
            <a className="btn btn-primary Links" href="#" role="button">Link</a>
            </td> */}
            <td><a href='#'> Build a website</a>
            <a className="btn btn-primary Links" href="#" role="button">Link</a></td>
          </tr>
          <tr>
           
            {/* <td>Read a book
            <a className="btn btn-primary Links" href="#" role="button">Link</a>
            </td> */}
            <td><a href='#'> Build a website</a>
            <a className="btn btn-primary Links" href="#" role="button">Link</a></td>
          </tr>
          <tr>
            
            {/* <td>Watch a movie
            <a className="btn btn-primary Links" href="#" role="button">Link</a>
            </td> */}
            <td><a href='#'> Build a website</a>
            <a className="btn btn-primary Links" href="#" role="button">Link</a></td>
          </tr>
          <tr>
            
            {/* <td>Watch a movie
            <a className="btn btn-primary Links" href="#" role="button">Link</a>
            </td> */}
            <td><a href='#'> Build a website</a>
            <a className="btn btn-primary Links" href="#" role="button">Link</a></td>
          </tr>
        </tbody>
      </table>
    </div>

    </>
  );
}

export default Code;