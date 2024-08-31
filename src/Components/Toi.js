import React, { useEffect, useState } from 'react';
import { NewsItem } from './NewsItem';

export const Toi = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY; // Access the environment variable

    if (!apiKey) {
      // Handle the case where the API key is not defined
      console.error('VITE_API_KEY environment variable is not set');
      return;
    }

    let url = `https://newsapi.org/v2/everything?domains=indiatimes.com&apiKey=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, []);

  return (
    <div style={{ marginTop: '90px' }}>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index) => (
        <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
};