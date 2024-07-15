import { useEffect, useState } from 'react';
import ArticleList from './components/ArticleList/ArticleList';
import SearchForm from './components/SearchForm/SearchForm';
import s from './App.module.css';
import { fetchArticlesWithTopic } from './api/articles-api';
import PacmanLoader from 'react-spinners/PacmanLoader';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async topic => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const data = await fetchArticlesWithTopic('react');
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  const override = {
    display: 'block',
    margin: '0 auto',
  };

  return (
    <div>
      <h1 className={s.title}>Latest articles</h1>
      {error && (
        <p className={s.error}>
          Whoops, something went wrong! Please try reloading this page!
        </p>
      )}
      <SearchForm onSearch={handleSearch} />
      {loading ? (
        <PacmanLoader
          color="#1cc246"
          cssOverride={override}
          loading
          margin={2}
          size={50}
          speedMultiplier={1}
        />
      ) : (
        articles.length > 0 && <ArticleList items={articles} />
      )}
    </div>
  );
};

export default App;
