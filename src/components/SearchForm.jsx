import { useGlobalContext } from "../context/Context";

export const SearchForm = () => {
  const { setSearchVal } = useGlobalContext();
  const handleSubmit = (event) => {
    event.preventDefault();

    const searchValue = event.target.elements.search.value;
    if (!searchValue) return;
    setSearchVal(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplash Image Search</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="nature"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};
