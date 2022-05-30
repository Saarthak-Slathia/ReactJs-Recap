import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import {Todos} from "./components/Todos";
import TodoItem from "./components/TodoItem";
import {Footer} from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
