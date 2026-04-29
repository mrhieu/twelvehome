import React from 'react';
import { Link } from 'gatsby';
import Icon from '@mdi/react';
import { mdiApple, mdiEmailOutline } from '@mdi/js';
import MagnetickNavbar from '../../components/MagnetickNavbar';

const MAGNETICK_EMAIL = 'magnetickapp@gmail.com';

const Feature = ({ title, body }: { title: string; body: string }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-slate-600 leading-relaxed">{body}</p>
  </div>
);

const Magnetick = () => (
  <div className="min-h-screen bg-slate-50">
    <MagnetickNavbar />

    <main aria-label="Content">
      <section className="container max-w-5xl mx-auto px-4 pt-16 pb-20 text-center">
        <img
          src="/images/magnetick/icon.png"
          alt="Magnetick app icon"
          width="96"
          height="96"
          className="mx-auto rounded-2xl shadow-md"
        />
        <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Magnetick
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
          A tiny iPhone app that turns your phone into a live magnetic field
          reader. Point it at anything magnetic and watch the microtesla
          reading update in real time.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="https://apps.apple.com/app/magnetick/id0000000000"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-white font-semibold hover:bg-black/80 transition"
          >
            <Icon path={mdiApple} size={1} />
            Download on the App Store
          </a>
        </div>
      </section>

      <section className="container max-w-5xl mx-auto px-4 pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            title="Live readings"
            body="Reads your iPhone's built-in magnetometer through Apple's Core Motion framework and displays the magnetic field strength in microtesla (μT)."
          />
          <Feature
            title="30-second chart"
            body="A rolling chart visualizes the last 30 seconds of readings so you can see how the field changes as you move."
          />
          <Feature
            title="Stabilization detection"
            body="Magnetick highlights when readings settle, making it easier to spot a steady value versus environmental noise."
          />
          <Feature
            title="Fully offline"
            body="No network requests. The app works without an internet connection — anywhere, anytime."
          />
          <Feature
            title="Zero data collection"
            body="No accounts, no analytics, no advertising, no third-party trackers. Readings never leave your device."
          />
          <Feature
            title="Built for curiosity"
            body="A consumer information tool — not a calibrated scientific instrument. Great for tinkering, not for safety-critical use."
          />
        </div>
      </section>

      <section className="container max-w-5xl mx-auto px-4 pb-24">
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-10 text-center shadow-sm">
          <Icon path={mdiEmailOutline} size={1.5} className="mx-auto text-slate-700" />
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">Get in touch</h2>
          <p className="mt-2 text-slate-600 max-w-xl mx-auto">
            Questions, feedback, or bug reports? Email is the only support
            channel for Magnetick — we read every message.
          </p>
          <a
            href={`mailto:${MAGNETICK_EMAIL}`}
            className="mt-6 inline-block text-lg font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700"
          >
            {MAGNETICK_EMAIL}
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Magnetick</span>
          <div className="flex items-center gap-4">
            <Link to="/magnetick/policy" className="hover:text-slate-700">Privacy Policy</Link>
            <Link to="/magnetick/terms" className="hover:text-slate-700">Terms</Link>
            <a href={`mailto:${MAGNETICK_EMAIL}`} className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </footer>
    </main>
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
