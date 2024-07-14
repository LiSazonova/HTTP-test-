import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList from './components/ArticleList/ArticleList';
import s from './App.module.css';
import ClipLoader from 'react-spinners/ClipLoader';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        // 1. Встановлюємо індикатор в true перед запитом
        setLoading(true);
        const response = await axios.get(
          'https://hn.algolia.com/api/v1/search?query=react',
        );
        setArticles(response.data.hits);
      } catch (error) {
        // Тут будемо обробляти помилку
      } finally {
        // 2. Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1 className={s.title}>Latest articles</h1>
      {loading ? (
        <ClipLoader
          color={'#747474'}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        articles.length > 0 && <ArticleList items={articles} />
      )}
    </div>
  );
};

export default App;
