import React from 'react';
import { Link } from 'gatsby';
import Icon from '@mdi/react';
import { mdiApple, mdiEmailOutline } from '@mdi/js';
import MagnetickNavbar from '../../components/MagnetickNavbar';

const MAGNETICK_EMAIL = 'magnetickapp@gmail.com';

const Feature = ({ title, body }: { title: string; body: string }) => (
  <div className="group">
    <h3 className="text-base font-semibold tracking-tight text-slate-900">{title}</h3>
    <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{body}</p>
  </div>
);

const Background = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    {/* base */}
    <div className="absolute inset-0 bg-[#fafafa]" />

    {/* soft color washes — evoking a magnetic field, kept very faint */}
    <div className="absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-200/40 via-indigo-100/30 to-transparent blur-3xl" />
    <div className="absolute top-[40%] -right-32 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-rose-100/40 to-transparent blur-3xl" />
    <div className="absolute bottom-[-10%] -left-32 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-emerald-100/30 to-transparent blur-3xl" />

    {/* fine grid */}
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage:
          'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />

    {/* fade grid at edges */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fafafa]" />
  </div>
);

const Magnetick = () => (
  <div className="relative min-h-screen text-slate-900">
    <Background />

    <div className="relative">
      <MagnetickNavbar />

      <main aria-label="Content">
        {/* Hero */}
        <section className="container max-w-5xl mx-auto px-6 pt-28 sm:pt-36 pb-32 sm:pb-40">
          <div className="mx-auto max-w-2xl text-center">
            <img
              src="/images/magnetick/icon.png"
              alt="Magnetick app icon"
              width="80"
              height="80"
              className="mx-auto rounded-[22px] shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/60"
            />

            <h1 className="mt-10 text-5xl sm:text-6xl font-semibold tracking-[-0.03em] text-slate-900">
              Magnetick
            </h1>

            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-500">
              A live magnetic field reader for iPhone.
              <br className="hidden sm:block" />
              Quiet, offline, and respectfully simple.
            </p>

            <div className="mt-12 flex items-center justify-center">
              <a
                href="https://apps.apple.com/app/magnetick/id0000000000"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
              >
                <Icon path={mdiApple} size={0.85} />
                Download on the App Store
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container max-w-5xl mx-auto px-6 pb-32 sm:pb-40">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              What it does
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Small app, focused job.
            </h2>
          </div>

          <div className="mt-20 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              title="Live readings"
              body="Reads your iPhone's built-in magnetometer through Core Motion and displays the field strength in microtesla."
            />
            <Feature
              title="30-second chart"
              body="A rolling chart visualizes the last 30 seconds of readings so you can see how the field changes as you move."
            />
            <Feature
              title="Stabilization"
              body="Magnetick highlights when readings settle, making it easier to spot a steady value versus environmental noise."
            />
            <Feature
              title="Fully offline"
              body="No network requests. The app works without an internet connection — anywhere, anytime."
            />
            <Feature
              title="No data collection"
              body="No accounts, no analytics, no advertising, no trackers. Readings never leave your device."
            />
            <Feature
              title="Built for curiosity"
              body="A consumer information tool — not a calibrated instrument. Great for tinkering, not for safety-critical use."
            />
          </div>
        </section>

        {/* Contact */}
        <section className="container max-w-5xl mx-auto px-6 pb-32 sm:pb-40">
          <div className="mx-auto max-w-xl text-center">
            <Icon path={mdiEmailOutline} size={1.1} className="mx-auto text-slate-400" />
            <h2 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Get in touch.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
              Questions, feedback, or bug reports — email is the only
              support channel for Magnetick. Every message is read.
            </p>
            <a
              href={`mailto:${MAGNETICK_EMAIL}`}
              className="mt-10 inline-block text-base font-medium text-slate-900 underline decoration-slate-300 decoration-1 underline-offset-[6px] transition hover:decoration-slate-900"
            >
              {MAGNETICK_EMAIL}
            </a>
          </div>
        </section>

        <footer className="border-t border-slate-200/70">
          <div className="container max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span>© {new Date().getFullYear()} Magnetick</span>
            <div className="flex items-center gap-6">
              <Link to="/magnetick/policy" className="hover:text-slate-700 transition">Privacy</Link>
              <Link to="/magnetick/terms" className="hover:text-slate-700 transition">Terms</Link>
              <a href={`mailto:${MAGNETICK_EMAIL}`} className="hover:text-slate-700 transition">Contact</a>
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
    <title>Magnetick — Live magnetic field reader for iPhone</title>
    <meta
      name="description"
      content="Magnetick turns your iPhone into a live magnetic field reader. Fully offline, no data collection. Contact: magnetickapp@gmail.com."
    />
  </>
);
