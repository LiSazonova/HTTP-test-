import s from './SearchForm.module.css';

const SearchForm = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    if (form.elements.topic.value.trim() === '') {
      alert('Please enter search term!');
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        name="topic"
        placeholder="Пошук статей..."
      />
      <button className={s.btn}>Пошук</button>
    </form>
  );
};

export default SearchForm;
