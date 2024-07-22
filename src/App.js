import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { fetchMostPopularArticles } from './api/popular_articles';
import MostPopularArticles from './components/MostPopularArticles';
import ArticleDetail from './components/ArticleDetail';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const articles = await fetchMostPopularArticles();
      setArticles(articles);
    };
    fetchData();
  }, []);

  /* const getArticleById = (id) => {
    return articles.find(article => article.id === parseInt(id));
  }; */

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MostPopularArticles articles={articles} />} />
        <Route 
          path="/article/:id" 
          element={<ArticleDetailLoader articles={articles} />} 
        />
      </Routes>
    </Router>
  );
};

const ArticleDetailLoader = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));
  return article ? <ArticleDetail article={article} /> : <p>Article not found</p>;
};

export default App;