// no utils needed here

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
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Tutorials",
    date: "Apr 27, 2025",
    title: "HOW TO STREAMLINE YOUR DESIGN WORKFLOW",
    description: "Discover practical strategies to improve your design process, save time, and deliver quality work more efficiently.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop"
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
              <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Meta (outside image) */}
              <div className="flex items-center gap-2 mt-3 mb-2">
                <span className="px-2 py-0.5 text-[12px] text-fs-blue rounded-full border border-fs-blue/40">
                  {post.category}
                </span>
                <span className="text-[12px] text-foreground/70">{post.date}</span>
              </div>

              {/* Content */}
              <div className="pt-1">
                {/* Title */}
                <h3 className="text-[24px] font-bold tracking-tight uppercase text-foreground mb-2 group-hover:text-fs-orange transition-colors">
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
