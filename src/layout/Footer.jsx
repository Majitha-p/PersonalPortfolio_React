import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-border">
      
      {/* background glow */}
      <div className="absolute  inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        
        {/* Top section */}
        <div className="flex flex-col  md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <div className="text-xl font-bold tracking-tight">
            MP<span className="text-primary">.</span>
            <div className=" pt-2    text-sm text-muted-foreground">
          © {new Date().getFullYear()} Majitha P. All rights reserved.
        </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#project" className="hover:text-foreground transition">Projects</a>
            <a href="#experiance" className="hover:text-foreground transition">Experience</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

        </div>

        {/* Bottom section */}
        

      </div>
    </footer>
  );
};