import SuperHeroPage from "./components/SuperHeroPage";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About"
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path="/Counter" component={Counter} />
        <Route path='/' component={Home} exact />
        <Route path ="/SuperHeroPage"component={SuperHeroPage} />
        <Route path='/About' component={About} />
        <Route component={NotFound} />
      <Home />
      </Switch>
    </div>
  );
}

export default App;
