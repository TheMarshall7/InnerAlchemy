import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';

// Code splitting for better performance
const Home = lazy(() => import('./pages/Home'));
const Program = lazy(() => import('./pages/Program'));
const Certification = lazy(() => import('./pages/Certification'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Funnel = lazy(() => import('./pages/Funnel'));
const Checkout = lazy(() => import('./pages/Checkout'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const LeadMagnet = lazy(() => import('./pages/LeadMagnet'));

// Simple loading fallback
const LoadingPage = () => (
  <div className="min-h-screen bg-sand flex items-center justify-center">
    <div className="w-12 h-12 border-2 border-terracotta/20 border-t-terracotta rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingPage />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
