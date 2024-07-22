const API_KEY = 'R6ojIOmmM4H6MW4zDuiTr6mxx0Z28ZJ8';
const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed';

export const fetchMostPopularArticles = async (period = 1) => {
  const response = await fetch(`${BASE_URL}/${period}.json?api-key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};
