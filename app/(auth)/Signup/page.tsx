import React from "react";
import "../../styles/sigup.css"
import Link from "next/link";
function Page() {
  return (
    <form className="form">
      <p className="title">Register</p>
      <p className="message">Signup now and get full access to our app.</p>

      <div className="flex">
        <label>
          <input className="input" type="text" placeholder="" required />
          <span>Firstname</span>
        </label>

        <label>
          <input className="input" type="text" placeholder="" required />
          <span>Lastname</span>
        </label>
      </div>

      <label>
        <input className="input" type="email" placeholder="" required />
        <span>Email</span>
      </label>

      <label>
        <input className="input" type="password" placeholder="" required />
        <span>Password</span>
      </label>

      <label>
        <input className="input" type="password" placeholder="" required />
        <span>Confirm password</span>
      </label>

      <button className="submit" type="submit">
        Submit
      </button>

      <p className="signin">
        Already have an account? <Link href="../Login">Login</Link>
      </p>
    </form>
  );
}

export default Page;
