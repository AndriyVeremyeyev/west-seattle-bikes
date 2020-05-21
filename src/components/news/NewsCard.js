import React from 'react';
import PropTypes from 'prop-types';
import ModalImage from 'react-modal-image';

function NewsCard(props){

  const {title, body, author, date, imageUrl} = props;
  const updatedDate = date.toDate().toISOString().slice(0,10).replace(/-/g, "/");
  // const updatedDate = date.toDate().toString();

  const blockStyle = {
    marginBottom: '50px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }

  const imageStyle = {
    width: '300px' 
  }

  return(
    <React.Fragment>
      <div style={blockStyle}>
        <div style={imageStyle}>
          <ModalImage
          small={imageUrl}
          large={imageUrl}
          alt=''
          />
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