import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Modal, ModalGateway} from 'react-images';

function NewsCard(props){

  const {title, body, author, date, imageUrl} = props;
  // const updatedDate = date.toDate().toISOString().slice(0,10).replace(/-/g, "/");
  const updatedDate = date.toDate().toString();

  const blockStyle = {
    marginBottom: '50px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }

  const imageStyle = {
    width: '300px' 
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleToggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    console.log('clicked');
  }


  // const openNewWindow = (bigurl, width, height) => {
  //     var newWindow = window.open("", "pictureViewer", 
  //         "location=no, directories=no, fullscreen=no, " + 
  //         "menubar=no, status=no, toolbar=no, width=" + 
  //         width + ", height=" + height + ", scrollbars=no");
  //     newWindow.document.writeln("<html>");
  //     newWindow.document.writeln("<body style='margin: 0 0 0 0;'>");
  //     newWindow.document.writeln("<a href='javascript:window.close();'>");
  //     newWindow.document.writeln("<img style='width:800px' src='" + bigurl + 
  //        "' alt='Click to close' id='bigImage'/>");
  //     newWindow.document.writeln("</a>");
  //     newWindow.document.writeln("</body></html>");
  //     newWindow.document.close();
  // }

  // const showImage = () => {
  //   if (isOpen){
  //     imageStyle = {
  //       width: '600px' 
  //     }
  //   } else {
  //     imageStyle = {
  //       width: '300px' 
  //     }
  //   }
  // }

  // showImage();

  return(
    <React.Fragment>
      <div style={blockStyle}>
        {/* <div> */}
        <ModalGateway>
          { modalIsOpen? (
          <Modal onClose={handleToggleModal}>
            <img src={imageUrl} alt="" style={imageStyle}/>
          </Modal>
          ) :null}
        </ModalGateway>
        {/* </div> */}
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