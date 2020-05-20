import React, {useState} from 'react';
import NewsList from './NewsList';
import AddNewsForm from './AddNewsForm';

function NewsPageController(){

  const [addNewsFormVisible, setAddNewsFormVisible] = useState(false);

  const handleToggleAddNewsForm = () => {
    setAddNewsFormVisible(!addNewsFormVisible);
  }

   const handleAddingNewsToList = () => {
    setAddNewsFormVisible(false);
  }

  const setCurrentlyVisibleState = () => {  
     if (addNewsFormVisible){
      return {
        component: 
          <AddNewsForm
            onNewsCreation = {handleAddingNewsToList}
          />,
        buttonText: "Back to news"
      }
    }  else {
      return {
        component: <NewsList/>,
        buttonText: "Add News"
      }
    }
  }  

  const visibleState = setCurrentlyVisibleState();

  return(
    <React.Fragment>
      <button type="button" className="btn btn-secondary" onClick={handleToggleAddNewsForm}>{visibleState.buttonText}</button>
      {visibleState.component}
    </React.Fragment>
  )
}

export default NewsPageController;