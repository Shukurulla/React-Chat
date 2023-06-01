import React from "react";

const Login = () => {
  return (
    <main className="form-signin w-25 m-auto mt-5 py-5">
      <form>
        <h1 className=" mb-3 fw-normal text-center">Please sign in</h1>

        <div className="form-floating mt-2">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating mt-2">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign Up
        </button>
      </form>
    </main>
  );
};

export default Login;
