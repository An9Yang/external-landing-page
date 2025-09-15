import { cn } from "@/lib/utils";

interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "Insights",
    date: "Apr 30, 2025",
    title: "5 DESIGN TRENDS THAT WILL DEFINE 2024",
    description: "Explore the top design trends for 2024 that will influence web, UI/UX, and branding projects, helping you stay ahead of the curve.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Tutorials",
    date: "Apr 27, 2025",
    title: "HOW TO STREAMLINE YOUR DESIGN WORKFLOW",
    description: "Discover practical strategies to improve your design process, save time, and deliver quality work more efficiently.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=800&auto=format&fit=crop"
  }
];

const BlogSection = () => {
  return (
    <section id="blogs" className="py-24 bg-background">
      <div className="max-w-[1440px] mx-auto px-[5vw]">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="ds-title text-foreground mb-4">
            DESIGN INSIGHTS & IDEAS
          </h2>
          <p className="text-[16px] text-foreground/60 max-w-[600px]">
            From design trends to creative processes, these articles offer insights to help you elevate your craft,
            solve challenges, and spark new ideas for your projects.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative rounded-[20px] overflow-hidden mb-6 aspect-[16/10] bg-gray-100 border border-border">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlapping meta chip like reference */}
                <div className="absolute -bottom-4 left-4 flex items-center gap-2 bg-white border-2 border-dr-blue/40 rounded-full px-2.5 py-1.5 shadow-sm">
                  <span className="px-2 py-0.5 text-[12px] text-dr-blue rounded-full border border-dr-blue/40">
                    {post.category}
                  </span>
                  <span className="text-[12px] text-foreground/70">{post.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-2">
                {/* Title */}
                <h3 className="text-[24px] font-display tracking-wide uppercase text-foreground mb-2 group-hover:text-dr-blue transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-foreground/60 leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All Button */}
        <div className="flex justify-center">
          <button className="ds-outline-btn">
            Browse All Insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
