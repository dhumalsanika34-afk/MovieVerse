import "./Navbar.css";
function Navbar() {
  return (

    <nav className="navbar">
      <div className="navbar-logo">
        <img src="C:\Users\Server\Desktop\app\public\images\cinema-reel.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="navbar-auth">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>

  );
}
export default Navbar;