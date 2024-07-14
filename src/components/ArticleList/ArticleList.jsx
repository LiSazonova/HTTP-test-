import s from './ArticleList.module.css';

const ArticleList = ({ items }) => (
  <ul className={s.articles}>
    {items.map(({ objectID, url, title }) => (
      <li className={s.articles_item} key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default ArticleList;
