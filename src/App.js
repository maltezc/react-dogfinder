import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Nav from "./Nav";
import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5001/dogs";

/** App for displaying list of dogs
 *
 * Props:
 * - None
 *
 * State:
 * - dogs: array of dog objects
 * - isLoaded: indicates whether API request to dogs API
 *             has resolved
 *
 * App -> DogList
 */
function App() {
  const [dogs, setDogs] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  /** Component that retrieves list of dogs */
  async function getDogs() {
    const response = await axios.get(BASE_URL);
    const dogsList = response.data;
    setIsLoaded(true);
    setDogs(dogsList);
  }

  console.log({dogs});

  if (!isLoaded) {
    getDogs();
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={ dogs } />
        <Routes> {/* could refactor to be its own route list.  */}
          <Route element={<DogList dogs={ dogs } />} path="/" />
          <Route element={<DogDetails dogs={ dogs } />} path="/dogs/:name" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
