const SearchFilter = ({ setSearch }) => {
  return (
    <input
      className="w-full p-2 border rounded mb-3"
      placeholder="Search by name..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchFilter;