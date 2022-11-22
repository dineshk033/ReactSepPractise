import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component";
import Task from "./component/todo";
import PageNotFound from "./component/404-page";
import About from "./component/about";
import Login from "./component/login";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Task />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
