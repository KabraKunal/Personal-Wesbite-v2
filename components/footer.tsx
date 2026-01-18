import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
        <p>
          Contact:{" "}
          <a
            href="mailto:kunal.kabra.iitb@gmail.com"
            className="text-primary hover:underline"
          >
            kunal.kabra.iitb@gmail.com
          </a>
          {" · "}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            LinkedIn
          </a>
          {" · "}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            WhatsApp
          </a>
          {" · "}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Instagram
          </a>
        </p>
        <p>
          <span className="font-mono text-xs">Last updated:</span> 1st January,
          2026
        </p>
      </div>
    </footer>
  );
}
