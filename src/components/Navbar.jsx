import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="p-4 flex justify-between bg-gray-200 dark:bg-gray-800">
      <h1 className="text-xl font-bold">Notes App</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/create" className="hover:underline">Create Note</Link>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-blue-500 text-white rounded">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
