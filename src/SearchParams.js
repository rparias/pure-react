import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Quito, EC");

  function updateLocation(e) {
    setLocation(e.target.value);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input
            id="location"
            value={location.toUpperCase()}
            type="text"
            placeholder="Location"
            onChange={updateLocation}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
