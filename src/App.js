import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import user from "./data/user.json";
import statistica from "./data/statistical-data.json";
import { element } from "prop-types";

const App = () => {
  let mass = [];
  statistica.filter((el) => {
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
    </div>
  );
};

export default App;
