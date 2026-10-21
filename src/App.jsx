import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Projects} from "@/sections/Projects";
import {Experience} from "@/sections/Experience";
import {Contact} from "@/sections/Contact";
import {Navbar} from "@/layout/Navbar";
import {Footer} from "@/layout/Footer";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const removeHash = () => {
      if (!window.location.href.includes('#')) return;
      const section = document.getElementById(window.location.hash.slice(1));
      window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search);
      section?.scrollIntoView({ behavior: 'instant' });
    };
    removeHash();
    window.addEventListener('hashchange', removeHash);
    window.addEventListener('pageshow', removeHash);
    return () => {
      window.removeEventListener('hashchange', removeHash);
      window.removeEventListener('pageshow', removeHash);
    };
  }, []);

  const handleSectionNavigation = (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const link = event.target.closest('a[href^="#"]');
    if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;

    const sectionId = link.getAttribute('href').slice(1);
    const section = sectionId ? document.getElementById(sectionId) : null;
    if (sectionId && !section) return;

    event.preventDefault();
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
    if (section) {
      section.scrollIntoView({ behavior });
    } else {
      window.scrollTo({ top: 0, behavior });
    }

    if (window.location.href.includes('#')) {
      window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden" onClick={handleSectionNavigation}>
      <Navbar/>
      
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>

      </main>
      <Footer/>
      
    </div>
    
  )
}

export default App
