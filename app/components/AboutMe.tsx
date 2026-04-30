export default function AboutMe() {
  return (
    <section className="mb-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-headline text-headline-lg uppercase">About_Me</h2>
        <div className="flex-grow h-0.5 bg-on-background/10"></div>
        <div className="font-label-caps text-label-caps text-secondary">
          [ 001 ]
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Bio Section */}
        <div className="md:col-span-8 space-y-6">
          <div className="p-8 border-2 border-on-background bg-surface-container-lowest window-shadow">
            <h3 className="font-headline text-headline-md mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                person
              </span>
              Who Am I?
            </h3>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
              I am a passionate Software Engineer with a deep interest in
              low-level systems, distributed computing, and crafting highly
              efficient digital solutions. My journey began in the terminal, and
              I&apos;ve spent years honing my skills in languages like Rust,
              TypeScript, and Go.
            </p>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed mt-4">
              I believe in writing clean, maintainable code and building
              architectures that can scale with the demands of modern
              technology. When I&apos;m not debugging complex systems, you can
              find me contributing to open-source projects or exploring the
              latest advancements in cloud-native technologies.
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="md:col-span-4 grid grid-cols-1 gap-6">
          <div className="p-6 border-2 border-secondary bg-surface-container-lowest window-shadow">
            <h4 className="font-label-caps text-label-caps text-secondary mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">school</span>
              Education
            </h4>
            <p className="font-headline font-bold text-on-background">
              B.S. Computer Science
            </p>
            <p className="text-xs font-code text-on-surface-variant mt-1">
              Tech University // 2018-2022
            </p>
          </div>

          <div className="p-6 border-2 border-tertiary bg-surface-container-lowest window-shadow">
            <h4 className="font-label-caps text-label-caps text-tertiary mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">history</span>
              Experience
            </h4>
            <p className="font-headline font-bold text-on-background">
              4+ Years
            </p>
            <p className="text-xs font-code text-on-surface-variant mt-1">
              Full Stack Development
            </p>
          </div>

          <div className="p-6 border-2 border-primary bg-surface-container-lowest window-shadow">
            <h4 className="font-label-caps text-label-caps text-primary mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">
                location_on
              </span>
              Base of Ops
            </h4>
            <p className="font-headline font-bold text-on-background">
              Earth, Solis
            </p>
            <p className="text-xs font-code text-on-surface-variant mt-1">
              Remote-first enabled
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
