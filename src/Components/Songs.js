import axios from "axios";
import { useEffect, useState } from "react";
import Song from "./Song";

export default function Songs() {
  const URL = process.env.REACT_APP_API_URL;
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/songs`)
      .then((response) => setSongs(response.data))
      .catch((error) => console.warn(error));
  }, [URL]);

  return (
    <div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Songs</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
