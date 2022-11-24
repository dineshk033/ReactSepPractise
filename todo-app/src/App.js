import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task from "./component/todo";
import Layout from "./component";
import PageNotFound from "./component/404-page";
import About from "./component/about";
import Login from "./component/login";
import ProductLayout from "./component/productLayout";
import SingleProduct from "./component/single-product";
import Home from "./component/home";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Task />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/product" element={<ProductLayout />}>
            <Route index element={<About />} />
            <Route path=":productID" element={<SingleProduct />} />
          </Route>
          {/* <Route path="/home" element={<Layout />} /> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
