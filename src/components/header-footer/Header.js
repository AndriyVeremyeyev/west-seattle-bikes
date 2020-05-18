import React from 'react';
import {Link} from 'react-router-dom';

function Header(props){

  return(
    <React.Fragment>
      <Link to='/'>
        <button type="button" className="btn btn-secondary">Home</button>
      </Link>
      <Link to='/bikes'>
        <button type="button" className="btn btn-secondary">Bikes</button>
      </Link>
      <Link to='/parts'>
        <button type="button" className="btn btn-secondary">Parts</button>
      </Link>
      <h1>Welcome to West Seattle Bikes</h1>
    </React.Fragment>
  )
}

export default Header;