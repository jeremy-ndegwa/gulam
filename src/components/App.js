import { BrowserRouter as Router, Route, Switch} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home";
import Create from "./create";
import About from "./About";
import Gallery from "./Gallary";
import Header from "./header";
import 'bootstrap/dist/css/bootstrap.css';
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/blogdetails/:id">
              <BlogDetails />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App