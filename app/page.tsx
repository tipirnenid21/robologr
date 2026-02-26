import ContactForm from "../components/ContactForm";
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

const Card = ({ title, desc }: { title: string; desc: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <div className="text-lg font-semibold">{title}</div>
    <p className="mt-2 text-sm leading-6 text-white/70">{desc}</p>
  </div>
);

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#070A12] text-white">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* nav */}
      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 font-bold">
            R
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide">ROBOLOGR</div>
            <div className="text-xs text-white/60">
              Robot observability + dataset quality
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#product" className="hover:text-white">
            Product
          </a>
          <a href="#how" className="hover:text-white">
            How it works
          </a>
          <a href="#opensource" className="hover:text-white">
            Open-source
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          {/* replace with your real repo later */}
          <a
            href="https://github.com/tipirnenid21/robologr"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
          >
            Get updates
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-14 pt-10">
        <div className="flex flex-wrap gap-2">
          <Badge>Open-source first</Badge>
          <Badge>Episode timelines</Badge>
          <Badge>Dataset QA</Badge>
          <Badge>Failure-first</Badge>
          <Badge>Anomaly detection</Badge>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          Debug robots like software.
          <span className="block text-white/70">
            Know what happened, why it failed, and whether the data is training-worthy.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">
          ROBOLOGR is a robotics observability platform — a flight recorder + dataset quality
          toolkit that aligns video, actions, robot state, and health signals into a single
          timeline.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/tipirnenid21/robologr"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            View the repo
          </a>
          <a
            href="#product"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/85 hover:bg-white/10"
          >
            See modules
          </a>
        </div>

        {/* preview panel */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm font-semibold">Episode Viewer (preview)</div>
              <div className="text-xs text-white/60">
                video + actions + joints + currents + events
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="h-44 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-white/60">Video</div>
                <div className="mt-2 text-sm text-white/80">
                  Multi-cam scrubber + keyframes
                </div>
              </div>
              <div className="h-44 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-white/60">Signals</div>
                <div className="mt-2 text-sm text-white/80">
                  joints / torque / current / lag
                </div>
              </div>
              <div className="h-44 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-white/60">Insights</div>
                <div className="mt-2 text-sm text-white/80">
                  anomaly flags + failure notes
                </div>
              </div>
            </div>

            <div className="mt-4 h-10 rounded-xl border border-white/10 bg-white/5" />
          </div>
        </div>
      </section>

      {/* product */}
      <section id="product" className="relative mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">What you get</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
          ROBOLOGR runs next to your data (local or server). It indexes large datasets and streams
          only previews + metadata to the UI.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card
            title="Robot Observability"
            desc="Episode bundles: multi-cam video, actions, robot state, events, and derived signals aligned on a single timeline."
          />
          <Card
            title="Dataset Denoising + QA"
            desc="Quality scoring per episode/frame: blur, exposure, occlusion, dropped frames, timestamp drift, clutter, and more."
          />
          <Card
            title="Intent + Failure Labels"
            desc="Define ‘good vs bad’ and annotate intent + failure taxonomy. Export manifests instead of rewriting TBs."
          />
          <Card
            title="Failure-first Training"
            desc="Build training splits that guarantee failure coverage, plus precursor-signal reports so models learn to avoid repeats."
          />
          <Card
            title="Anomaly / Defect Detection"
            desc="Detect motor/servo issues: current drift, temperature rise, command-vs-actual lag, comm errors, saturation events."
          />
          <Card
            title="Reports & Exports"
            desc="Generate shareable run reports and export manifests for training pipelines."
          />
        </div>
      </section>

      {/* how */}
      <section id="how" className="relative mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">How it works</h2>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <pre className="overflow-x-auto text-sm text-white/80">{`# local-first workflow
robologr init /data/matcharm
robologr index
robologr process --quality --anomaly
robologr serve`}</pre>
        </div>
      </section>

      {/* open-source */}
      <section id="opensource" className="relative mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Open-source first</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
          Start with a stable episode format, recorder adapters, and the viewer. Then add QA, labeling,
          and anomaly detection modules.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Badge>Episode format</Badge>
          <Badge>Recorder adapters</Badge>
          <Badge>Viewer</Badge>
          <Badge>QA + anomalies</Badge>
          <Badge>Training manifests</Badge>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Get updates</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
            Drop your email. (We’ll connect it to a provider later.)
          </p>

          <ContactForm />

          <div className="mt-6 text-xs text-white/60">
            © {new Date().getFullYear()} ROBOLOGR
          </div>
        </div>
      </section>
    </main>
  );
}