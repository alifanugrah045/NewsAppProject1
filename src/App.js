import logo from "./logo.svg";
import "./App.css";
import NavbarComponents from "./components/NavbarComponents";
import CardComponents from "./components/CardComponents";
import IndonesiaPages from "./pages/IndonesiaPages";

function App() {
  return (
    <div className="App">
      <header>
        <NavbarComponents />
      </header>
      <section>
        <CardComponents />
        <IndonesiaPages />
      </section>
    </div>
  );
}

export default App;
