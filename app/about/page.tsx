import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="About" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-row-reverse gap-16">
          {/* Sidebar navigation - rendered first for stable right positioning */}
          <Sidebar />
          
          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="max-w-prose">
              <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground">
                About me
              </h1>

              <div className="space-y-6 text-foreground leading-relaxed">
                <p>
                  {"I'm Kunal Kabra, an Associate Consultant at Bain & Company with a background in mechanical engineering and energy systems from IIT Bombay. I care deeply about building things that scale: companies, technologies, and institutions, especially in environments where constraints are real and execution matters more than theory."}
                </p>

                <p>
                  {"My work sits at the intersection of strategy, engineering, and technology. I'm drawn to problems where first-principles thinking meets messy reality. Things like capital allocation, industrial scaling, system design, and long-horizon transitions."}
                </p>

                <p>
                  This site is where I think in public about systems, execution, and
                  scale.
                </p>
              </div>

              {/* What I believe */}
              <section className="mt-12">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  What I believe
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    Enduring companies are built by people who understand both the
                    model and the machine: how value is created and how it gets
                    executed.
                  </p>
                  <p>Strategy without engineering is hand-waving.</p>
                  <p>Engineering without strategy is local optimization.</p>
                  <p>
                    The edge comes from combining both, patiently, rigorously, and
                    over long time horizons.
                  </p>
                </div>
              </section>

              {/* What I'm interested in */}
              <section className="mt-12">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  {"What I'm interested in"}
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    {"Lately, I'm most curious about:"}
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      Why some Indian manufacturing and technology companies compound while others stall
                    </li>
                    <li>
                      How energy transitions actually scale (capex cycles, incentives, failure modes, and second-order effects)
                    </li>
                    <li>
                      The role of AI as leverage in engineering, strategy, and decision-making
                    </li>
                    <li>
                      How individuals build agency inside large systems without waiting for permission
                    </li>
                  </ul>
                  <p className="text-muted-foreground">
                    {"I'm"} always open to thoughtful conversations with builders, investors, and operators who care about doing hard things well.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="mt-12 border-t border-border pt-8">
                <h2 className="mb-4 text-lg font-semibold text-foreground">
                  Get in touch
                </h2>
                <p className="text-muted-foreground">
                  {"I'm"} always happy to connect with people thinking about similar
                  problems. Reach out via{" "}
                  <a
                    href="mailto:kunal.kabra.iitb@gmail.com"
                    className="text-primary hover:underline"
                  >
                    email
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
