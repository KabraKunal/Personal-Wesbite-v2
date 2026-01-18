import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { ProblemCard, type Problem } from "@/components/problem-card";

const problems: Problem[] = [
  {
    title: "India's Manufacturing Execution Gap",
    coreQuestion:
      "Why do Indian factories consistently struggle with the final 20% of execution?",
    context:
      "India has capital, labor, and policy support, yet manufacturing output quality and consistency lag behind East Asian competitors. I keep returning to this question because the answers aren't obvious.",
    threads: [
      "Skill development and its disconnect from factory floor realities",
      "The middle management bottleneck in scaling operations",
      "Quality control systems designed for compliance vs. improvement",
      "Supplier ecosystem depth and what builds it over time",
    ],
    status: "researching",
  },
  {
    title: "Capital Allocation in Deep Tech",
    coreQuestion:
      "How should capital be deployed in hardware-heavy industries with 10+ year horizons?",
    context:
      "Traditional VC models optimize for 7-year fund cycles, but deep tech companies need patient capital over much longer periods. The mismatch creates strange incentives.",
    threads: [
      "Fund structures and LP expectation alignment",
      "Technical due diligence gaps in most investment teams",
      "The pressure toward premature scaling and its consequences",
      "Historical examples of patient capital done right",
    ],
    status: "exploring",
  },
  {
    title: "Energy Transition Economics",
    coreQuestion:
      "What makes some clean energy transitions succeed while others stall?",
    context:
      "Policy support is necessary but not sufficient. I'm trying to understand the underlying mechanisms that drive successful transitions at scale.",
    threads: [
      "How intermittent policy signals affect investment decisions",
      "The lag between generation capacity and grid infrastructure",
      "Storage economics across different applications and geographies",
      "System-level thinking vs. component-level optimization",
    ],
    status: "writing",
  },
];

export default function ProblemsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="Problems I'm exploring" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-row-reverse gap-16">
          {/* Sidebar navigation - rendered first for stable right positioning */}
          <Sidebar />
          
          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="max-w-4xl">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
                {"Problems I'm exploring"}
              </h1>
              <p className="mb-8 text-lg text-muted-foreground max-w-prose">
                Real questions with constraints and economics attached. These are
                research questions, not completed projects.
              </p>

              {/* Problems grid */}
              <div className="grid gap-6 md:grid-cols-2">
                {problems.map((problem) => (
                  <ProblemCard key={problem.title} problem={problem} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
