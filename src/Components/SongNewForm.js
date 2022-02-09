import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const URL = process.env.REACT_APP_API_URL;

export default function SongNewForm() {
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({
      ...song,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${URL}/songs`, song).then(() => navigate("/songs"));
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          placeholder="Song Name"
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          placeholder="Artist"
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          placeholder="Album"
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          placeholder="Time"
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <input type="submit" />
      </form>
      <Link to={`/songs`}>
        <button>Back</button>
      </Link>
    </div>
  );
}
