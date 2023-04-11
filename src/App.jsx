import { useState } from "react";
import countries from "./Countries";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 className="text-center bg-success pt-3 pb-3">
        Enter your country name! 🌍
      </h1>
      <div className="container p-3">
        <input
          type="search"
          className="form-control w-50 mx-auto bg-info mb-5"
          id="country"
          placeholder="Enter country(s) name! ✍️"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <div className="error-message"></div>
        <div className="d-flex justify-content-around flex-wrap">
          {filteredCountries.map((country, index) => {
            return (
              <div key={index} className="card w-25 p-3 m-2">
                <img
                  src={country.flags.png}
                  className="card-img-top"
                  alt="..."
                />

                <div className="card-body">
                  <h5 className="card-title">{country.name.common}</h5>
                  <p className="card-text">
                    {country.translations.tur.official}
                  </p>
                  <a href={country.maps.googleMaps} className="btn btn-primary">
                    Tap to see Map
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
