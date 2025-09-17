import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Harris",
    role: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?q=80&w=256&auto=format&fit=crop",
    rating: 5,
    content: "PlayHire truly understood my vision and turned it into impactful designs. The results went beyond my expectations!"
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1520975682031-4e28a0b86e1a?q=80&w=256&auto=format&fit=crop",
    rating: 5,
    content: "He took the time to understand our goals and delivered a design that resonated perfectly with our audience."
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "CEO",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    rating: 5,
    content: "His design skills are unmatched. He transformed my ideas into a high-performing, visually striking website."
  },
  {
    id: 4,
    name: "Laura Bennett",
    role: "Small Business Owner",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop",
    rating: 5,
    content: "As a small business owner, I appreciated how stress-free PlayHire made the process."
  }
];

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "I offer comprehensive design services including UI/UX design, web design, mobile app design, branding, and design system creation. Each project is tailored to meet your specific needs and business goals."
  },
  {
    id: 2,
    question: "How does the design process work?",
    answer: "My design process begins with understanding your vision and goals, followed by research and strategy development. I then create initial concepts, gather your feedback, and refine the designs until they perfectly align with your expectations."
  },
  {
    id: 3,
    question: "How long does a project usually take?",
    answer: "Project timelines vary depending on scope and complexity. A typical website design takes 4-6 weeks, while comprehensive branding projects may take 6-8 weeks. I'll provide a detailed timeline during our initial consultation."
  },
  {
    id: 4,
    question: "What do I need to provide before starting a project?",
    answer: "To get started, I'll need a clear brief of your requirements, any existing brand materials, content for your project, and examples of designs you like. We'll discuss everything in detail during our kickoff meeting."
  }
];

const TestimonialsSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1440px] mx-auto px-[5vw]">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="ds-title text-foreground mb-4">
            WHAT MY CLIENTS SAY
          </h2>
          <p className="text-[16px] text-foreground/60 max-w-[600px]">
            Here's what my clients have shared about their experiences working with me.
            Their trust and satisfaction motivate me to continue delivering designs that make an impact.
          </p>
        </div>

        {/* Testimonials Grid - 3x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {/* First Row */}
          {/* Testimonial Card 1 */}
          <div className="bg-fs-white dark:bg-black rounded-[20px] p-6 border border-black/10 dark:border-white/15">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-fs-orange text-fs-orange"
                />
              ))}
            </div>
            <p className="text-[14px] text-foreground/80 mb-6 leading-relaxed">
              {testimonials[0].content}
            </p>
            <div className="flex items-center gap-3">
              <img
                src={testimonials[0].avatar}
                alt={testimonials[0].name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="text-[14px] font-medium text-foreground">
                  {testimonials[0].name}
                </div>
                <div className="text-[12px] text-foreground/60">
                  {testimonials[0].role}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-fs-white dark:bg-black rounded-[20px] p-6 border border-black/10 dark:border-white/15">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-fs-orange text-fs-orange"
                />
              ))}
            </div>
            <p className="text-[14px] text-foreground/80 mb-6 leading-relaxed">
              {testimonials[1].content}
            </p>
            <div className="flex items-center gap-3">
              <img
                src={testimonials[1].avatar}
                alt={testimonials[1].name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="text-[14px] font-medium text-foreground">
                  {testimonials[1].name}
                </div>
                <div className="text-[12px] text-foreground/60">
                  {testimonials[1].role}
                </div>
              </div>
            </div>
          </div>

          {/* 98% Satisfaction Card (right of first row) */}
          <div className="bg-black dark:bg-white rounded-[20px] p-6 text-white dark:text-black flex flex-col justify-center items-center min-h-[250px]">
            <div className="text-[12px] opacity-80 mb-2 text-center">
              I've worked with 50+ happy clients
            </div>
            <div className="text-[56px] font-bold leading-none">98%</div>
            <div className="text-[14px] opacity-80 mt-2">Satisfaction Rate</div>
          </div>

          {/* Second Row */}
          {/* 200% Growth Card (left of second row) */}
          <div className="bg-fs-blue rounded-[20px] p-6 text-white flex flex-col justify-center items-center min-h-[250px]">
            <div className="text-[12px] opacity-80 mb-2 text-center">
              My work helped clients grow their revenue by 200%
            </div>
            <div className="text-[56px] font-bold leading-none">200%</div>
            <div className="text-[14px] opacity-80 mt-2">Growth</div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-fs-white dark:bg-black rounded-[20px] p-6 border border-black/10 dark:border-white/15">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-fs-orange text-fs-orange"
                />
              ))}
            </div>
            <p className="text-[14px] text-foreground/80 mb-6 leading-relaxed">
              {testimonials[2].content}
            </p>
            <div className="flex items-center gap-3">
              <img
                src={testimonials[2].avatar}
                alt={testimonials[2].name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="text-[14px] font-medium text-foreground">
                  {testimonials[2].name}
                </div>
                <div className="text-[12px] text-foreground/60">
                  {testimonials[2].role}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 4 */}
          <div className="bg-fs-white dark:bg-black rounded-[20px] p-6 border border-black/10 dark:border-white/15">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-fs-orange text-fs-orange"
                />
              ))}
            </div>
            <p className="text-[14px] text-foreground/80 mb-6 leading-relaxed">
              {testimonials[3].content}
            </p>
            <div className="flex items-center gap-3">
              <img
                src={testimonials[3].avatar}
                alt={testimonials[3].name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="text-[14px] font-medium text-foreground">
                  {testimonials[3].name}
                </div>
                <div className="text-[12px] text-foreground/60">
                  {testimonials[3].role}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQ Title */}
          <div>
            <h2 className="ds-title text-foreground mb-4">
              FREQUENTLY ASKED<br />QUESTIONS
            </h2>
            <p className="text-[16px] text-foreground/60 max-w-[400px]">
              Here are answers to some of the most common questions I receive as a freelance designer.
              If you don't see your question here, feel free to reach out—I'm happy to help!
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border-b border-black/10 dark:border-white/15 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between py-4 text-left transition-all hover:text-fs-blue"
                >
                  <span className="text-[18px] font-medium text-foreground uppercase tracking-wide">
                    {index + 1}. {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-foreground/60 transition-transform duration-200",
                      openFAQ === faq.id && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    openFAQ === faq.id ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-[14px] text-foreground/60 pb-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
