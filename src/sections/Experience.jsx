import React from 'react'

const experiences = [
  {
    preiod: "Apr 2026 - Present",
    role: "Web Developer",
    company: "Ergospace Office Furniture, Dubai",
    description: "Develop reusable, responsive interfaces for an office furniture e-commerce platform using React, Next.js, and Tailwind CSS. Integrate CMS-driven content through Puck page-builder components, enabling editors to customize pages with dynamic banners, interactive product cards, and image carousels. Translate design mockups into production-ready experiences, resolve rendering and CMS integration issues across the editor and live website, and refine shared components and styles for cleaner, more maintainable code.",
    Technologies: ["React", "JavaScript", "Next.js", "Tailwind CSS", "Puck", "CMS"],
    current: true,
    demo: false,
  },
  {
    preiod: "Nov 2024 - Dec 2025",
    role: "React Developer",
    company: "FederalTec Technologies, Dubai",
    description: "Frontend Developer (React) with knowledge of JavaScript, HTML, and CSS. I focus on building scalable, user-friendly applications and continuously learning modern development practices.",
    Technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
    current: false,
    demo: true,
  }
]
export const Experience = () => {
  return (
    <section id='experience'
    className='py-32 relative overflow-hidden '>
      <div 
      className=' absolute top-1/2 left-1/4 w-96
      h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2'
      />
      <div className='container mx-auto px-6 relative z-10'>
        {/* secion header */}
        <div className='max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm
          font-medium tracking-wider uppercase animate-fade-in'
          >
            Career Journey
          </span>
          <h2 className='text-4xl md:text-5xl font-bold
          mt-4 mb-6 animate-fade-in animation-delay-100
          text-secondary-foreground'>
            Experience that <span className='font-serif italic font-normal text-white'>
              speak volumes.
              </span>
          </h2>

          <p className='text-muted-foreground
          animate-fade-in animation-delay-200'>
            A timeline of my professional growth, from a curious beginner to a frontend developer 
            building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className='relative'>
          <div className='timeline-glow absolute lef-0 md:left-1/2 top-0 bottom-0 w-[2px] 
          bg-gradient-to-b from-primary/70 via-primary/30 to-transparent
          md:-translate-x-1/2 shadow-[0_0_2px_rgba(32,178,166,)]'
          />
          {/* experinace */}
          <div className='space-y-12'>
            {experiences.map((exp,idx)=>(
              <div key={idx}
                className='relative grid md:grid-cols-2 gap-8 animate-fade-in'
                >

                {/* Timeline dots */}
                <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10'>
                  {exp.current && <span className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75'/>}
                 </div>

                {/* content */}
                <div className={`pl-8 md:pl-0 
                  ${idx % 2 === 0 
                  ? "md:pr-16 md:text-right "
                  : "md:col-start-2 md:pl-16"}`}>
                  <div className={`bg-card/80 p-6 rounded-2xl border
                    border-border hover:border-primary/30
                    transition-colors duration-200`}>
                    <span className='text-sm text-primary font-medium'>{exp.preiod}</span>
                    {exp.demo && <p className='text-xs text-muted-foreground mt-2'>Demo content</p>}
                    <h3 className='text-xl font-semibold mt-2'>{exp.role}</h3>
                    <p className='text-muted-foreground '>{exp.company}</p>
                    <p className='text-sm text-muted-foreground mt-4'>{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.Technologies.map((tec,tecIdx)=>(
                        <span key={tecIdx}
                         className='inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium tracking-wide text-primary transition-colors duration-200 hover:border-primary/50 hover:bg-primary/20'>{tec}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

