import React, { useEffect, useState } from 'react'
import { NewsItem } from './NewsItem';

export const Abp = () => {
  const[articles, setArticles] = useState([]);

  useEffect(() =>{
    const apiKey = process.env.REACT_APP_API_KEY;
    let url = `https://newsapi.org/v2/everything?domains=abplive.com&apiKey=${apiKey}`;
    fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

  });
  return (
    <div style={{ marginTop: '90px' }}>
      <h2 className="text-center">Latest <span className='badge bg-danger'>News</span></h2>
      {
        articles.map((news,Index)=>{
          return<NewsItem key={Index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })
      }
    </div>
  )
}
