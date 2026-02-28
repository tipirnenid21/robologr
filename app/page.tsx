/* TEST: ROBOLOGR NEW UI */
import Logo from "../components/Logo";
import HeroArt from "../components/HeroArt";
import ContactForm from "../components/ContactForm";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

const Card = ({ title, desc }: { title: string; desc: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
    <div className="flex items-center justify-between gap-3">
      <div className="text-lg font-semibold">{title}</div>
      <div className="h-2 w-2 rounded-full bg-cyan-400/90 shadow-[0_0_24px_rgba(6,182,212,0.55)]" />
    </div>
    <p className="mt-2 text-sm leading-6 text-white/70">{desc}</p>
  </div>
);

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#070A12] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.55]" />
        <div className="absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/12 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[520px] w-[520px] rounded-full bg-white/6 blur-3xl" />
      </div>

      {/* Nav */}
      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <div className="text-sm font-semibold tracking-wide">ROBOLOGR</div>
            <div className="text-xs text-white/60">robot observability + dataset quality</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#product" className="hover:text-white">Product</a>
          <a href="#how" className="hover:text-white">How</a>
          <a href="#opensource" className="hover:text-white">Open-source</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          {/* change later to your real repo */}
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

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-14 pt-10">
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
    <div>
    {/* badges + H1 + paragraph + buttons */}
  </div>
  <HeroArt />
</div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          Debug robots like software.
          <span className="block text-white/70">
            See what happened, why it failed, and whether the data is training-worthy.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">
          ROBOLOGR is a robotics observability platform — a flight recorder + dataset quality toolkit
          that aligns multi-camera video, actions, robot state, and hardware health into a single timeline.
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

        {/* Product mock panel */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm font-semibold">Episode Timeline</div>
              <div className="text-xs text-white/60">
                video • actions • joints • current/torque • events
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Panel title="Multi-cam scrubber" desc="Keyframes + synchronized streams." />
              <Panel title="Telemetry overlays" desc="Lag, saturation, collisions, drift." />
              <Panel title="Failure narrative" desc="Auto-marked “interesting moments”." />
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Signals</span>
                <span className="text-cyan-300/90">quality: 86 • anomaly risk: low</span>
              </div>
              <div className="mt-3 h-10 rounded-xl border border-white/10 bg-black/30" />
              <div className="mt-2 h-10 rounded-xl border border-white/10 bg-black/30 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="relative mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Modules</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
          Local-first: ROBOLOGR runs next to your data, indexes large datasets, and streams only previews + metadata to the UI.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card
            title="Robot Observability"
            desc="Episode bundles: multi-cam video, actions, state, events, and derived signals aligned on a single timeline."
          />
          <Card
            title="Dataset Quality Scoring"
            desc="Blur/exposure/occlusion, dropped frames, timestamp drift, clutter — per-frame + per-episode."
          />
          <Card
            title="Intent + Failure Labels"
            desc="Define good vs bad. Tag intent and failure taxonomy with evidence (frames + signals)."
          />
          <Card
            title="Failure-first Training"
            desc="Build splits with guaranteed failure coverage + precursor reports so models don’t repeat mistakes."
          />
          <Card
            title="Hardware Anomaly Detection"
            desc="Detect current drift, overheating, comm drops, and command-vs-actual lag to separate hardware vs policy failures."
          />
          <Card
            title="Exports"
            desc="Export manifests for training pipelines (no TB rewrites), plus shareable run reports."
          />
        </div>
      </section>

      {/* How */}
      <section id="how" className="relative mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">How it works</h2>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <pre className="overflow-x-auto text-sm text-white/80">{`# local-first workflow
robologr init /data/matcharm
robologr index
robologr process --quality --anomaly
robologr serve`}</pre>
        </div>
      </section>

      {/* Open-source */}
      <section id="opensource" className="relative mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Open-source first</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
          Start with a stable episode format + viewer. Then add adapters (ROS2/custom), QA, labeling, and anomaly modules.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Badge>Episode format</Badge>
          <Badge>Recorder adapters</Badge>
          <Badge>Viewer</Badge>
          <Badge>QA + anomalies</Badge>
          <Badge>Training manifests</Badge>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold md:text-3xl">Get updates</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
            Drop your email for release notes + early templates (MatchArm-friendly).
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

function Panel({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="h-44 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/60">{title}</div>
      <div className="mt-2 text-sm text-white/80">{desc}</div>
      <div className="mt-4 h-2 w-2 rounded-full bg-cyan-400/90 shadow-[0_0_22px_rgba(6,182,212,0.55)]" />
    </div>
  );
}