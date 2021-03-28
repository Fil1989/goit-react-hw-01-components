import friends from './components/Friends/friends.module.scss';
import statistics from './components/Statistics/statistics.module.scss';
import transactions from './components/Transactions/transactions.module.scss';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './data/user.json';
import theStatistics from './data/statistical-data.json';
import myFriends from './data/friends.json';
import allTransactions from './data/transactions.json';
import Friends from './components/Friends/Friends';
import Transactions from './components/Transactions/Transactions';

const App = () => {
  let arrayOfUniqueStats = [];
  theStatistics.filter(el => {
    let propertyOfEl = el.label;
    let elementToFind = arrayOfUniqueStats.find(
      element => element.label === propertyOfEl,
    );
    if (elementToFind) {
      elementToFind.percentage += el.percentage;
      return false;
    } else {
      arrayOfUniqueStats.push(el);
      return true;
    }
  });

  return (
    <div className="App">
      <h1>Hello from react</h1>
      <Profile user={user} />
      <div className={statistics.wholeUploads}>
        <h3 className={statistics.uploads__title}>UPLOAD STATS</h3>
        <div className={statistics.uploads}>
          {arrayOfUniqueStats.map(el => (
            <Statistics
              key={el.id}
              label={el.label}
              percentage={el.percentage}
            />
          ))}
        </div>
      </div>
      <ul className={friends.friends}>
        {myFriends.map(el => (
          <Friends
            key={el.id}
            name={el.name}
            avatar={el.avatar}
            isOnline={el.isOnline}
          />
        ))}
      </ul>
      <table className={transactions.transaction_history}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {allTransactions.map(el => (
            <Transactions info={el} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
