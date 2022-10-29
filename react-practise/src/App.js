import "./App.css";
import { Avatar, Navbar } from "./components/Navbar";
import Header from "./Header";

const Person = {
  name: "Dinesh",
  age: 21,
  id: 232,
};
const INPUT = "ENTER VALUES";
function App() {
  function getUserName(arg) {
    return "MR.XX" + arg;
  }
  return (
    <>
      {getUserName("...")}
      <div>
        {null} {true.toString()}
      </div>
      <input value="" placeholder={INPUT} />
      <Navbar userName="DInesh" age={INPUT} />
      <Avatar />
      <Header {...Person} Person={Person} />
    </>
  );
}

export default App;
