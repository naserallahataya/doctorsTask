import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import DoctorPage from './pages/DoctorPage';
import AboutUs from './pages/AboutUs'; // NEW
import Contact from './pages/Contact'; // NEW
import Gallery from './pages/Gallery'; // NEW
import Header from './components/Header';
import './App.css';
const App = () => (
  <ThemeProvider>
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor/:id" element={<DoctorPage />} />
          <Route path="/about" element={<AboutUs />} />   {/* NEW ROUTE */}
          <Route path="/contact" element={<Contact />} /> {/* NEW ROUTE */}
          <Route path="/gallery" element={<Gallery />} /> {/* NEW ROUTE */}
        </Routes>
      </Router>
    </LanguageProvider>
  </ThemeProvider>
);

export default App;