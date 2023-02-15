import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FooterComponent from "./assets/components/FooterComponent";
import MainComponent from "./assets/components/MainComponent";
import NavbarComponent from "./assets/components/NavBar";

function App() {
  return (
    <>
      <NavbarComponent />
      <MainComponent />
      <FooterComponent />
    </>
  );
}

export default App;
