import React from 'react';
import { Link } from 'gatsby';
import Icon from '@mdi/react';
import { mdiApple, mdiEmailOutline } from '@mdi/js';
import SpdNavbar from '../../components/SpdNavbar';
import { SPD_APP_STORE_URL } from '../../constants/spd';

const SPD_EMAIL = 'secondsperdayapp@gmail.com';

const SERIF_STYLE: React.CSSProperties = { fontFamily: '"Halant", serif' };

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
      className={`relative rounded-[2.6rem] bg-white p-[6px] shadow-[0_30px_80px_-30px_rgba(62,89,145,0.35),0_20px_60px_-20px_rgba(61,194,255,0.25)] ring-1 ring-slate-900/5 ${rotate}`}
    >
      <div className="overflow-hidden rounded-[2.2rem] ring-1 ring-slate-900/5">
        <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" />
      </div>
    </div>
  </div>
);

const Background = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[#f7f8fb]" />
    <div className="absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[#3dc2ff]/15 blur-3xl" />
    <div className="absolute top-[40%] -left-32 h-[480px] w-[480px] rounded-full bg-[#3E5991]/10 blur-3xl" />
    <div className="absolute bottom-[-10%] -right-32 h-[520px] w-[520px] rounded-full bg-[#2f1f74]/10 blur-3xl" />
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />
    <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-[#f7f8fb]" />
  </div>
);

const Feature = ({ title, body }: { title: string; body: string }) => (
  <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(62,89,145,0.18)]">
    <h3 style={SERIF_STYLE} className="text-lg font-bold tracking-tight text-slate-900">
      {title}
    </h3>
    <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{body}</p>
  </div>
);

const Spd = () => (
  <div className="relative min-h-screen text-slate-900">
    <Background />

    <div className="relative">
      <SpdNavbar variant="light" homeHref="/spd" />

      <main aria-label="Content">
        {/* Hero */}
        <section className="container max-w-6xl mx-auto px-6 pt-20 sm:pt-28 pb-24 sm:pb-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h1
                style={SERIF_STYLE}
                className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.02em] text-slate-900 leading-[1.05]"
              >
                Track every watch,
                <br />
                <span className="bg-gradient-to-r from-[#4deefd] via-[#0397e8] to-[#2f1f74] bg-clip-text text-transparent">
                  down to the second.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Seconds Per Day logs checkpoints against an atomic time
                reference and gives you a real seconds-per-day rate for every
                mechanical watch in your collection. No extra hardware, no
                guesswork — just your phone and the watch on your wrist.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={SPD_APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-[#3E5991] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(61,194,255,0.6)] transition hover:bg-[#374e80] hover:shadow-[0_10px_50px_-10px_rgba(61,194,255,0.9)]"
                >
                  <Icon path={mdiApple} size={0.9} />
                  Download on the App Store
                </a>
                <a
                  href="#features"
                  className="text-sm font-medium text-slate-600 underline decoration-slate-300 decoration-1 underline-offset-[6px] transition hover:text-[#3E5991] hover:decoration-[#3dc2ff]"
                >
                  See what it does ↓
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[300px] sm:max-w-[340px]">
                <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[#4deefd]/30 via-[#0397e8]/20 to-[#2f1f74]/15 blur-2xl" />
                <PhoneFrame
                  src="/images/thumbnail.png"
                  alt="Seconds Per Day app showing a watch's daily rate"
                  className="relative"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature grid */}
        <section id="features" className="container max-w-5xl mx-auto px-6 pb-28 sm:pb-36">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#0397e8]">
              What it does
            </p>
            <h2
              style={SERIF_STYLE}
              className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-slate-900"
            >
              A precision tool for your collection.
            </h2>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              title="Atomic-time reference"
              body="Every checkpoint is compared against a precise time source, so the daily rate you see is real — not an estimate."
            />
            <Feature
              title="Per-watch daily rate"
              body="Automatic seconds-per-day calculation across every measurement you log. See exactly how each watch is performing."
            />
            <Feature
              title="Full history"
              body="Keep a running log of measurements per watch. Spot trends over weeks and months instead of single data points."
            />
            <Feature
              title="Multiple watches"
              body="Manage a whole collection. Tag, sort, and see at a glance which piece is running fast and which one needs service."
            />
            <Feature
              title="Synced across devices"
              body="Your collection follows you between iPhone and iPad. Sign in once and your history is everywhere."
            />
            <Feature
              title="No hardware required"
              body="Just your phone and the watch you want to check. No timegrapher, no microphone rig, no extra accessories."
            />
          </div>
        </section>

        {/* Contact */}
        <section className="container max-w-5xl mx-auto px-6 pb-28 sm:pb-36">
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-10 sm:p-14 text-center shadow-[0_30px_80px_-40px_rgba(62,89,145,0.25)]">
            <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#3dc2ff]/25 blur-3xl" />
            <div className="relative">
              <Icon path={mdiEmailOutline} size={1.2} className="mx-auto text-[#3E5991]" />
              <h2
                style={SERIF_STYLE}
                className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
              >
                Get in touch.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Questions, feedback, or bug reports — email is the only
                support channel for Seconds Per Day. Every message is read.
              </p>
              <a
                href={`mailto:${SPD_EMAIL}`}
                className="mt-10 inline-block text-base font-medium text-[#3E5991] underline decoration-[#3dc2ff]/60 decoration-1 underline-offset-[6px] transition hover:text-[#2f1f74] hover:decoration-[#0397e8]"
              >
                {SPD_EMAIL}
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200">
          <div className="container max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span>© {new Date().getFullYear()} Seconds Per Day</span>
            <div className="flex items-center gap-6">
              <Link to="/spd/policy" className="hover:text-[#3E5991] transition">Privacy</Link>
              <Link to="/spd/terms" className="hover:text-[#3E5991] transition">Terms</Link>
              <a href={`mailto:${SPD_EMAIL}`} className="hover:text-[#3E5991] transition">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  </div>
);

export default Spd;

export const Head = () => (
  <>
    <title>Seconds Per Day — Track mechanical watch accuracy</title>
    <meta
      name="description"
      content="Seconds Per Day logs checkpoints against an atomic time reference to give you a real daily rate for every mechanical watch in your collection. Contact: secondsperdayapp@gmail.com."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Halant:wght@400;700&display=swap"
    />
  </>
);
