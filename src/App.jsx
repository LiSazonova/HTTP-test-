import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList from './components/ArticleList/ArticleList';
import s from './App.module.css';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        'https://hn.algolia.com/api/v1/search?query=react',
      );
      setArticles(response.data.hits);
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1 className={s.title}>Latest articles</h1>
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default App;
