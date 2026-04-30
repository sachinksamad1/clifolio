export interface LogEntry {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
}

export const logs: LogEntry[] = [
  {
    id: "log-001",
    title: "System Initialization: The Journey Begins",
    date: "2024-03-15",
    excerpt:
      "Reflecting on the architecture decisions for the new distributed engine and the shift towards memory-safe languages.",
    category: "ARCHITECTURE",
    tags: ["RUST", "DESIGN"],
  },
  {
    id: "log-002",
    title: "Optimizing Garbage Collection in High-Load Systems",
    date: "2024-02-28",
    excerpt:
      "A deep dive into tuning memory management for sub-millisecond latency in real-time communication protocols.",
    category: "PERFORMANCE",
    tags: ["GO", "LATENCY"],
  },
  {
    id: "log-003",
    title: "The Terminal Aesthetic: Why CLI Matters",
    date: "2024-01-10",
    excerpt:
      "Exploring the intersection of developer productivity and minimalist user interface design in modern web tools.",
    category: "DESIGN",
    tags: ["UI", "UX"],
  },
  {
    id: "log-004",
    title: "Breaking the Monolith: A Migration Story",
    date: "2023-12-05",
    excerpt:
      "Lessons learned while moving a legacy enterprise system to a distributed microservices architecture.",
    category: "ENGINEERING",
    tags: ["MICROSERVICES", "SCALABILITY"],
  },
];
