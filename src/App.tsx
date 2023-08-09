import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Decks from "./pages/Decks";

// export const BASE_URL = "http://localhost:3000";
export const BASE_URL = "https://dem0-project.onrender.com";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/decks/:deckId" element={<Decks />}></Route>
      </Routes>
    </>
  );
}

export default App;
