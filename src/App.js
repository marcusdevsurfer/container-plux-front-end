import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContainerInventory } from "./components/ContainerInventory";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="containers-summary" element={<ContainerInventory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
