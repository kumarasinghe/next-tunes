import { useState, useEffect } from "react";
import Card from "src/components/card/card";
import { searchMusic } from "src/services/music";
import style from "./home.module.scss";

export default function Home() {
  let musicDataProvider;
  const [tracks, setTracks] = useState([]);

  // on component rendered
  useEffect(() => {
    searchMusic("Eminem").then((results) => {
      console.debug({ searchResults: results });
      setTracks(results);
    });
  }, []);

  return (
    <div>
      <main>
        <div className={style.resultsContainer}>
          {tracks.map((track, idx) => {
            return <Card key={idx} className={style.card} {...track} />;
          })}
        </div>
      </main>
    </div>
  );
}
