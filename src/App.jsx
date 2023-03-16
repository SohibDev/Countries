import "./App.css";
import countries from "./Countries";
function App() {
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
          />
        <div className="error-message"></div>
        <div className="d-flex justify-content-around flex-wrap">
        {countries.map((country) => {
          return (
            <>
                <div class="card w-25 p-3 m-2">
                  <img src={country.flags.png} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{country.name.common}</h5>
                    <p class="card-text">{country.translations.tur.official}</p>
                    <a href={country.maps.googleMaps} class="btn btn-primary">
                      Tap to see Map
                    </a>
                  </div>
                </div>
            </>
          );
        })}
        </div>
      </div>
    </>
  );
}

export default App;
