import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const jsonPets = await res.json();

    setPets(jsonPets.pets);
  }

  function updateLocation(e) {
    setLocation(e.target.value);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
            onBlur={(e) => setAnimal(e.target.value)}
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
            onBlur={(e) => setBreed(e.target.value)}
          >
            {breeds.map((breed, key) => {
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
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
