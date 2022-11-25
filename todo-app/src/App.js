import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task from "./component/todo";
import Layout from "./component";
import PageNotFound from "./component/404-page";
import About from "./component/about";
import Login from "./component/login";
import ProductLayout from "./component/productLayout";
import SingleProduct from "./component/single-product";
import Home from "./component/home";
import RequireAuth from "./component/require-auth";
import AuthProvider from "./context";

//create context
export const AuthContext1 = React.createContext({ token: null });

function App() {
  return (
    <div className="container my-5">
      <AuthContext1.Provider
        value={{
          token: null,
          setToken: () => {
            this.token = 1;
          },
        }}
      >
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                  path="task"
                  element={
                    <RequireAuth>
                      <Task />
                    </RequireAuth>
                  }
                />
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
        </AuthProvider>
      </AuthContext1.Provider>
    </div>
  );
}

export default App;
