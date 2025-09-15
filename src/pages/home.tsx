import Navigation from "@/components/layout/navigation";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import AboutSection from "@/components/sections/about";
import ProjectsSection from "@/components/sections/projects";
import TestimonialsSection from "@/components/sections/testimonials";
import BlogSection from "@/components/sections/blog";
import ContactSection from "@/components/sections/contact";
import FlipCard from "@/components/shared/flip-card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />

      {/* 翻转卡片 - 覆盖在页面上方 */}
      <FlipCard
        frontImage="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=840&auto=format&fit=crop"
        backImage="https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=800&auto=format&fit=crop"
      />
    </div>
  );
}
