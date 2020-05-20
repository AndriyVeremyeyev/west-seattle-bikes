import React from 'react';
import PropTypes from 'prop-types'

function NewsCard(props){

  const {title, body, author, date, imageUrl} = props;

  const updatedDate = date.toDate().toISOString().slice(0,10).replace(/-/g, "/");

  const blockStyle = {
    marginBottom: '50px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }

  const imageStyle = {
    width: '300px' 
  }

  // const dateToString = (someDate) => {
  //   let mm = someDate.getMonth() + 1;
  //   let dd = someDate.getDate();

  //   return [someDate.getFullYear(),
  //     (mm>9 ? '' : '0') + mm,
  //     (dd>9 ? '' : '0') + dd
  //    ].join('');
  // }


  return(
    <React.Fragment>
      <div style={blockStyle}>
        <div>
          <img style={imageStyle} src={imageUrl} alt=""/>
        </div>
        <div>
          <h3>{title}</h3>
          <p>Posted on {updatedDate} by {author}</p>
          <p>{body}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

NewsCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.object,
  imageUrl: PropTypes.string,
}

export default NewsCard;