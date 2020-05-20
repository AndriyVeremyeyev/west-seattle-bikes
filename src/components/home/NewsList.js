import React from 'react';
import NewsCard from '../news/NewsCard';
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';

function NewsList(){

  useFirestoreConnect([
    {collection: 'parts'}
  ])
  const news = useSelector(state => state.firestore.ordered.news);

  const newsListStyle = {
    marginTop: '50px',
    marginBottom: '50px',
  }
  const sectionStyle={
    backgroundColor: '#F5F5F5',
    height: '100px'
  }

  const newsCard = (item) => {
    return (<NewsCard
      title = {item.title}
      author = {item.author}
      body = {item.body}
      date = {item.timeOpen}
      imageUrl = {item.imageUrl}
      id = {item.id}
      key = {item.id}
    />
    )
  }

  if (isLoaded(news)){
    const someNews = news.slice(0, 3);
    return(
      <React.Fragment>
        <div style={sectionStyle}>
          <h1>Community Bike News</h1>
        </div>
        <div style={newsListStyle}>
          {someNews.map(item => newsCard(item))}
        </div>
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

export default NewsList;