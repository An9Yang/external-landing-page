import Navigation from "@/components/layout/navigation";
import HeroSection from "@/components/sections/hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
    </div>
  );
}
