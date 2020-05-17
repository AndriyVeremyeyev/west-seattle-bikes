import React from 'react';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Header(props){

//   const {onHomeClick, onBikesClick} = props;

//   const menuStyle ={
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr'
//   }

//   return(
//     <React.Fragment>
//       <h1>Welcome to West Seattle Bikes</h1>
//       <div style={menuStyle}>
//         <div>
//           <button type="button" className="btn btn-secondary" onClick={onHomeClick}>Home</button>
//         </div>
//         <div>
//           <button type="button" className="btn btn-secondary" onClick={onBikesClick}>Bikes</button>
//         </div>
//       </div>
//     </React.Fragment>
//   )
// }



return(
  <React.Fragment>
    <Link to='/'>
      <button type="button" className="btn btn-secondary">Home</button>
    </Link>
    <Link to='/bikes'>
      <button type="button" className="btn btn-secondary">Bikes</button>
    </Link>
    <h1>Welcome to West Seattle Bikes</h1>
  </React.Fragment>
)
}
// Header.propTypes = {
//   onHomeClick: PropTypes.func,
//   onBikesClick: PropTypes.func,
// }

export default Header;