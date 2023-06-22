import { useState } from 'react';

const Form = ({ handleSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  // метод який буде відправляти форму
  const formSubmit = ev => {
    ev.preventDefault();
    handleSubmit(search);
    setSearch('');
  };

  return (
    <form onSubmit={formSubmit}>
      <input onChange={handleSearch} value={search} type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

export { Form };
