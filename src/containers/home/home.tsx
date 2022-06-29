import { useSelector } from "react-redux";
import Card from "src/components/card/card";
import style from "./home.module.scss";

export default function Home() {
  const searchResults = useSelector((state) => state.searchResults);

  return (
    <div>
      <main>
        <div className={style.resultsContainer}>
          {!searchResults.length && (
            <div className={style.emptySearch}>
              <img className={style.emptyImage} src="/empty_results.png" />
              <div>There's nothing here! Keep searching.</div>
            </div>
          )}
          {searchResults.map((track, idx) => {
            return <Card key={idx} className={style.card} {...track} />;
          })}
        </div>
      </main>
    </div>
  );
}
