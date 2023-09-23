import Header from "../components/Header";
import Continent from "../components/Continent/Continent";
import FooterHome from "../components/FooterHome/FooterHome";
import Cards from "../components/Cards/Card";

function App() {
  return (
    <div >
    <Header />
      <Continent />
      <div >
        <Cards />
      </div>
      <div >

      <FooterHome />
      </div>
    </div>
  );
}

export default App;
