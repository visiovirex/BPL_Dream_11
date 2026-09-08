import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-[#FEFEFE] shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-1 sm:py-4">

        {/* Logo */}
        <a href="/">
          <img
            src={Logo}
            alt="Dream 11"
          />
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-5 text-sm font-medium text-gray-600 sm:flex md:gap-7 md:text-base">
          <li>
            <a href="/" className="transition-colors hover:text-black">
              Home
            </a>
          </li>

          <li>
            <a href="#fixture" className="transition-colors hover:text-black">
              Fixture
            </a>
          </li>

          <li>
            <a href="#teams" className="transition-colors hover:text-black">
              Teams
            </a>
          </li>

          <li>
            <a href="#schedules" className="transition-colors hover:text-black">
              Schedules
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="btn btn-ghost btn-sm sm:hidden">
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;