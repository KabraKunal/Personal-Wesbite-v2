import Image from "next/image";

export function ProfileCard() {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="mb-4 overflow-hidden rounded-lg">
        <Image
          src="/images/portrait.jpg"
          alt="Kunal Kabra"
          width={200}
          height={200}
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-medium text-foreground">Currently:</span>{" "}
          <span className="text-primary">Mumbai, India</span>
        </p>
        <p>
          <span className="font-medium text-foreground">Focus:</span>{" "}
          <span className="text-primary">Building</span>
          {" · "}
          <span className="text-primary">Writing</span>
          {" · "}
          <span className="text-primary">Learning</span>
        </p>
        <p className="text-muted-foreground">
          Strategy, technology, and India&apos;s industrial future
        </p>
      </div>
    </div>
  );
}
