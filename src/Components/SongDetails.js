import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function SongDetails() {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const [song, setSong] = useState({});

  useEffect(() => {
    axios
      .get(`${URL}/songs/${id}`)
      .then((response) => setSong(response.data))
      .catch((error) => console.warn(error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${URL}/songs/${id}`)
      .then(
        () => {
          console.log("did it");
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((error) => console.warn(error));
  };

  return (
    <article>
      <h4>{song.name}</h4>
      <p>{song.artist}</p>
      <p>{song.album}</p>
      <p>{song.time}</p>
      <p>{song.is_favorite && <p>yes</p>}</p>

      <div>
        <div>
          <Link to="/songs">
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${song.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}
