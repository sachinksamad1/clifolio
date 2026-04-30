"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="mb-24">
      <div className="bg-surface-container-highest border-4 border-on-background p-8 md:p-12 relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rotate-45 translate-x-16 -translate-y-16 border-2 border-primary"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-headline text-headline-lg uppercase">
              WANT_TO_COLLABORATE?
            </h2>
            <div className="font-label-caps text-xs text-primary bg-primary/10 px-2 py-1 border border-primary/20">
              [ INCOMING_COMMUNICATION ]
            </div>
          </div>

          <p className="font-body text-body-md text-on-surface-variant mb-8 max-w-2xl">
            Drop your encrypted message here or follow my activity logs on
            GitHub. I&apos;m always open to discussing new system architecture
            challenges, open-source contributions, or potential partnerships.
          </p>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            suppressHydrationWarning
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="font-label-caps text-[10px] text-on-background uppercase font-bold">
                01_IDENTIFIER
              </label>
              <input
                className="w-full bg-surface-container-lowest border-2 border-on-background p-3 font-code focus:outline-none focus:border-primary transition-colors text-on-background"
                placeholder="YOUR_NAME"
                type="text"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="font-label-caps text-[10px] text-on-background uppercase font-bold">
                02_RETURN_ADDRESS
              </label>
              <input
                className="w-full bg-surface-container-lowest border-2 border-on-background p-3 font-code focus:outline-none focus:border-primary transition-colors text-on-background"
                placeholder="EMAIL@DOMAIN.COM"
                type="email"
                required
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="font-label-caps text-[10px] text-on-background uppercase font-bold">
                03_ENCRYPTED_PAYLOAD
              </label>
              <textarea
                className="w-full bg-surface-container-lowest border-2 border-on-background p-3 font-code focus:outline-none focus:border-primary transition-colors text-on-background min-h-[120px] resize-none"
                placeholder="DESCRIBE_YOUR_MISSION_OBJECTIVES..."
                required
              />
            </div>

            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                className="group relative bg-on-background text-background px-10 py-4 font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all cursor-pointer window-shadow active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <span className="flex items-center gap-2">
                  SEND_INIT{" "}
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    send
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
