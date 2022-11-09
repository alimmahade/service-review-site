import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContextApi } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { logInUser } = useContext(ContextApi);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;
    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        form.reset();
        navigate(from, { replace: true });

        // const user=result.user;
        // console.log(user)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="/signup">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Login</button>
            </div>
          </form>
          {/* new user Register */}
          <p>
            New to this Website ?{" "}
            <Link to="/signup" className="text-orange-700">
              Please SignUp
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
