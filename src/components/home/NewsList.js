import React from 'react';
import NewsCard from './NewsCard';
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';
import {Link} from 'react-router-dom';

function NewsList(){

  useFirestoreConnect([
    {collection: 'news'}
  ])
  const news = useSelector(state => state.firestore.ordered.news);

  const newsListStyle = {
    marginTop: '50px',
    marginBottom: '50px',
  }
  const sectionStyle={
    backgroundColor: '#F5F5F5',
    height: '100px',
    paddingLeft: '20px',
    paddingTop: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  }
  const buttonSection={
    paddingLeft: '350px',
    paddingTop: '25px'
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
    const someNews = news.slice(0, 1);
    return(
      <React.Fragment>
        <div style={sectionStyle}>
          <div>
           <h2>Community Bike News</h2>
          </div>
          <div style={buttonSection}>
            <Link to='/news'>
              <button className="btn btn-default">See More</button>
            </Link>
          </div>
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