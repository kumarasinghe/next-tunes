import Header from "src/components/header/header";

function App({ Component, pageProps }) {
  const onKeywordsSubmit = (keywords: string) => {
    console.log(keywords);
  };

  return (
    <div>
      <Header onKeywordsSubmit={onKeywordsSubmit} />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default App;
