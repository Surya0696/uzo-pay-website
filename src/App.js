import "./App.css";
import CardsSection from "./Components/CardsSection/CardsSection";
import GridBoxSel from "./Components/GridBoxSel/GridBoxSel";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import PaymentGateway from "./Components/PaymentGateway/PaymentGateway";
import PayoutSection from "./Components/PayoutSection/PayoutSection";
import QuickStart from "./Components/QuickStart/QuickStart";
import SubHero from "./Components/SubHero/SubHero";
import TextScroll from "./Components/TextScroll/TextScroll";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <SubHero />
      <CardsSection />
      <TextScroll />
      <PayoutSection />
      <GridBoxSel />
      <QuickStart />
      <PaymentGateway />
    </div>
  );
}

export default App;
