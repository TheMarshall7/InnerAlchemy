import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Program from './pages/Program';
import Certification from './pages/Certification';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Funnel from './pages/Funnel';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import LeadMagnet from './pages/LeadMagnet';

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages with standard Layout (Navbar/Footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Funnel/Utility Pages (No global Navbar/Footer to maximize conversion) */}
        <Route path="/funnel" element={<Funnel />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/lead-magnet" element={<LeadMagnet />} />
      </Routes>
    </Router>
  );
}

export default App;
