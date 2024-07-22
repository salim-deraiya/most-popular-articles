import React from 'react';
import { Link } from 'react-router-dom';

const MostPopularArticles = ({ articles }) => {
  return (
    <div>
      <h1>Most Popular Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostPopularArticles;
