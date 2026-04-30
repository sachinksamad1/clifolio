interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  variant: "large" | "small" | "wide";
  idLabel: string;
  borderColor?: string;
  headerBg?: string;
  link?: string;
  version?: string;
  cliCommand?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  variant,
  idLabel,
  borderColor = "border-on-background",
  headerBg = "bg-surface-container/10",
  link,
  version,
  cliCommand,
}: ProjectCardProps) {
  const colSpan = variant === "small" ? "md:col-span-4" : "md:col-span-8";

  return (
    <div
      className={`${colSpan} bg-surface-container-lowest border-2 ${borderColor} window-shadow overflow-hidden group flex flex-col`}
    >
      {/* Header */}
      <div
        className={`h-8 border-b-2 ${borderColor} ${headerBg} flex items-center px-4 justify-between`}
      >
        <div className="flex gap-1.5">
          <div
            className={`w-2.5 h-2.5 rounded-full ${borderColor.replace("border-", "bg-")}`}
          ></div>
          <div
            className={`w-2.5 h-2.5 rounded-full ${borderColor.replace("border-", "bg-")}`}
          ></div>
          <div
            className={`w-2.5 h-2.5 rounded-full ${borderColor.replace("border-", "bg-")}`}
          ></div>
        </div>
        <div
          className={`font-label-caps text-[10px] uppercase ${borderColor.replace("border-", "text-")}`}
        >
          {idLabel}
        </div>
      </div>

      {/* Content */}
      {variant === "large" || variant === "wide" ? (
        <div
          className={`grid md:grid-cols-2 h-full ${variant === "wide" ? "flex-row-reverse" : ""}`}
        >
          <div
            className={`p-8 space-y-4 ${variant === "wide" ? "order-1 md:order-2" : ""}`}
          >
            <h3 className="font-headline text-headline-md">{title}</h3>
            <p className="text-on-surface-variant font-body">{description}</p>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 border border-on-background font-code text-xs bg-surface-container"
                  >
                    [ {tag} ]
                  </span>
                ))}
              </div>
            )}
            {link && (
              <button
                className={`flex items-center gap-2 font-label-caps text-xs ${borderColor.replace("border-", "text-")} group-hover:underline mt-4`}
              >
                READ_CASE_STUDY{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            )}
          </div>
          {image && (
            <div
              className={`relative bg-zinc-100 border-on-background overflow-hidden min-h-[200px] ${variant === "wide" ? "border-r-2 order-2 md:order-1" : "border-l-2"}`}
            >
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="font-headline text-headline-md mb-2">{title}</h3>
            <p className="text-on-surface-variant text-sm">{description}</p>
          </div>
          <div className="mt-4 flex justify-between items-end">
            {version && (
              <span
                className={`font-code text-xs ${borderColor.replace("border-", "text-")}`}
              >
                [ {version} ]
              </span>
            )}
            {cliCommand && (
              <div
                className={`font-code text-xs text-tertiary-container bg-on-background px-2 py-1`}
              >
                $ {cliCommand}
              </div>
            )}
            {!cliCommand && (
              <span
                className={`material-symbols-outlined ${borderColor.replace("border-", "text-")}`}
              >
                open_in_new
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
