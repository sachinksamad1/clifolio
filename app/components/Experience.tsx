interface ExperienceEntryProps {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  borderColor?: string;
}

function ExperienceEntry({
  company,
  role,
  period,
  description,
  tags,
  borderColor = "border-on-background",
}: ExperienceEntryProps) {
  return (
    <div
      className={`p-8 border-2 ${borderColor} bg-surface-container-lowest window-shadow relative overflow-hidden group transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer hover:bg-surface-container-low`}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
        <div>
          <h3 className="font-headline text-headline-md">{role}</h3>
          <p
            className={`font-label-caps text-xs ${borderColor.replace("border-", "text-")} font-bold uppercase brightness-90`}
          >
            {company}
          </p>
        </div>
        <div className="font-code text-xs text-on-surface-variant bg-surface-container px-3 py-1 border border-on-background/20">
          {period}
        </div>
      </div>
      <p className="font-body text-body-md text-on-surface-variant leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 border border-on-background/20 font-code text-[10px] bg-surface-container-low"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      company: "TechCorp Systems",
      role: "Senior Software Engineer",
      period: "2022 — PRESENT",
      description:
        "Leading the core infrastructure team in developing high-throughput messaging brokers. Optimized system latency by 40% using Rust and implemented automated failover protocols.",
      tags: ["RUST", "KUBERNETES", "DISTRIBUTED SYSTEMS"],
      borderColor: "border-primary",
    },
    {
      company: "StartupInc",
      role: "Software Developer",
      period: "2020 — 2022",
      description:
        "Engineered full-stack features for a cloud-native monitoring platform. Spearheaded the migration from a monolithic architecture to microservices using Go and Docker.",
      tags: ["GO", "TYPESCRIPT", "MICROSERVICES"],
      borderColor: "border-secondary",
    },
    {
      company: "WebSol Agency",
      role: "Junior Developer",
      period: "2018 — 2020",
      description:
        "Developed and maintained various client-facing web applications. Focused on UI performance and implementing responsive design patterns across diverse platforms.",
      tags: ["REACT", "POSTGRESQL", "NODE.JS"],
      borderColor: "border-tertiary",
    },
  ];

  return (
    <section className="mb-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-headline text-headline-lg uppercase">
          Work_History
        </h2>
        <div className="flex-grow h-0.5 bg-on-background/10"></div>
        <div className="font-label-caps text-label-caps text-tertiary">
          [ 002 ]
        </div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceEntry key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}
