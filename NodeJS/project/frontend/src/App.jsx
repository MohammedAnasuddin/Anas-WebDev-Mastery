import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Home from "./Home";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes >
        <Route path="/" element = {<Body/>}>
          <Route path="login" element = {<Login/>}></Route>
          <Route path="home" element = {<Home/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
