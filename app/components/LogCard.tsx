import Link from "next/link";
import { LogEntry } from "@/data/logs";

export default function LogCard({ log }: { log: LogEntry }) {
  return (
    <div className="group relative border-2 border-on-background bg-surface-container-lowest p-6 window-shadow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
      <div className="flex justify-between items-start mb-4">
        <span className="font-code text-xs text-primary bg-primary/5 px-2 py-1 border border-primary/20">
          [{log.category}]
        </span>
        <span className="font-code text-xs text-on-surface-variant">
          {log.date}
        </span>
      </div>
      <h3 className="font-headline text-headline-md mb-2 group-hover:text-primary transition-colors">
        {log.title}
      </h3>
      <p className="font-body text-body-md text-on-surface-variant line-clamp-2 mb-4">
        {log.excerpt}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {log.tags.map((tag) => (
          <span
            key={tag}
            className="font-code text-[10px] text-on-surface-variant uppercase"
          >
            #{tag}
          </span>
        ))}
      </div>
      <Link
        href={`/logs/${log.id}`}
        className="font-label-caps text-xs text-on-background flex items-center gap-2 group-hover:underline"
      >
        READ_LOG{" "}
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </Link>
    </div>
  );
}
