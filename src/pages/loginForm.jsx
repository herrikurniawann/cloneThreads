import React from "react";

function LoginFrom() {
  return (
    <>
      <div className="login-form">
        <div className="login-content">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginFrom;
