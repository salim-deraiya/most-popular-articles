import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MostPopularArticles from '../components/MostPopularArticles';

test('renders article list', () => {
  const articles = [
    { id: 1, title: 'Article 1' },
    { id: 2, title: 'Article 2' },
  ];
  const { getByText } = render(
    <Router>
      <MostPopularArticles articles={articles} />
    </Router>
  );
  expect(getByText('Article 1')).toBeInTheDocument();
  expect(getByText('Article 2')).toBeInTheDocument();
});
