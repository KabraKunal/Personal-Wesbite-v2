interface TagPillProps {
  tag: string;
  size?: "sm" | "md";
}

const tagColors: Record<string, string> = {
  business: "bg-blue-500/20 text-blue-400",
  technology: "bg-green-500/20 text-green-400",
  manufacturing: "bg-orange-500/20 text-orange-400",
  philosophy: "bg-purple-500/20 text-purple-400",
};

export function TagPill({ tag, size = "sm" }: TagPillProps) {
  const colorClass = tagColors[tag.toLowerCase()] || "bg-muted text-muted-foreground";
  const sizeClass = size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";

  return (
    <span className={`inline-block rounded-full font-medium ${colorClass} ${sizeClass}`}>
      {tag}
    </span>
  );
}
