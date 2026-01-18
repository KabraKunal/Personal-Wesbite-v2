interface Problem {
  title: string;
  coreQuestion: string;
  context: string;
  threads: string[];
  status: "exploring" | "researching" | "writing";
}

interface ProblemCardProps {
  problem: Problem;
}

const statusColors = {
  exploring: "bg-blue-500/20 text-blue-400",
  researching: "bg-yellow-500/20 text-yellow-400",
  writing: "bg-green-500/20 text-green-400",
};

const statusLabels = {
  exploring: "Early exploration",
  researching: "Actively researching",
  writing: "Writing about it",
};

export function ProblemCard({ problem }: ProblemCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 card-hover">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${statusColors[problem.status]}`}
        >
          {statusLabels[problem.status]}
        </span>
      </div>

      <p className="mb-4 text-base italic text-primary">{problem.coreQuestion}</p>

      <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
        {problem.context}
      </p>

      <div>
        <p className="mb-2 text-sm font-medium text-foreground">
          Threads I'm pulling on:
        </p>
        <ul className="list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
          {problem.threads.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export type { Problem };
