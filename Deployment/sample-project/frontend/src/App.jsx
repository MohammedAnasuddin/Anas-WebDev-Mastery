import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Connections from "./components/Connections/Connections.jsx";
import Requests from "./components/Requests/Request.jsx"
import appStore from "./utils/redux/appStore";
import{Provider} from "react-redux"



function App() {
  return (
    <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes >
        <Route path="/" element = {<Body/>}>
          <Route path="login" element = {<Login/>}></Route>
          <Route path="profile" element = {<Profile />} />
          <Route path="home" element = {<Home/>}></Route>
          <Route path="connections" element = {<Connections/>}></Route>
          <Route path="requests" element = {<Requests/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
