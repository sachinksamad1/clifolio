interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  borderColor?: string;
  headerBg?: string;
  titleColor?: string;
}

export default function TerminalWindow({
  title,
  children,
  borderColor = "border-primary",
  headerBg = "bg-primary-container/20",
  titleColor = "text-primary",
}: TerminalWindowProps) {
  return (
    <div
      className={`bg-surface-container-lowest border-2 ${borderColor} window-shadow overflow-hidden`}
    >
      {/* Window Bar */}
      <div
        className={`h-8 border-b-2 ${borderColor} ${headerBg} flex items-center px-4 justify-between`}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div
          className={`font-code text-code-sm ${titleColor} uppercase font-bold tracking-widest`}
        >
          {title}
        </div>
      </div>
      {/* Window Content */}
      <div className="p-6 font-code text-code-sm leading-relaxed text-on-background overflow-x-auto">
        {children}
      </div>
    </div>
  );
}
