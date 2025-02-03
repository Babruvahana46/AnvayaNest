function Navbar() {
    return (
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <h1 className="text-lg font-bold">AnvayaNest</h1>
        <div>
          <a href="/" className="mx-2">Dashboard</a>
          <a href="/maintenance" className="mx-2">Maintenance</a>
          <a href="/security" className="mx-2">Security</a>
          <a href="/financials" className="mx-2">Financials</a>
          <a href="/login" className="mx-2">Login</a>
        </div>
      </nav>
    );
  }
    export default Navbar;