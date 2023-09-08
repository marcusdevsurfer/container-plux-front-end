import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ContainersSummary } from "./views/ContainersSummary";
import { DashboardView } from "./views/DashboardView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="containers-summary" element={<ContainersSummary />} />
            <Route path="dashboard" element={<DashboardView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
