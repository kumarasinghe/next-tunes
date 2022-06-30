import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "src/components/card/card";
import style from "./home.module.scss";
import { searchMusic } from "src/services/music";

export default function Home() {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);
  const searchKeywords = useSelector((state) => state.searchKeywords);
  const currentResultPage = useSelector((state) => state.currentResultPage);

  useEffect(() => {
    // add more results when scrolled to the bottom
    document.addEventListener("scroll", async () => {
      if (window.innerHeight + window.scrollY >= document.body?.offsetHeight) {
        const moreSearchResults = await searchMusic(
          searchKeywords,
          currentResultPage + 1
        );
        dispatch({ type: "ADD_SEARCH_RESULTS", payload: moreSearchResults });
      }
    });
  }, [searchKeywords, currentResultPage]);

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
