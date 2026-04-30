import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t-2 border-outline-variant border-dashed mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-10 max-w-[1280px] mx-auto gap-4">
        <div className="font-mono text-xs uppercase tracking-widest text-on-background">
          © 2026 SYSTEM_OPERATOR. ALL_RIGHTS_RESERVED.
        </div>
        <div className="flex gap-8">
          <Link
            href="https://github.com"
            className="font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-150"
          >
            github
          </Link>
          <Link
            href="https://linkedin.com"
            className="font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-150"
          >
            linkedin
          </Link>
          <Link
            href="#"
            className="font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-150"
          >
            source_code
          </Link>
        </div>
      </div>
    </footer>
  );
}
