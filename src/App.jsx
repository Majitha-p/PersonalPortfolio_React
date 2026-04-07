import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Projects} from "@/sections/Projects";
import {Experiance} from "@/sections/Experiance";
import {Contact} from "@/sections/Contact";
import {Navbar} from "@/layout/Navbar";
import {Footer} from "@/layout/Footer";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experiance/>
        <Contact/>

      </main>
      <Footer/>
      
    </div>
    
  )
}

export default App