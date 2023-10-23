import "./App.css";
import ModifStudent from "./components/ModifStudent";
import AddStudent from "./components/AddStudent";
import Students from "./components/Students";
import AppBar from "./components/AppBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route exact path="/" element={<Students />} />
          <Route exact path="/add" element={<AddStudent />} />
          <Route exact path="/modif" element={<ModifStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
