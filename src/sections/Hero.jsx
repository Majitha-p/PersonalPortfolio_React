import React, { useState } from 'react'
import {Button } from '@/components/Button';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { Github, Linkedin, Twitter } from "lucide-react";
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';


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
          alt="Hero"
          className='w-full h-full object-cover opacity-40'
        />
      </div>

      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background'></div>

      {/* Green dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1.5 h-1.5 rounded-full opacity-60'
            style={{
              backgroundColor: "#20B2A6",
              left:`${Math.random()* 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s 
                           ease-in-out infinite`,
              animationDelay: `${Math.random()* 5}s`,
            }}
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
                Crafting <span className='text-primary glow-text'>digital</span>
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
              <a href="/cv.pdf" download="Majitha_P_Resume.pdf">
                <AnimatedBorderButton>
                  <Download className='w-5 h-5' />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>
            
            {/* Social Links */}
            <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
              <span className='text-sm text-muted-foreground'>Follow me: </span>
              {[
                {icon: Github, href: "https://github.com/Majitha-p"},
                {icon: Linkedin, href: "https://www.linkedin.com/in/majitha-p/"},
                {icon: Twitter, href: "#"},
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
              from-primary/30 via-transparent
              to-primary/30 blur-2xl animate-pulse'
              />
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img 
                src="/Images/pr2.png" 
                alt="Majitha P" 
                className='w-full aspect-[4/5] object-cover rounded-2xl'
                />

                {/* floating badge */}
                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
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
            <div className='flex animate-marquee ' >
              {[...skills, ...skills].map((skills, idx) => (
                <div key={idx} className='flex-shrink-0  px-8 py-4'>
                  <span className='text-xl font-semibold text-muted-foreground hover:text-foreground '>{skills}</span>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800'>
        <a 
        href="#about"
        className='flex flex-col items-center gap-2 text-muted-foreground hover:text-muted-foreground/100'>
          <span className='text-xs uppercase tracking-wider'>Scroll</span>
          <ChevronDown className='w-6 h-6 animate-bounce'/>
        </a>
      </div>

      

    </section>
  )
}