import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/layout/navigation";
import { projectDetails, relatedProjects } from "@/data/project-details";

const badgeStyles = "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/15 dark:border-white/15 bg-white/80 dark:bg-black/70 text-[13px] font-semibold tracking-[0.2em] uppercase text-foreground";

const metaLabelStyles = "text-[12px] uppercase tracking-[0.18em] text-foreground/50";

const metaValueStyles = "mt-2 text-[18px] font-semibold text-foreground";

const sectionHeadingStyles = "text-[28px] md:text-[34px] font-black uppercase tracking-[0.08em] text-foreground";

const ProjectDetailPage = () => {
  const params = useParams();
  const project = useMemo(() => {
    if (!params.slug) return projectDetails[0];
    return projectDetails.find((item) => item.slug === params.slug) ?? projectDetails[0];
  }, [params.slug]);

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      <Navigation />

      <main className="relative pt-32">
        <div className="max-w-[1200px] mx-auto px-[5vw] flex flex-col gap-24">
          {/* Hero */}
          <section className="grid gap-12">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <span className={badgeStyles}>{project.category}</span>
              <div className="flex items-center gap-3 bg-white/80 dark:bg-black/80 border border-black/10 dark:border-white/10 rounded-full px-4 py-2 backdrop-blur">
                <div className="h-8 w-8 rounded-full bg-black/10 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=120&auto=format&fit=crop"
                    alt="avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-[13px] font-medium text-black/70 dark:text-white/70">Available for work</span>
              </div>
            </div>

            <div className="space-y-6 max-w-[880px]">
              <h1 className="text-[92px] md:text-[120px] leading-[0.9] font-black uppercase tracking-tight">
                {project.title}
              </h1>
              <p className="text-[18px] md:text-[20px] leading-relaxed text-foreground/80">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border border-black/10 dark:border-white/10 rounded-[26px] px-8 py-6 bg-white/80 dark:bg-black/60 backdrop-blur">
              <div>
                <p className={metaLabelStyles}>Year</p>
                <p className={metaValueStyles}>{project.year}</p>
              </div>
              <div>
                <p className={metaLabelStyles}>Industry</p>
                <p className={metaValueStyles}>{project.industry}</p>
              </div>
              <div>
                <p className={metaLabelStyles}>Client</p>
                <p className={metaValueStyles}>{project.client}</p>
              </div>
              <div>
                <p className={metaLabelStyles}>Project Duration</p>
                <p className={metaValueStyles}>{project.duration}</p>
              </div>
            </div>

            <div className="rounded-[30px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.18)]">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Sections */}
          <section className="space-y-24">
            {project.sections.map((section) => (
              <article key={section.heading} className="space-y-10">
                <header className="space-y-4">
                  <h2 className={sectionHeadingStyles}>{section.heading} :</h2>
                  <p className="max-w-[820px] text-[17px] leading-[1.8] text-foreground/75">
                    {section.body}
                  </p>
                </header>

                {section.images && section.images.length > 0 && (
                  <div
                    className={
                      section.images.length === 1
                        ? "grid rounded-[26px] overflow-hidden"
                        : "grid gap-6 md:grid-cols-2"
                    }
                  >
                    {section.images.map((src, idx) => (
                      <div
                        key={idx}
                        className="rounded-[26px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.16)]"
                      >
                        <img src={src} alt={`${section.heading} visual ${idx + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </section>

          {/* Related projects */}
          <section className="space-y-12">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-[44px] md:text-[56px] font-black uppercase tracking-tight">More Projects</h3>
              <Link
                to="/"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 dark:border-white/20 text-[14px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                Back to Home
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.map((item) => (
                <div
                  key={item.slug}
                  className="group h-full rounded-[26px] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur p-6 flex flex-col gap-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="rounded-[20px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="self-start px-3 py-1 text-[11px] rounded-full border border-black/15 dark:border-white/15 text-foreground/60 uppercase tracking-[0.2em]">
                    {item.category}
                  </span>
                  <h4 className="text-[24px] font-bold uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[15px] leading-relaxed text-foreground/70 flex-1">
                    {item.description}
                  </p>
                  <Link
                    to={`/projects/${item.slug}`}
                    className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-foreground/80 hover:text-fs-orange transition-colors"
                  >
                    View Case Study
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              ))}
            </div>

            <Link
              to="/"
              className="md:hidden inline-flex w-full items-center justify-center gap-2 px-6 py-3 rounded-full border border-black/15 dark:border-white/20 text-[14px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              Back to Home
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;
