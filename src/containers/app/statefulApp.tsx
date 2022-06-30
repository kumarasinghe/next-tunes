import Header from "src/components/header/header";
import { useDispatch } from "react-redux";
import { searchMusic } from "src/services/music";

function StatefulApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  const keywordsSubmitHandler = async (keywords: string) => {
    dispatch({ type: "SET_SEARCH_KEYWORDS", payload: keywords });

    // make a new search
    const searchResults = await searchMusic(keywords);
    dispatch({ type: "SET_SEARCH_RESULTS", payload: searchResults });
  };

  return (
    <div>
      <Header onKeywordsSubmit={keywordsSubmitHandler} />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default StatefulApp;
