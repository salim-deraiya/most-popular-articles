import React from 'react';
import { render } from '@testing-library/react';
import ArticleDetail from '../components/ArticleDetail';

test('renders article detail', () => {
  const article = {
    title: 'Article Title',
    abstract: 'Article Abstract',
    url: 'http://example.com',
  };
  const { getByText } = render(<ArticleDetail article={article} />);
  expect(getByText('Article Title')).toBeInTheDocument();
  expect(getByText('Article Abstract')).toBeInTheDocument();
  expect(getByText('Read more')).toBeInTheDocument();
});
