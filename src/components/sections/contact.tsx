import { useState } from "react";
import { ChevronDown, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const [serviceType, setServiceType] = useState("");

  return (
    <section id="contact" className="relative bg-background text-foreground">
      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-[5vw] py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Image and Decorative Element */}
          <div className="relative">
            <div className="relative">
              {/* Profile Image */}
              <div className="relative w-[400px] h-[500px] rounded-[20px] overflow-hidden bg-fs-white dark:bg-black border border-black/10 dark:border-white/15 shadow-[var(--elev-card)]">
                <img
                  src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000&auto=format&fit=crop"
                  alt="studio still life"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Wave Circle */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-fs-orange rounded-full flex items-center justify-center shadow-lg">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M10 20C10 20 15 10 20 20C25 30 30 20 30 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <h2 className="ds-title mb-4">
              LET'S WORK TOGETHER
            </h2>
            <p className="text-[16px] text-foreground/70 mb-12 max-w-[560px]">
              Let's build something impactful together—whether it's your brand, your website, or your next big idea.
            </p>

            {/* Contact Form */}
            <form className="space-y-6">
              {/* First Row: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] text-foreground/60 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full px-5 py-3 bg-fs-white dark:bg-black border border-black/10 dark:border-white/15 rounded-full text-black dark:text-white placeholder-black/40 dark:placeholder-white/50 focus:outline-none focus:border-fs-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[14px] text-foreground/60 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="johnsmith@gmail.com"
                    className="w-full px-5 py-3 bg-fs-white dark:bg-black border border-black/10 dark:border-white/15 rounded-full text-black dark:text-white placeholder-black/40 dark:placeholder-white/50 focus:outline-none focus:border-fs-orange transition-colors"
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="block text-[14px] text-foreground/60 mb-2">Service Needed ?</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setServiceType(serviceType ? "" : "open")}
                    className="w-full px-5 py-3 bg-fs-white dark:bg-black border border-black/10 dark:border-white/15 rounded-full text-left flex items-center justify-between focus:outline-none focus:border-fs-orange transition-colors"
                  >
                    <span className="text-black/40 dark:text-white/60">Select</span>
                    <ChevronDown className="w-5 h-5 text-foreground/60" />
                  </button>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-[14px] text-foreground/60 mb-2">What Can I Help You...</label>
                <textarea
                  placeholder="Hello, I'd like to enquire about..."
                  rows={4}
                  className="w-full px-5 py-4 bg-fs-white dark:bg-black border border-black/10 dark:border-white/15 rounded-[16px] text-black dark:text-white placeholder-black/40 dark:placeholder-white/50 focus:outline-none focus:border-fs-orange transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="ds-outline-btn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="bg-fs-orange text-white">
        <div className="max-w-[1440px] mx-auto px-[5vw] py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Side - Contact Info */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-[14px]">
                <span className="opacity-80">Email</span>
                <br />
                <a href="mailto:designer@example.com" className="hover:opacity-80 transition-opacity">
                  designer@example.com
                </a>
              </div>
              <div className="text-[14px]">
                <span className="opacity-80">Call Today</span>
                <br />
                <a href="tel:+15551234567" className="hover:opacity-80 transition-opacity">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            {/* Center - Copyright */}
            <div className="text-[12px] opacity-80">
              © Copyright 2025. All Rights Reserved by
              <a href="#" className="ml-1 underline hover:opacity-100 transition-opacity">
                oldstyles
              </a>
            </div>

            {/* Right Side - Social Links and Credits */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <span className="text-[14px] opacity-60">Socials</span>
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="text-[12px]">
                <span className="opacity-60">Created by</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-6 h-6 bg-fs-blue rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                    DS
                  </div>
                  <a href="#" className="underline hover:opacity-80 transition-opacity">
                    Duncan Shim
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
