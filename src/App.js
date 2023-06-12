import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./Routes/Home/Home";
import Navigation from "./Routes/Navigation/Navigation";
import Authentication from "./Routes/Authentication/Authentication";
import Shop from "./Components/Shop/Shop";
import CartCheckOut from "./Components/CartCheckOut/CartCheckOut";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="check-out" element={<CartCheckOut />} />
      </Route>
    </Routes>
  );
}

export default App;
