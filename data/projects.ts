export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  variant: "large" | "small" | "wide";
  idLabel: string;
  borderColor?: string;
  link?: string;
  version?: string;
  cliCommand?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "nexus-db",
    title: "NexusDB Engine",
    description:
      "A distributed key-value store built in Rust for high-throughput messaging systems. Optimized for sub-millisecond latency.",
    longDescription:
      "NexusDB is a research-grade distributed database engine. It implements the Raft consensus algorithm for consistency and uses a custom LSM-tree storage engine optimized for NVMe drives. The project focuses on high availability and horizontal scalability in cloud-native environments.",
    tags: ["RUST", "DISTRIBUTED", "RAFT"],
    variant: "large",
    idLabel: "PROJECT_01 // CORE_INFRA",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAzMwLas1gPQUWxdSDoRyr8KCQpooNlTfXqe9TINAOGAMZ7zZHJ2YYsHZ8kc7QevAOIeerIcWo0rQvgWDkS1BUN-MQlUMMrlQBk7-_6Iagg-gGuvSWwqE9sJ2ik7VBX3SVD3mb6VEBQ7ooftGEKVuzWT913047V8fxTICF43q3ibDHpJ5gDq6blmGFVzpyZ-aXbKHUxJFG1WRcqb17kIrCMXlMAvrTqqxlRlC_pAs3l169Yk3wuPWpeWnfVy3HFzeozFHmlGDnk-Y",
    featured: true,
  },
  {
    id: "synth-ui",
    title: "Synth-UI Kit",
    description:
      "Light-weight React library for terminal-inspired web interfaces.",
    longDescription:
      "Synth-UI is a collection of React components designed for developers who love the CLI aesthetic. It includes windows, buttons, and layouts that look like they belong in a terminal, but with the power of modern web technologies and full accessibility support.",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND"],
    variant: "small",
    idLabel: "WEB_UI",
    borderColor: "border-secondary",
    version: "v2.4.0",
    featured: true,
  },
  {
    id: "vortex-git",
    title: "Vortex Git",
    description:
      "Interactive visualization tool for complex Git histories and branch merges.",
    longDescription:
      "Vortex Git helps developers understand complex repository structures. It generates interactive 3D graphs of git commits, branches, and merges, making it easier to identify merge conflicts and track project evolution over time.",
    tags: ["GO", "THREE.JS", "GIT"],
    variant: "small",
    idLabel: "CLI_TOOL",
    borderColor: "border-tertiary",
    cliCommand: "vortex --visualize",
    featured: true,
  },
  {
    id: "pulse-os",
    title: "Pulse OS",
    description:
      "A research-led mobile operating system interface focusing on minimalist notification management.",
    longDescription:
      "Pulse OS is a concept for a mobile operating system that reduces digital fatigue. It uses an AI-driven intent engine to prioritize notifications and features a minimalist UI that adapts based on the user's current activity and environment.",
    tags: ["KOTLIN", "MOBILE", "UX-RESEARCH"],
    variant: "wide",
    idLabel: "MOBILE_OS",
    borderColor: "border-primary",
    link: "#",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPrpzllS9kTFJWCehMKaVXn-n3yuoIJvCWt5PWjNLflCAic3zI_BYA1l7F_rknvo2lqoHA9thVLzKQfqWxrVxLjsLdbi-S6rPDmLYNCzRau6wAS5X7Egg7eBPT_N2jqTlVROHcPfS0NkVIXQ2AQC1fbLPraaRZIqtuf7Mi3rulbJ08lYSVUe263Fl2bfNkYKDFX4VjuJwjq9cf5LLFoBwBvcBgN1jsTbyicMnw-2rUVgYirSOrEkE0291XgdnUoOurVdZTKbntZtc",
    featured: true,
  },
  {
    id: "quantum-crypt",
    title: "QuantumCrypt",
    description:
      "Experimental post-quantum encryption library for secure communication.",
    longDescription:
      "QuantumCrypt is a library implementing lattice-based cryptography designed to be resistant to quantum computer attacks. It provides a simple API for key exchange and digital signatures.",
    tags: ["C++", "SECURITY", "CRYPTO"],
    variant: "small",
    idLabel: "SECURITY_RESEARCH",
    borderColor: "border-secondary",
    version: "v0.1.2-alpha",
  },
  {
    id: "skyline-k8s",
    title: "Skyline K8s",
    description:
      "Real-time dashboard for Kubernetes cluster health and resource allocation.",
    longDescription:
      "Skyline provides a high-level overview of Kubernetes clusters. It uses Prometheus metrics to visualize resource usage, pod health, and network traffic in a clean, terminal-inspired dashboard.",
    tags: ["TYPESCRIPT", "PROMETHEUS", "K8S"],
    variant: "wide",
    idLabel: "DEVOPS_TOOL",
    borderColor: "border-on-background",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1280&auto=format&fit=crop",
  },
];
