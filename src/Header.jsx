import { Link } from "react-router-dom";
export function Header() {
  return (
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
          <Link to="/">Home</Link>

          <Link to="/posts-new">New Post</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
