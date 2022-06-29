import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "src/reducers/rootReducer";
import StatefulApp from "./statefulApp";

function App({ Component, pageProps }) {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <StatefulApp Component={Component} pageProps={pageProps} />
    </Provider>
  );
}

export default App;
