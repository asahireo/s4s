import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";

import { Home } from "./pages/Home";
import { HowToBuy } from "./pages/HowToBuy";

function AppContent() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-s4s-blue/30 selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg" : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-s4s-blue flex items-center justify-center font-black text-xl italic tracking-tighter shadow-[0_0_15px_rgba(93,169,221,0.5)] group-hover:bg-blue-400 transition-colors">
                S4S
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">Mobile</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className={`text-sm font-semibold transition-colors ${location.pathname === '/' ? 'text-white' : 'text-slate-300 hover:text-white'}`}>
                {isEnglish ? "Home" : "Utama"}
              </Link>
              <Link to="/how-to-buy" className={`text-sm font-semibold transition-colors ${location.pathname === '/how-to-buy' ? 'text-s4s-gold-light' : 'text-slate-300 hover:text-white'}`}>
                {isEnglish ? "How to Buy" : "Cara Membeli"}
              </Link>
              <a href="#" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                {isEnglish ? "Rewards" : "Ganjaran"}
              </a>

              {/* Language Toggle */}
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="Toggle Language"
              >
                <Globe className="w-4 h-4 text-s4s-blue" />
                <span className="text-xs font-bold">{isEnglish ? "EN" : "BM"}</span>
              </button>

              <button className="px-5 py-2.5 bg-s4s-blue text-white rounded-lg font-bold hover:bg-blue-400 transition-colors text-sm shadow-[0_0_15px_rgba(93,169,221,0.4)]">
                {isEnglish ? "Login" : "Log Masuk"}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
              >
                <Globe className="w-4 h-4 text-s4s-blue" />
                <span className="text-xs font-bold">{isEnglish ? "EN" : "BM"}</span>
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-300">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl">
            <Link to="/" className="text-base font-semibold text-slate-200">{isEnglish ? "Home" : "Utama"}</Link>
            <Link to="/how-to-buy" className="text-base font-semibold text-s4s-gold-light">{isEnglish ? "How to Buy" : "Cara Membeli"}</Link>
            <a href="#" className="text-base font-semibold text-slate-200">{isEnglish ? "Rewards" : "Ganjaran"}</a>
            <button className="w-full mt-4 px-5 py-3 bg-s4s-blue text-white rounded-lg font-bold text-center">
              {isEnglish ? "Login" : "Log Masuk"}
            </button>
          </div>
        )}
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home isEnglish={isEnglish} />} />
          <Route path="/how-to-buy" element={<HowToBuy isEnglish={isEnglish} />} />
        </Routes>
      </main>

      {/* Simple Footer */}
      <footer className="footer bg-[#0f172a] border-t border-white/10 py-12 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} S4S Mobile. {isEnglish ? "All rights reserved." : "Hak cipta terpelihara."}</p>
        <p className="mt-2 flex justify-center items-center gap-1">
          {isEnglish ? "Linked to" : "Dihubungkan dengan"} <span className="font-bold text-slate-400">MiPay Mastercard</span>.
        </p>
      </footer>
    </div>
  );
}

function App() {
  const routerBasename = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL;

  return (
    <Router basename={routerBasename}>
      <AppContent />
    </Router>
  );
}

export default App;
