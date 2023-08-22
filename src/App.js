import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { ContainerInventory } from "./components/ContainerInventory";
import { AddContainer } from "./components/AddContainer";
import { Home } from "./components/Home";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
