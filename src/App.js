import SuperHeroPage from "./components/SuperHeroPage";
import Header from "./components/Header";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   BrowserRouter,
// } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <SuperHeroPage />
    </div>
  );
}

export default App;
