import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import {getDogs} from "./helperDogs";
import Nav from "./Nav";


function App() {
  const dogsList = await getDogs();
  console.log(dogsList);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogsList={dogsList} />
        <Routes>
          <Route element={<DogList />} path="/" />
          <Route element={<DogDetails />} path="/dogs/:name" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
