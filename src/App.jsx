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
        <div className="row justify-content-center">
          <div className="col-md-6">
            <input
              type="search"
              className="form-control bg-info mb-5"
              id="country"
              placeholder="Enter country(s) name! ✍️"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          {filteredCountries.map((country, index) => {
            return (
              <div key={index} className="col-md-4 mb-4">
                <div className="card p-3">
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
