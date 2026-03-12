import { useState, useEffect } from "react";
import { BrowserRouter, HashRouter, Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";

import { Home } from "./pages/Home";
import { HowToBuy } from "./pages/HowToBuy";
import { Videos } from "./pages/Videos";
import { Flow } from "./pages/Flow";
import { APP_LINKS } from "./constants/appLinks";
import { NetworkBackdrop } from "./components/NetworkBackdrop";

function AppContent() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navLinkClass = (path: string) =>
    `text-sm font-semibold transition-colors ${location.pathname === path ? "text-[#4f87c5]" : "text-[#6e7f95] hover:text-[#5d6f86]"
    }`;
  const mobileNavLinkClass = (path: string) =>
    `text-base font-semibold ${location.pathname === path ? "text-[#4f87c5]" : "text-[#60748d]"}`;
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-transparent font-sans text-[#6e7f95] selection:bg-s4s-blue/30 selection:text-white">
      <NetworkBackdrop />

      {/* Navigation */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "border-b border-white/60 bg-[#e9edf3]/90 py-4 shadow-[0_8px_20px_rgba(129,144,165,0.22)] backdrop-blur-xl"
          : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="neu-btn-primary flex h-11 min-w-14 items-center justify-center rounded-xl px-2 text-xl font-black italic tracking-tight text-white transition-transform group-hover:-translate-y-0.5">
                S4S
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className={navLinkClass("/")}>
                {isEnglish ? "Home" : "Utama"}
              </Link>
              <Link to="/how-to-buy" className={navLinkClass("/how-to-buy")}>
                {isEnglish ? "How to Buy" : "Cara Membeli"}
              </Link>
              <Link to="/videos" className={navLinkClass("/videos")}>
                {isEnglish ? "Videos" : "Video"}
              </Link>
              <Link to="/flow" className={navLinkClass("/flow")}>
                {isEnglish ? "Flow" : "Aliran"}
              </Link>

              {/* Language Toggle */}
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="neu-pill flex items-center gap-2 px-3 py-1.5 text-[#6e7f95] transition-colors hover:text-[#4f87c5]"
                aria-label="Toggle Language"
              >
                <Globe className="h-4 w-4 text-s4s-blue" />
                <span className="text-xs font-bold">{isEnglish ? "EN" : "BM"}</span>
              </button>

            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="neu-pill flex shrink-0 items-center gap-2 px-3 py-1.5 text-[#6e7f95]"
              >
                <Globe className="h-4 w-4 text-s4s-blue" />
                <span className="text-xs font-bold">{isEnglish ? "EN" : "BM"}</span>
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="neu-btn shrink-0 rounded-xl p-2 text-[#6e7f95]">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute left-0 top-full flex w-full flex-col gap-4 border-b border-white/60 bg-[#e9edf3] p-6 shadow-[0_14px_26px_rgba(129,144,165,0.22)] md:hidden">
            <Link to="/" className={mobileNavLinkClass("/")} onClick={closeMobileMenu}>{isEnglish ? "Home" : "Utama"}</Link>
            <Link to="/how-to-buy" className={mobileNavLinkClass("/how-to-buy")} onClick={closeMobileMenu}>{isEnglish ? "How to Buy" : "Cara Membeli"}</Link>
            <Link to="/videos" className={mobileNavLinkClass("/videos")} onClick={closeMobileMenu}>{isEnglish ? "Videos" : "Video"}</Link>
            <Link to="/flow" className={mobileNavLinkClass("/flow")} onClick={closeMobileMenu}>
              {isEnglish ? "Flow" : "Aliran"}
            </Link>
          </div>
        )}
      </nav>

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home isEnglish={isEnglish} />} />
          <Route path="/how-to-buy" element={<HowToBuy isEnglish={isEnglish} />} />
          <Route path="/videos" element={<Videos isEnglish={isEnglish} />} />
          <Route path="/flow" element={<Flow isEnglish={isEnglish} />} />
          <Route path="/rewards" element={<Navigate to="/flow" replace />} />
        </Routes>
      </main>

      {/* Simple Footer */}
      <footer className="footer relative z-10 border-t border-white/60 bg-[#e9edf3]/86 py-12 text-center text-sm text-[#7b8ea5] backdrop-blur-sm">
        <p>&copy; {new Date().getFullYear()} S4S. {isEnglish ? "All rights reserved." : "Hak cipta terpelihara."}</p>
        <p className="mt-2 flex items-center justify-center gap-1">
          {isEnglish ? "Linked to" : "Dihubungkan dengan"}{" "}
          <a
            href={APP_LINKS.mipay}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#5f738b] transition-colors hover:text-[#4f87c5]"
          >
            MiPay Mastercard
          </a>.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href={APP_LINKS.s4s}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#60748d] transition-colors hover:text-[#4f87c5]"
          >
            S4S App
          </a>
          <a
            href={APP_LINKS.mipay}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#60748d] transition-colors hover:text-[#4f87c5]"
          >
            MiPay App
          </a>
          <a
            href={APP_LINKS.xpat}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#60748d] transition-colors hover:text-[#4f87c5]"
          >
            XPAT App
          </a>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const isSubpathDeploy = import.meta.env.BASE_URL !== "/";

  if (isSubpathDeploy) {
    return (
      <HashRouter>
        <AppContent />
      </HashRouter>
    );
  }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
