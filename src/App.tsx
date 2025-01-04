//import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
// import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Team } from "./components/Team";
import "./App.css";
import { Why } from "./components/Why";
import { Benefits } from "./components/Benefits";
import { WhyWorks } from "./components/WhyWorks";
import { BlockChain } from "./components/BlockChain";
import ComparisonTable from "./components/ComparisonTable";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Benefits />
      <Why />
      <HowItWorks />
      <WhyWorks />
      <BlockChain />
      <ComparisonTable/>
      <Team />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
