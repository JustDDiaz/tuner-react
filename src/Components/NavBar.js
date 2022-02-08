import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <button>
        <Link to="/songs">Songs</Link>
      </button>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}
