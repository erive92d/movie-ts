import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="drawer z-10">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col bg-gradient-to-b  from-black to-transparent">
          {/* Navbar */}
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <Link to="/" className="flex-1 text-red-500 text-4xl font-bold">
              MovieTS
            </Link>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <Link to="/search">Search</Link>
                </li>
                <li>
                  <Link to="/saved-movies">Watch Later</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-40 min-h-full bg-black">
            {" "}
            {/* Sidebar content here */}
            <li>
              <label
                htmlFor="my-drawer-3"
                className="drawer-button text-2xl text-cyan-500"
              >
                <IoMdArrowBack />
              </label>
            </li>
            <li>
              <Link to="/saved-movies">Watch Later</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
