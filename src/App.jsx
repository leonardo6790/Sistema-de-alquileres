import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/sign-in/sign-in.component";
import FrontPage from "./pages/front-page/front_page.page";
import HomeSeller from "./pages/home_seller/home_seller.page";
import CreateUser from "./pages/home_seller/create_user/create_user.component";
import Contact from "./pages/contact/contact.component";
import Inventario from "./pages/Inventario/Inventario";
import Ordenes from "./pages/Ordenes/Ordenes";
import Clientes from "./pages/Clientes/Clientes";
function App() {
  return (

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/PreguntasFrec" element={<Contact />} />
        <Route path="/HomeSeller" element={<HomeSeller />} />
        <Route path="/HomeSeller/CreateUser" element={<CreateUser />} />
        <Route path="/Inventario" element={<Inventario />} />
        <Route path="/Ordenes" element={<Ordenes />} />
        <Route path="/Clientes" element={<Clientes />} />
      </Routes>

  );
}

export default App;
