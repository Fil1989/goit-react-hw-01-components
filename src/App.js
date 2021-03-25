import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import user from "./data/user.json";
import theStatistics from "./data/statistical-data.json";
import myFriends from "./data/friends.json";
import allTransactions from "./data/transactions.json";
import Friends from "./components/Friends";
import Transactions from "./components/Transactions";

const App = () => {
  let mass = [];
  theStatistics.filter((el) => {
    let propertyOfEl = el.label;
    let elementToFind = mass.find((element) => element.label === propertyOfEl);
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
      <div className="whole-uploads">
        <h3 className="uploads__title">UPLOAD STATS</h3>
        <div className="uploads">
          {mass.map((el) => (
            <Statistics
              key={el.id}
              label={el.label}
              percentage={el.percentage}
            />
          ))}
        </div>
      </div>
      <ul className="friends">
        {myFriends.map((el) => (
          <Friends
            key={el.id}
            name={el.name}
            avatar={el.avatar}
            isOnline={el.isOnline}
          />
        ))}
      </ul>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {allTransactions.map((el) => (
            <Transactions info={el} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
