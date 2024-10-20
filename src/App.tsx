import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import NotFound from "./pages/Not-found";
import SideBarComponent from "./components/Sidebar";
import AddProduct from "./pages/AddProduct";
import Completed from "./pages/Completed";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Router>
        <div className="lg:flex lg:flex-1 md:flex">
          <SideBarComponent />
          <div className="lg:flex-1">
            <Routes>
              <Route path="/products" element={<Products />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/completed" element={<Completed />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
