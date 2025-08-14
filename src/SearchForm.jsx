import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    if (!value) return;
    setSearchTerm(value);
  };
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="form-input search-input"
          type="text"
          name="search"
          placeholder="cat"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
