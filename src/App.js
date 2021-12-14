import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Homepage from './pages/Homepage';
import MyMoviesPage from "./pages/MyMoviesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/my-movies" element={<MyMoviesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
