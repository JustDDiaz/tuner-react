import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SongEditForm() {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  useEffect(() => {
    axios.get(`${URL}/songs/${id}`).then((response) => setSong(response.data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${URL}/songs/${id}`, song).then(() => navigate(`/songs/${id}`));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: [event.target.value] });
  };

  const handleCheckboxChange = () => {
    setSong({
      ...song,
      is_favorite: !song.is_favorite,
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
          />
          <label htmlFor="artist">Artist</label>
          <input
            id="artist"
            value={song.artist}
            type="text"
            onChange={handleTextChange}
          />
          <label htmlFor="album">Album</label>
          <input
            id="album"
            value={song.album}
            type="text"
            onChange={handleTextChange}
          />
          <label htmlFor="time">Time</label>
          <input
            id="time"
            value={song.time}
            type="text"
            onChange={handleTextChange}
          />
          <label htmlFor="isFavorite">Favorite</label>
          <input
            id="isFavorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
          />
          <input type="submit" />
        </form>
        <Link to={`/songs/${id}`}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}
