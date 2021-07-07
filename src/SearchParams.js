import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit"];
const BREEDS = [];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

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
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
