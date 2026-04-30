import Link from "next/link";
import { logs } from "@/data/logs";
import LogCard from "./LogCard";

export default function LogsSection() {
  const recentLogs = logs.slice(0, 3);

  return (
    <section className="mb-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-headline text-headline-lg uppercase">
          Activity_Logs
        </h2>
        <div className="flex-grow h-0.5 bg-on-background/10"></div>
        <Link
          href="/logs"
          className="font-label-caps text-label-caps text-primary hover:underline flex items-center gap-2"
        >
          VIEW_ALL_LOGS{" "}
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentLogs.map((log) => (
          <LogCard key={log.id} log={log} />
        ))}
      </div>
    </section>
  );
}
