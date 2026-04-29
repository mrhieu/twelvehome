import React from 'react';
import { Link } from 'gatsby';
import Icon from '@mdi/react';
import { mdiApple, mdiEmailOutline } from '@mdi/js';
import MagnetickNavbar from '../../components/MagnetickNavbar';
import { MAGNETICK_APP_STORE_URL } from '../../constants/magnetick';

const MAGNETICK_EMAIL = 'magnetickapp@gmail.com';

const PhoneFrame = ({
  src,
  alt,
  className = '',
  rotate = '',
}: {
  src: string;
  alt: string;
  className?: string;
  rotate?: string;
}) => (
  <div className={`relative ${className}`}>
    <div
      className={`relative rounded-[2.6rem] bg-slate-950 p-[6px] shadow-[0_40px_120px_-30px_rgba(34,211,238,0.45),0_30px_80px_-20px_rgba(99,102,241,0.4)] ring-1 ring-white/10 ${rotate}`}
    >
      <div className="overflow-hidden rounded-[2.2rem] ring-1 ring-white/5">
        <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" />
      </div>
    </div>
  </div>
);

const Background = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[#0b0820]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.22),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(217,70,239,0.16),transparent_55%)]" />
    <div className="absolute -top-40 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
    <div className="absolute top-[35%] -right-40 h-[480px] w-[480px] rounded-full bg-fuchsia-500/10 blur-3xl" />
    <div className="absolute bottom-[-15%] -left-40 h-[520px] w-[520px] rounded-full bg-indigo-500/15 blur-3xl" />
    <div
      className="absolute inset-0 opacity-[0.06] mix-blend-screen"
      style={{
        backgroundImage:
          'linear-gradient(to right, #67e8f9 1px, transparent 1px), linear-gradient(to bottom, #67e8f9 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />
    <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-[#0b0820]" />
  </div>
);

const Waveform = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 1200 120"
    className="w-full h-16 sm:h-20 text-cyan-300"
    preserveAspectRatio="none"
  >
    <path
      d="M0 60 L120 60 L160 50 L200 70 L240 30 L280 90 L320 20 L340 100 L360 40 L400 60 L520 60 L560 55 L600 65 L640 50 L680 70 L720 60 L840 60 L880 45 L920 75 L960 25 L1000 95 L1040 50 L1080 70 L1200 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      strokeLinecap="round"
      style={{ filter: 'drop-shadow(0 0 6px rgba(34,211,238,0.7))' }}
    />
  </svg>
);

const Feature = ({ title, body }: { title: string; body: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-white/[0.05]">
    <h3 className="text-base font-semibold tracking-tight text-white">{title}</h3>
    <p className="mt-3 text-[15px] leading-relaxed text-slate-300/80">{body}</p>
  </div>
);

const Magnetick = () => (
  <div className="relative min-h-screen text-slate-100">
    <Background />

    <div className="relative">
      <MagnetickNavbar variant="dark" homeHref="/magnetick" />

      <main aria-label="Content">
        {/* Hero */}
        <section className="container max-w-6xl mx-auto px-6 pt-20 sm:pt-28 pb-24 sm:pb-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] text-white">
                Is your watch
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
                  magnetized?
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300/90">
                A magnetized hairspring can throw a mechanical watch off by
                minutes a day. Magnetick turns your iPhone into a pocket
                magnetometer so you can check any watch in seconds — quiet,
                offline, and made for hobbyists who'd rather know than guess.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={MAGNETICK_APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_10px_40px_-10px_rgba(34,211,238,0.6)] transition hover:bg-cyan-50 hover:shadow-[0_10px_50px_-10px_rgba(34,211,238,0.9)]"
                >
                  <Icon path={mdiApple} size={0.9} />
                  Download on the App Store
                </a>
                <a
                  href="#features"
                  className="text-sm font-medium text-slate-300 underline decoration-slate-600 decoration-1 underline-offset-[6px] transition hover:text-cyan-200 hover:decoration-cyan-300"
                >
                  See what it does ↓
                </a>
              </div>

              <div className="mt-12">
                <Waveform />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[300px] sm:max-w-[340px]">
                <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-cyan-400/20 via-indigo-500/20 to-fuchsia-500/20 blur-2xl" />
                <PhoneFrame
                  src="/images/magnetick/screenshots/reading_screen.png"
                  alt="Magnetick live magnetic field reading"
                  className="relative"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Showcase: Normal vs Affected */}
        <section id="features" className="container max-w-6xl mx-auto px-6 pb-28 sm:pb-36">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-300/80">
              Guided check
            </p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Clean, or magnetized?
            </h2>
            <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-slate-300/80">
              Set a baseline against the ambient field, then hold your watch up
              to the back of your iPhone. Magnetick tells you, in plain words,
              whether the case is pulling on the field around it.
            </p>
          </div>

          <div className="mt-20 grid gap-10 sm:gap-14 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-emerald-400/15 via-cyan-400/15 to-transparent blur-2xl" />
              <div className="relative">
                <PhoneFrame
                  src="/images/magnetick/screenshots/normal_value.png"
                  alt="Magnetick showing a normal reading"
                  rotate="rotate-[-2deg]"
                  className="mx-auto max-w-[320px]"
                />
                <div className="mt-8 text-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Normal
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-white">Your watch is in the clear</h3>
                  <p className="mt-2 text-sm text-slate-300/70">
                    The reading sits within a few percent of the ambient
                    baseline — no measurable magnetism on the case.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-fuchsia-400/15 via-rose-400/15 to-transparent blur-2xl" />
              <div className="relative">
                <PhoneFrame
                  src="/images/magnetick/screenshots/affected_indicator.png"
                  alt="Magnetick showing an affected reading"
                  rotate="rotate-[2deg]"
                  className="mx-auto max-w-[320px]"
                />
                <div className="mt-8 text-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-xs font-medium text-fuchsia-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                    Affected
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-white">Time for a trip to the demagnetizer</h3>
                  <p className="mt-2 text-sm text-slate-300/70">
                    A clear deviation means the case is magnetized — a likely
                    suspect when a mechanical watch starts running fast.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where's the sensor */}
        <section className="container max-w-6xl mx-auto px-6 pb-28 sm:pb-36">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative mx-auto max-w-[300px] sm:max-w-[340px]">
                <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/15 to-cyan-400/15 blur-2xl" />
                <PhoneFrame
                  src="/images/magnetick/screenshots/help.png"
                  alt="Magnetick guide showing where the magnetometer is on each iPhone"
                  className="relative"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-fuchsia-300/80">
                Built-in guide
              </p>
              <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
                Know where to hold
                <span className="bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                  {' '}
                  the watch.
                </span>
              </h2>
              <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-slate-300/80 max-w-xl">
                The magnetometer sits in a different spot on every iPhone — and
                a few centimeters off can mean a missed reading. Magnetick
                detects your model and points to the exact place to rest the
                watch, sourced from public iFixit teardowns.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-slate-300/90">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  Auto-detects your iPhone model
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  An on-screen overlay shows where to rest the caseback
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  Searchable index covering every supported iPhone
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Feature grid */}
        <section className="container max-w-5xl mx-auto px-6 pb-28 sm:pb-36">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-indigo-300/80">
              The whole app
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              One job. Done well.
            </h2>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              title="Live μT readings"
              body="Taps your iPhone's built-in magnetometer through Core Motion and reports field strength in microtesla — straight from the sensor."
            />
            <Feature
              title="30-second chart"
              body="A rolling chart traces the last 30 seconds, so you can see exactly how the field changes as you bring the watch closer."
            />
            <Feature
              title="Stable-reading hint"
              body="Magnetick highlights when the signal settles, making it easier to tell a steady value from environmental noise."
            />
            <Feature
              title="Fully offline"
              body="No network requests. Use it on the bench, on a plane, or in a watchmaker's back room — works without a connection."
            />
            <Feature
              title="No data collection"
              body="No accounts, no analytics, no advertising, no trackers. Readings never leave your device."
            />
            <Feature
              title="Honest about limits"
              body="A hobbyist tool, not a calibrated instrument. Perfect for spotting a magnetized watch — not for safety-critical work."
            />
          </div>
        </section>

        {/* Contact */}
        <section className="container max-w-5xl mx-auto px-6 pb-28 sm:pb-36">
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10 sm:p-14 text-center backdrop-blur-sm">
            <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="relative">
              <Icon path={mdiEmailOutline} size={1.2} className="mx-auto text-cyan-300" />
              <h2 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Get in touch.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-300/80">
                Watch hobbyist questions, feedback, or bug reports — email is
                the only support channel for Magnetick. Every message is read.
              </p>
              <a
                href={`mailto:${MAGNETICK_EMAIL}`}
                className="mt-10 inline-block text-base font-medium text-cyan-200 underline decoration-cyan-400/40 decoration-1 underline-offset-[6px] transition hover:text-white hover:decoration-cyan-300"
              >
                {MAGNETICK_EMAIL}
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10">
          <div className="container max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span>© {new Date().getFullYear()} Magnetick</span>
            <div className="flex items-center gap-6">
              <Link to="/magnetick/policy" className="hover:text-cyan-200 transition">Privacy</Link>
              <Link to="/magnetick/terms" className="hover:text-cyan-200 transition">Terms</Link>
              <a href={`mailto:${MAGNETICK_EMAIL}`} className="hover:text-cyan-200 transition">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  </div>
);

export default Magnetick;

export const Head = () => (
  <>
    <title>Magnetick — Check if your mechanical watch is magnetized</title>
    <meta
      name="description"
      content="Magnetick turns your iPhone into a pocket magnetometer for watch hobbyists. Spot a magnetized mechanical watch in seconds — fully offline, no data collection. Contact: magnetickapp@gmail.com."
    />
  </>
);
