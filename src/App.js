import NewComponent from "./components/NewComponent";
import user from "./user.json";

const App = () => {
  return (
    <div className="App">
      <h1>Hello from react</h1>

      <NewComponent user={user} />
    </div>
  );
};

export default App;
