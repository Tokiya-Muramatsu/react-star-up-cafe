import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div>
      <div className="search-form">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">検索</button>
          <a href="recommend">戻る</a>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
