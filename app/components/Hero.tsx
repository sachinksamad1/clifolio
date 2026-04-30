import Link from "next/link";
import TerminalWindow from "./TerminalWindow";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
      <div className="space-y-4">
        <div className="inline-block px-3 py-1 bg-primary text-on-primary font-headline font-bold text-label-caps border-2 border-on-background">
          [ STATUS: ACTIVE ]
        </div>
        <h1 className="font-headline font-bold text-headline-xl text-on-background">
          Hello, I&apos;m <span className="text-primary">John Doe</span>
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant max-w-2xl leading-snug">
          Software Engineer specializing in building robust, high-performance
          systems and distributed architectures. I transform complex terminal
          logic into elegant digital experiences, focusing on scalability,
          technical excellence, and the creation of seamless user-centric
          interfaces.
        </p>
        <div className="flex gap-4 pt-2">
          <Link href="/projects">
            <button className="px-6 py-3 bg-secondary-container text-on-secondary-container border-2 border-on-background font-headline font-bold text-label-caps window-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
              VIEW_RECORDS
            </button>
          </Link>
          <button className="px-6 py-3 bg-surface-container-high text-on-background border-2 border-on-background font-headline font-bold text-label-caps window-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
            CONTACT_ME
          </button>
        </div>
      </div>
      <div className="block">
        <TerminalWindow title="john_doe_stats.json">
          <pre className="m-0">
            <code>
              {`{
  `}
              <span className="text-primary">&quot;name&quot;</span>:{" "}
              <span className="text-secondary">&quot;John Doe&quot;</span>,
              {`
  `}
              <span className="text-primary">&quot;role&quot;</span>:{" "}
              <span className="text-secondary">
                &quot;Full Stack Developer&quot;
              </span>
              ,
              {`
  `}
              <span className="text-primary">&quot;location&quot;</span>:{" "}
              <span className="text-secondary">
                &quot;Earthling, Solis&quot;
              </span>
              ,
              {`
  `}
              <span className="text-primary">&quot;skills&quot;</span>: [
              {`
    `}
              <span className="text-secondary">&quot;Rust&quot;</span>,{" "}
              <span className="text-secondary">&quot;TypeScript&quot;</span>,
              {`
    `}
              <span className="text-secondary">&quot;PostgreSQL&quot;</span>,{" "}
              <span className="text-secondary">&quot;Docker&quot;</span>
              {`
  ],
  `}
              <span className="text-primary">
                &quot;coffee_consumption&quot;
              </span>
              : <span className="text-secondary">&quot;CRITICAL&quot;</span>,
              {`
  `}
              <span className="text-primary">&quot;status&quot;</span>:{" "}
              <span className="text-secondary">
                &quot;Searching for bugs...&quot;
              </span>
              {`
}`}
            </code>
          </pre>
        </TerminalWindow>
      </div>
    </section>
  );
}
