import Header from "../../components/header/header";

function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default App;
