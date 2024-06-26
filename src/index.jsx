import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/global-styles.css";
import Home from "./templates/Home/home";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { NotFound } from "./templates/NotFound/notfound";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { Movie } from "./templates/Movie";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/movie/:id" component={Movie} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
