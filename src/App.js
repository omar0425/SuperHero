import SuperHeroPage from "./components/SuperHeroPage";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path ="/SuperHeroPage"component={SuperHeroPage} />
        <Route component={NotFound} />
      <SuperHeroPage />
      </Switch>
    </div>
  );
}

export default App;
