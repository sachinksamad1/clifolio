import { logs } from "@/data/logs";
import LogCard from "@/app/components/LogCard";
import Link from "next/link";

export default function LogsPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      <div className="mb-12">
        <nav className="flex items-center gap-2 font-code text-xs mb-4 text-on-surface-variant">
          <Link href="/" className="hover:text-primary">
            root
          </Link>
          <span>/</span>
          <span className="text-on-background font-bold uppercase">logs</span>
        </nav>
        <h1 className="font-headline text-headline-xl mb-4">
          System <span className="text-primary">Logs</span>
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
          A collection of thoughts, technical deep-dives, and activity reports
          from the system operator.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {logs.map((log) => (
          <LogCard key={log.id} log={log} />
        ))}
      </div>
    </div>
  );
}
