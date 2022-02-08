import { Link } from "react-router-dom";

export default function Song({ song }) {
  return (
    <tr>
      <td>{song.name}</td>
      <td>
        <Link to={`/songs/${song.id}`}>🔎</Link>
      </td>
    </tr>
  );
}
