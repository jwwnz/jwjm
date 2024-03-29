import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Venue from "./pages/Venue";
import Video from './pages/Video';
import WeddingDay from './pages/WeddingDay';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/venue" exact component={Venue} />
            <Route path="/video" exact component={Video} />
            <Route path="/weddingday" exact component={WeddingDay} />
          </Switch>
          <Footer />

        </div>
      </Router>

    );
  }
}

export default App;
