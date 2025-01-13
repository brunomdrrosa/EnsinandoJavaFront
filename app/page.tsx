import "./App.css";
import Header from "./Header/Header";
import StacksSection from "./StacksSection/StacksSection";
import Advantages from "./Advantages/Advantages";
import Prices from "./Prices/Prices";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <div className="page-container">
      <Header />
      <StacksSection />
      <Advantages />
      <Prices />
      <FAQ />
      <Footer />
    </div>
  );
}
