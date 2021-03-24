import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import user from "./data/user.json";
import theStatistics from "./data/statistical-data.json";
import myFriends from "./data/friends.json";
import { element } from "prop-types";
import Friends from "./components/Friends";

const App = () => {
  let mass = [];
  theStatistics.filter((el) => {
    let someProperty = el.label;
    let elementToFind = mass.find((element) => element.label === someProperty);
    if (elementToFind) {
      elementToFind.percentage += el.percentage;
      return false;
    } else {
      mass.push(el);
      return true;
    }
  });

  return (
    <div className="App">
      <h1>Hello from react</h1>
      <Profile user={user} />
      <div class="whole-uploads">
        <h3 className="uploads__title">UPLOAD STATS</h3>
        <div className="uploads">
          {mass.map((el) => (
            <Statistics label={el.label} percentage={el.percentage} />
          ))}
        </div>
      </div>
      <ul className="friends">
        {myFriends.map((el) => (
          <Friends name={el.name} avatar={el.avatar} isOnline={el.isOnline} />
        ))}
      </ul>
    </div>
  );
};

export default App;
