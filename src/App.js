import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import {getDogs} from "./helperDogs";
import Nav from "./Nav";
import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5001/dogs";


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
        <Nav getDogs={ getDogs } dogs={ dogs } />
        <Routes>
          <Route element={<DogList dogs={ dogs } />} path="/" />
          <Route element={<DogDetails />} path="/dogs/:name" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
