import React from 'react';
import NewsCard from './NewsCard';
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';

function NewsList(){

  useFirestoreConnect([
    {collection: 'news'}
  ])

  const news = useSelector(state => state.firestore.ordered.news);

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
    return(
      <React.Fragment>
        <h1>Community Bike News</h1>
        <div>
          {news.map(item => newsCard(item))}
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