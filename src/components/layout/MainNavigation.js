/** @format */
import { Link } from "react-router-dom";
function MainNavigation() {
  return (
    <header>
      <div>React MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to="/">MeetUps</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
