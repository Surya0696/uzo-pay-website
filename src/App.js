import "./App.css";
import CardsSection from "./Components/CardsSection/CardsSection";
import FnanceSel from "./Components/FnanceSel/FnanceSel";
import Footer from "./Components/Footer/Footer";
import GridBoxSel from "./Components/GridBoxSel/GridBoxSel";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import PaymentGateway from "./Components/PaymentGateway/PaymentGateway";
import PayoutSection from "./Components/PayoutSection/PayoutSection";
import QuickStart from "./Components/QuickStart/QuickStart";
import SubHero from "./Components/SubHero/SubHero";
import TestMonialSection from "./Components/TestMonialSection/TestMonialSection";
import TextScroll from "./Components/TextScroll/TextScroll";
// import VideoBgSel from "./Components/VideoBgSel/VideoBgSel";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <SubHero />
      <CardsSection />
      <TextScroll />
      <PayoutSection />
      {/* <VideoBgSel /> */}
      <GridBoxSel />
      <QuickStart />
      <PaymentGateway />
      <FnanceSel />
      <TestMonialSection />

      <Footer />
    </div>
  );
}

export default App;
