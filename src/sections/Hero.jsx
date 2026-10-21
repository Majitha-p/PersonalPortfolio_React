import React, { useState } from 'react'
import {Button } from '@/components/Button';
import { SectionButton } from '@/components/SectionButton';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { Github, Linkedin } from "lucide-react";


const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "MySQL",
  "MongoDB",
  "Firebase",
  "AWS",
  "Tailwind CSS",
  "Vercel",
  "Python",
  "Django",
  "Flask",
  "Git",
  "GitHub Actions",
]
export const Hero = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>

      {/* Background image */}
      <div className='absolute inset-0'>
        <img
          src="/Images/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          decoding="async"
          className='w-full h-full object-cover opacity-20'
        />
      </div>

      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background'></div>

      {/* Green dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {['left-[8%] top-[15%]', 'left-[22%] top-[65%]', 'left-[38%] top-[30%]', 'left-[52%] top-[80%]', 'left-[65%] top-[12%]', 'left-[78%] top-[55%]', 'left-[90%] top-[25%]', 'left-[15%] top-[88%]'].map((position) => (
          <div
            key={position}
            className={`absolute w-1 h-1 rounded-full bg-primary opacity-25 motion-safe:animate-[slow-drift_25s_ease-in-out_infinite] ${position}`}
          />
        ))}
      </div>
      {/* content */}
      <div className='container mx-auto py-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* left column - text content */}
          <div className='space-y-8 '>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                  <span className='w-2 h-2 bg-primary rounded-full animate-pulse '/>
                    FrontEnd Developer - React Specialist
                </span>
            </div>

            {/* Headline */}
            <div className='space-y-4 '>
              <h1 className='text-5xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                <span className='sr-only'>Majitha P — React and Next.js Developer in Dubai. </span>
                Crafting <span className='text-primary'>digital</span>
                <br />
                experience with
                <br />
                <span className='font-serif italic font-normal text-white'>
                  precision.
                </span>
              </h1>
              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                Hi, I am Majitha P - a Front End Developer specializing in React and 
                JavaScript. I built scalable, performant web applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
              <Button size="lg"
              onClick={() => {
                setIsMobileMenuOpen(false);
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}>
                Contact Me <ArrowRight className='w-5 h-5'/>
              </Button>
              <a href="/cv.pdf" download="Majitha_P_Resume.pdf" className='inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-medium text-foreground transition-colors hover:bg-surface hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary'>
                  <Download className='w-5 h-5' />
                  Download CV
              </a>
            </div>
            
            {/* Social Links */}
            <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
              <span className='text-sm text-muted-foreground'>Follow me: </span>
              {[
                {icon: Github, href: "https://github.com/Majitha-p"},
                {icon: Linkedin, href: "https://www.linkedin.com/in/majitha-p/"},
              ].map((Social, idx) => (
                  <a  
                    key={idx} 
                    href={Social.href}
                    className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'>
                    {<Social.icon className='w-5 h-5'/>}
                    </a>
                ))}
            </div>
          </div>
          {/* right column - profile image */}
          <div className='relative animation-fade-in animation-delay-300'>
            {/* profile image */}
            <div className='relative max-w-md mx-auto'>
              <div
              className='absolute inset-0
              rounded-3xl bg-gradient-to-br 
              from-primary/10 via-transparent
              to-primary/10 blur-2xl'
              />
              <div className='relative rounded-3xl border border-primary/20 bg-card/80 p-2 shadow-xl shadow-black/20'>
                <img 
                src="/Images/pr2.png" 
                alt="Majitha P, React and Next.js developer in Dubai"
                fetchPriority="high"
                decoding="async"
                className='w-full aspect-[4/5] object-cover rounded-2xl'
                />

                {/* floating badge */}
                <div className='absolute -bottom-4 right-0 rounded-xl border border-border bg-card px-4 py-3 shadow-lg'>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-primary rounded-full'/>
                    <span className='text-sm font-medium'>
                      Available for work
                      </span>
                  </div>
                </div>
                {/* stats badge */}
                {/* <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 '>
                  <div className='text-2xl font-bold text-primary'>5+</div>
                  <div className='text-xm text-muted-foreground'>Years Exp.</div>
                </div> */}
              </div>
              </div>
          </div>
        </div>

        {/* skills */}
        <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='text-sm text-muted-foreground mb-6 text-center'>
            Technologies I Work With
            </p>
          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee [animation-duration:15s] md:[animation-duration:50s]' >
              {[...skills, ...skills].map((skills, idx) => (
                <div key={idx} className='flex-shrink-0 px-3 md:px-8 py-4'>
                  <span className='text-xl font-semibold text-muted-foreground hover:text-foreground '>{skills}</span>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800'>
        <SectionButton
        sectionId="about"
        className='flex flex-col items-center gap-2 text-muted-foreground hover:text-muted-foreground/100'>
          <span className='text-xs uppercase tracking-wider'>Scroll</span>
          <ChevronDown className='w-6 h-6 animate-bounce'/>
        </SectionButton>
      </div>

      

    </section>
  )
}
