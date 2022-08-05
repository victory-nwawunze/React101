/** @format */
// import Todo from "./component/Todo";
import { Route, Switch } from "react-router-dom";
import AllMeetUpPages from "./pages/AllMeetUps";
import NewMeetUpPages from "./pages/NewMeetUps";
import FavouritesMeetUpPages from "./pages/Favourites";
function App() {
  return (
    <div>
      {/* <h1>My Todo</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the Full React Course" /> */}
      <Switch>
        <Route path="/" exact>
          <AllMeetUpPages />
        </Route>
        <Route path="/new-meetUpPage">
          <NewMeetUpPages />
        </Route>
        <Route path="/favouritePage">
          <FavouritesMeetUpPages />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
