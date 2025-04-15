import { useState } from 'react'; 

const SearchBar = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState('');
  
    const handleSearch = (e) => {
      const value = e.target.value;
      setSearchInput(value);
      onSearch(value);
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Hledat v poznámkách..."
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
    );
  };
  
  export default SearchBar;