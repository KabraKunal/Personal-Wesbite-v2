import Link from "next/link";
import { TagPill } from "./tag-pill";

export interface Essay {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

interface EssayCardProps {
  essay: Essay;
}

export function EssayCard({ essay }: EssayCardProps) {
  return (
    <article className="border-b border-border py-6 first:pt-0 last:border-b-0">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <time className="text-sm text-muted-foreground">{essay.date}</time>
        {essay.tags.map((tag) => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>
      <Link href={`/essays/${essay.slug}`} className="group">
        <h3 className="mb-2 text-lg font-semibold text-primary group-hover:underline">
          {essay.title}
        </h3>
      </Link>
      <p className="text-muted-foreground">{essay.description}</p>
    </article>
  );
}
