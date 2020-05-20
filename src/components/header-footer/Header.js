import React from 'react';
import {NavLink} from 'react-router-dom';
import firebase from '../../firebase';
import PropTypes from 'prop-types';
import Logo from '../../featured/images/Logo/logo_01.jpg'
import './css/Header.css'

function Header(props){

  const {userSignInStatus, userName} = props;

  // const buttonsStyle = {
  //   display: 'flex',
  //   justifyContent: 'center'
  // }

  function doSignOut(){
    firebase.auth().signOut().then(function(){
      console.log('Successfully signed out!');
    }).catch((error) => {
      console.log(error.message);
    })
  }

  // const setVisibility = () => {
  //   if (userSignInStatus) {
  //     return (
  //       <React.Fragment>
  //         <Link to="/signin">
  //         <button type="button" className="btn btn-secondary" >My cabinet</button>
  //         </Link>
  //         <Link to="/">
  //           <button 
  //             type="button" 
  //             className="btn btn-secondary" 
  //             onClick={() => doSignOut()}
  //           >Sign Out</button>
  //         </Link>
  //       </React.Fragment>
  //     )
  //   } else {
  //     return (
  //       <React.Fragment>
  //       <Link to="/register">
  //         <button type="button" className="btn btn-secondary">Register</button>
  //       </Link>
  //       <Link to="/signin">
  //         <button type="button" className="btn btn-secondary" >Sign In</button>
  //       </Link>
  //     </React.Fragment>
  //     )
  //   }
  // }


  const setVisibility = () => {
    if (userSignInStatus) {
      return (
        <React.Fragment>
          <NavLink  to="/signin">My cabinet</NavLink>
          <NavLink  onClick={() => doSignOut()} to="/">Sign Out</NavLink>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
        <NavLink  to="/register">Register</NavLink>
        <NavLink  to="/signin">Sign In</NavLink>
      </React.Fragment>
      )
    }
  }

  // return(
  //   <React.Fragment>
  //     <div style={buttonsStyle}>
  //       <Link to='/'>
  //         <button type="button" className="btn btn-secondary">Home</button>
  //       </Link>
  //       <Link to='/bikes'>
  //         <button type="button" className="btn btn-secondary">Bikes</button>
  //       </Link>
  //       <Link to='/parts'>
  //         <button type="button" className="btn btn-secondary">Parts</button>
  //       </Link>
  //       {setVisibility()}
  //       </div>
  //       <div class="header">
  //       <a href="#default" class="logo">West Seattle Bikes</a>
  //       <div class="header-right">
  //         <a class="active" href="#home">Home</a>
  //         <a href="#contact">Contact</a>
  //         <a href="#about">About</a>
  //       </div>
  //     </div>
  //   </React.Fragment>
  // )

  return(
    <React.Fragment>
      <div className="header">
        {/* <img src={Logo} alt=''></img> */}
        <a href="#default" class="logo">West Seattle Bikes</a>
        <div className="header-right">
          <NavLink exact={true} to='/'>Home</NavLink>
          <NavLink to='/bikes'>Bikes</NavLink>
          <NavLink to='/parts'>Parts</NavLink>
          {setVisibility()}
        </div>
      </div>
    </React.Fragment>
  )  
}

Header.propTypes = {
  userSignInStatus: PropTypes.bool,
  userName: PropTypes.string,
}

export default Header;