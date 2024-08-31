import React, { useEffect, useState } from 'react';
import { NewsItem } from './NewsItem';

export const Bbc = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    let url = `https://newsapi.org/v2/everything?domains=bbc.com&apiKey=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, []);

  return (
    <div >
      <h2 className="text-center" style={{ marginTop: '90px' }}>Latest <span className='badge bg-danger'>News</span></h2>
      {articles.map((news, index) => {
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />;
      })}
    </div>
  );
};
