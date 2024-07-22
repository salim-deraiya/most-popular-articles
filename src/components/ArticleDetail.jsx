import React from 'react';

const ArticleDetail = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.abstract}</p>
      <p><a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a></p>
    </div>
  );
};

export default ArticleDetail;
