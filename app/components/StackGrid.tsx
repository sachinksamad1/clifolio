const stackItems = [
  {
    icon: "code",
    title: "Languages",
    description: "Rust, TS, Go, Python",
    color: "text-primary",
  },
  {
    icon: "database",
    title: "Databases",
    description: "Postgres, Redis, Mongo",
    color: "text-secondary",
  },
  {
    icon: "cloud",
    title: "Cloud",
    description: "AWS, K8s, Terraform",
    color: "text-tertiary",
  },
  {
    icon: "architecture",
    title: "Frameworks",
    description: "React, Next.js, Axum",
    color: "text-primary",
  },
];

export default function StackGrid() {
  return (
    <section id="stack" className="mb-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-headline text-headline-lg uppercase">
          System_Stack
        </h2>
        <div className="flex-grow h-0.5 bg-on-background/10"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stackItems.map((item) => (
          <div
            key={item.title}
            className="group p-6 border-2 border-on-background bg-surface-container-lowest window-shadow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer hover:bg-surface-container-low"
          >
            <span
              className={`material-symbols-outlined ${item.color} mb-2 transition-transform group-hover:scale-110`}
              aria-hidden="true"
            >
              {item.icon}
            </span>
            <p className="font-label-caps text-label-caps text-on-background">
              {item.title}
            </p>
            <p className="text-xs font-code text-on-surface-variant mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
