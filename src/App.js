import AboutUs from "./components/AboutUs";
import ContactLess from "./components/Contactlest";
import DeliveryServices from "./components/DeliveryServices";
import FastDelivery from "./components/FastDelivery";
import Overview from "./components/Overview";
import Partner from "./components/Partner";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main>
      <Header />
      <Overview />
      <DeliveryServices />
      <AboutUs />
      <FastDelivery />
      <ContactLess />
      <Testimonials />
      <Partner />
      <Footer />
    </main>
  );
}

export default App;
