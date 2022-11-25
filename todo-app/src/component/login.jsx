import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AxiosInstance } from "../axios";
import { AuthContext } from "../context";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  let location = useLocation();
  let value = useContext(AuthContext);
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    value.login(state, () => {
      navigate(from, { replace: true });
    });
    // AxiosInstance.post("/user/login", state)
    //   .then((res) => {
    //     console.log(res);
    //     localStorage.setItem("jwt_token", res.token);
    //     navigate(from, { replace: true });
    //   })
    //   .catch((err) => console.log(err));
  };
  const handleChange = (event) => {
    const name = event.target.name;
    setState({ ...state, [name]: event.target.value });
  };
  return (
    <div className="vh-100  row justify-content-center align-items-center">
      <div className="card col-12 col-md-8 col-lg-5">
        <form className="card-body" onSubmit={handleSubmit}>
          <h5 className="card-title text-center mb-4">Login</h5>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-4 col-form-label">
              Email
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                id="staticEmail"
                name="email"
                value={state.email}
                onChange={handleChange}
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-4 col-form-label">
              Password
            </label>
            <div className="col-8">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary float-end">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
