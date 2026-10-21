import React, { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import { Menu,X } from 'lucide-react'
import { SectionButton } from '@/components/SectionButton'
const navLinks =[
  {sectionId: "about", label:"About"},
  {sectionId: "projects", label:"Project"},
  {sectionId: "experience", label:"Experience"},

]

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect (() => {
    const handleScroll = () =>{
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <header 
    className={`fixed scroll-mt-24 top-0 left-0 right-0 transition-all duration-500
    ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} 
    bg-transparent py-5 z-50`}>
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <SectionButton
          className='text-xl font-bold tracking-tight hover:text-primary'
          >
          MP<span className='text-primary'>.</span>
        </SectionButton>

        {/* desktop nav */}
        <div className='hidden md:flex  items-center gap-1 '>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {navLinks.map((link, index)=>(
              <SectionButton sectionId={link.sectionId} key={index}
              className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'>
                {link.label}
                </SectionButton>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div className='hidden md:block'>
          <Button size='sm'
            onClick={() => {
              setIsMobileMenuOpen(false);
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact Me
          </Button>
        </div>

        {/* mobile menu button */}
        <button className='md:hidden p-2 text-foreground cursor-pointer' 
        onClick={()=>setIsMobileMenuOpen((prev)=>!prev)}>
          {isMobileMenuOpen ? <X/> :<Menu size={24}/>}

        </button>
      </nav>

      {/* mobile menu */}
      {isMobileMenuOpen && (<div className='md:hidden glass-strong animate-fade-in'>
        <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
          {navLinks.map((link, index)=>(
              <SectionButton sectionId={link.sectionId}
              key={index} 
              onClick={()=> setIsMobileMenuOpen(false)}
              className='text-left text-lg text-muted-foreground hover:text-foreground py-2'>
                {link.label}
                </SectionButton>
            ))}
            
            <Button 
             onClick={() => {
              setIsMobileMenuOpen(false);
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}>Contact Me</Button>

        </div>
      </div>)}
    </header>
  )
}

