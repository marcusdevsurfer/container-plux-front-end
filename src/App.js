import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ContainersSummary } from "./views/ContainersSummary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="containers-summary" element={<ContainersSummary />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
