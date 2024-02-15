import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:9000";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCites() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("there was an error loading data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCites();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries" element={<p>list of countries</p>} />
          <Route path="form" element={<p>form</p>} />
        </Route>
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
