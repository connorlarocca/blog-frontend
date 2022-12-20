import { Link } from "react-router-dom";
import axios from "axios";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { useState } from "react";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible = true;
  };

  // const handleSignupClose = () => {
  //   setIsSignupVisible = false;
  // };

  const handleLoginShow = () => {
    setIsLoginVisible = true;
  };

  // const handleLoginClose = () => {
  //   setIsLoginVisible = false;
  // };

  const handleLogout = () => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-primary bg-info">
          <a class="navbar-brand" href="#">
            Bloggazoid!
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              |
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              |
              {localStorage.jwt === undefined ? (
                <>
                  <li className="nav-item">
                    <a onClick={handleSignupShow} href="/signup">
                      Signup
                    </a>
                  </li>
                  |
                  <li className="nav-item">
                    <a onClick={handleLoginShow} href="/login">
                      Login
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-item" href="/posts/new">
                      New Posts
                    </a>
                  </li>
                  |
                  <li className="nav-item">
                    <LogoutLink />
                  </li>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
