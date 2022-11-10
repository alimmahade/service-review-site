import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContextApi } from "../../Context/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(ContextApi);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const img = form.img.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(img, name, email, password);

    createUser(email, password)
      .then((result) => {
        form.reset();
        updateUserProfile(name, img)
          .then((res) => {
            alert("ok");
            const user = res.user;
            console.log(user);
          })
          .catch((err) => console.log(err));
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const cretential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user, cretential);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Img</span>
              </label>
              <input
                type="text"
                placeholder="img"
                className="input input-bordered"
                name="img"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-secondary">
                Sign Up
              </button>
            </div>
          </form>
          <p>
            Have an Account?
            <Link to="/login" className="text-red-400">
              Please Log in
            </Link>
          </p>

          <span className="m-2">
            <button onClick={handleGoogleSignIn} className="btn btn-ghost">
              <p className="text-orange-500">Sign in With Google </p>
              <FaGoogle className="m-2"></FaGoogle>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
