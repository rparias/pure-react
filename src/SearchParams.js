import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit"];
const BREEDS = [];

const SearchParams = () => {
  const [location, setLocation] = useState("Quito, EC");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

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
            onBlur={updateLocation}
          />
        </label>
        <label htmlFor="animal">
          <select
            name="animal"
            id="animal"
            onChange={(e) => setAnimal(e.target.value)}
          >
            {ANIMALS.map((animal, key) => {
              return (
                <option value={animal} key={key}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="breed">
          <select
            name="breed"
            id="breed"
            onChange={(e) => setBreed(e.target.value)}
          >
            {BREEDS.map((breed, key) => {
              return (
                <option value={breed} key={key}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
