import React from 'react';
import { Link } from 'gatsby';
import Icon from '@mdi/react';
import { mdiApple, mdiEmailOutline } from '@mdi/js';
import MultibandStationNavbar from '../../components/MultibandStationNavbar';
import { MULTIBAND_STATION_APP_STORE_URL } from '../../constants/multiband-station';

const SUPPORT_EMAIL = 'hieupv.global@gmail.com';

const STATIONS = [
  { name: 'JJY 40', frequency: '40 kHz', country: 'Japan', cities: 'TYO' },
  { name: 'JJY 60', frequency: '60 kHz', country: 'Japan', cities: 'TYO' },
  { name: 'WWVB', frequency: '60 kHz', country: 'USA', cities: 'LAX, DEN, CHI, NYC' },
  { name: 'MSF', frequency: '60 kHz', country: 'UK', cities: 'LON, LIS' },
  { name: 'DCF77', frequency: '77.5 kHz', country: 'Germany', cities: 'PAR, BER, ROM, MAD' },
  { name: 'BPC', frequency: '68.5 kHz', country: 'China', cities: 'HKG, BJS, TPE' },
];

const STEPS = [
  {
    title: "Set the watch's Home City",
    body: 'Pick a city served by the station you want to use. See the stations table below.',
  },
  {
    title: 'Turn the iPhone volume all the way up',
    body: 'Use the volume buttons to set the media volume to maximum.',
  },
  {
    title: 'Place the watch on the speaker',
    body: "Lay the watch face-up on the iPhone's bottom speaker grille. With wired earphones, rest an earbud on the watch instead.",
  },
  {
    title: 'Tap Start',
    body: 'The station defaults to Auto, which is chosen from your time zone. You can also pick a station yourself.',
  },
  {
    title: 'Start a manual receive on the watch',
    body: 'Hold the receive button for about 2 seconds (check your watch manual for which button). Keep the watch and iPhone still for 2–10 minutes.',
  },
];

const FAQS = [
  {
    question: "The watch doesn't pick up the signal",
    answer:
      "Rotate the watch, or slide it slowly across the speaker grille. The watch's antenna only picks up the signal well in certain positions, and the best spot differs between watch and iPhone models.",
  },
  {
    question: 'Can I use wired earphones?',
    answer:
      'Yes, and they sometimes work better than the speaker. Rest one earbud on the watch. If the signal is still weak, turn off Settings › Sounds & Haptics › Headphone Safety › Reduce Loud Audio. Never wear the earphones while the app is transmitting.',
  },
  {
    question: 'It still fails for my station',
    answer:
      'Try the other station for your region: JJY 40 instead of JJY 60 (or the other way round) in Japan, or MSF instead of DCF77 (or the other way round) in Europe. Pick it in the app instead of Auto. One may come through better than the other on your iPhone.',
  },
  {
    question: 'Reception keeps failing at my desk',
    answer:
      'Chargers, laptops and induction cookers give off electrical noise that can drown out the signal. Move away from them, or try another room.',
  },
  {
    question: 'Does it work over Bluetooth or AirPlay?',
    answer:
      "No. The signal has to come from the iPhone's built-in speaker or wired earphones. Bluetooth headphones and speakers (including AirPods) and AirPlay won't work.",
  },
];

// JJY-style time code: each second the carrier runs at full power for 0.2 s (marker),
// 0.5 s (a 1 bit) or 0.8 s (a 0 bit), then drops to low power for the rest of the second.
const PULSES = [0.2, 0.8, 0.5, 0.8, 0.5, 0.5];
const SECOND_WIDTH = 80;

const buildCarrierPath = () => {
  const width = PULSES.length * SECOND_WIDTH;
  const points: string[] = [];
  for (let x = 0; x <= width; x += 1) {
    const second = Math.min(PULSES.length - 1, Math.floor(x / SECOND_WIDTH));
    const highPower = x - second * SECOND_WIDTH < PULSES[second] * SECOND_WIDTH;
    const amplitude = highPower ? 44 : 9;
    const y = 60 + amplitude * Math.sin(x * 0.8);
    points.push(`${x === 0 ? 'M' : 'L'}${x} ${y.toFixed(1)}`);
  }
  return { d: points.join(' '), width };
};

const CARRIER = buildCarrierPath();

const Background = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[#07090D]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,90,31,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,197,61,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(255,90,31,0.10),transparent_55%)]" />
    <div className="absolute -top-40 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
    <div className="absolute top-[40%] -right-40 h-[480px] w-[480px] rounded-full bg-amber-400/5 blur-3xl" />
    <div
      className="absolute inset-0 opacity-[0.05] mix-blend-screen"
      style={{
        backgroundImage:
          'linear-gradient(to right, #FF5A1F 1px, transparent 1px), linear-gradient(to bottom, #FF5A1F 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />
    <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-[#07090D]" />
  </div>
);

const Waveform = () => (
  <svg
    aria-hidden="true"
    viewBox={`0 0 ${CARRIER.width} 120`}
    className="w-full h-16 sm:h-20 text-orange-400"
    preserveAspectRatio="none"
  >
    <path
      d={CARRIER.d}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
      style={{ filter: 'drop-shadow(0 0 5px rgba(255,90,31,0.7))' }}
    />
  </svg>
);

const SectionHeading = ({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) => (
  <div className="mx-auto max-w-2xl text-center">
    <p className="text-xs font-medium uppercase tracking-[0.22em] text-orange-300/80">{eyebrow}</p>
    <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">{title}</h2>
    {children && (
      <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-slate-300/80">{children}</p>
    )}
  </div>
);

const Feature = ({ title, body }: { title: string; body: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-orange-400/30 hover:bg-white/[0.05]">
    <h3 className="text-base font-semibold tracking-tight text-white">{title}</h3>
    <p className="mt-3 text-[15px] leading-relaxed text-slate-300/80">{body}</p>
  </div>
);

const MultibandStation = () => (
  <div className="relative min-h-screen text-slate-100">
    <Background />

    <div className="relative">
      <MultibandStationNavbar variant="dark" homeHref="/multiband-station" />

      <main aria-label="Content">
        {/* Hero */}
        <section className="container max-w-6xl mx-auto px-6 pt-20 sm:pt-28 pb-24 sm:pb-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-orange-300/90">
                Multiband Station
              </p>
              <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-[-0.03em] text-white">
                Sync your radio-controlled watch
                {' '}
                <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  anywhere
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300/90">
                For Casio watches with Multiband 5, Multiband 6 or Wave Ceptor function.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={MULTIBAND_STATION_APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_10px_40px_-10px_rgba(255,90,31,0.6)] transition hover:bg-orange-50 hover:shadow-[0_10px_50px_-10px_rgba(255,90,31,0.9)]"
                >
                  <Icon path={mdiApple} size={0.9} />
                  Download on the App Store
                </a>
                <a
                  href="#how-to-sync"
                  className="text-sm font-medium text-slate-300 underline decoration-slate-600 decoration-1 underline-offset-[6px] transition hover:text-orange-200 hover:decoration-orange-300"
                >
                  How to sync ↓
                </a>
              </div>

              <div className="mt-12">
                <Waveform />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[220px] sm:max-w-[280px]">
                <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-orange-500/25 via-orange-400/10 to-amber-300/10 blur-3xl" />
                <img
                  src="/images/multiband-station/icon.png"
                  alt="Multiband Station app icon"
                  width="280"
                  height="280"
                  className="relative block w-full h-auto rounded-[22%] ring-1 ring-white/10 shadow-[0_40px_120px_-30px_rgba(255,90,31,0.5)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="container max-w-5xl mx-auto px-6 pb-28 sm:pb-36">
          <SectionHeading eyebrow="How it works" title="A time-signal station in your pocket">
            Radio-controlled watches set themselves from long-wave time-signal stations.
            Multiband Station recreates that signal right next to the watch.
          </SectionHeading>

          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            <Feature
              title="A tone at ⅓ or ⅕ of the frequency"
              body="The iPhone plays a tone at one third or one fifth of the station's carrier frequency."
            />
            <Feature
              title="Harmonics recreate the carrier"
              body="Harmonics from the iPhone's audio hardware land on the real 40–77.5 kHz carrier that the watch listens for."
            />
            <Feature
              title="The official time code"
              body="The carrier is keyed with the station's official time code, timed to your iPhone's network-synced clock."
            />
            <Feature
              title="Range: a few centimetres"
              body="The signal is very weak, so the watch has to sit right on the speaker. It does not reach across a room."
            />
          </div>
        </section>

        {/* How to sync */}
        <section id="how-to-sync" className="container max-w-5xl mx-auto px-6 pb-28 sm:pb-36">
          <SectionHeading eyebrow="How to sync" title="Five steps" />

          <ol className="mx-auto mt-16 max-w-3xl space-y-4">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF5A1F] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-white">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-300/80">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-amber-400/30 bg-amber-400/10 px-6 py-4 text-sm leading-relaxed text-amber-100">
            <span className="font-semibold">Hearing safety:</span> the tone is loud and can be
            high-pitched. Never wear earphones or earbuds while the app is transmitting.
          </p>
        </section>

        {/* Stations */}
        <section id="stations" className="container max-w-5xl mx-auto px-6 pb-28 sm:pb-36">
          <SectionHeading eyebrow="Stations" title="Supported stations">
            Set your watch&apos;s Home City to one of the cities listed for the station.
          </SectionHeading>

          <div className="mx-auto mt-16 max-w-3xl overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-[0.12em] text-slate-400">
                  <th scope="col" className="px-5 py-4 font-medium">Station</th>
                  <th scope="col" className="px-5 py-4 font-medium">Frequency</th>
                  <th scope="col" className="px-5 py-4 font-medium">Country</th>
                  <th scope="col" className="px-5 py-4 font-medium">Home City</th>
                </tr>
              </thead>
              <tbody>
                {STATIONS.map((station) => (
                  <tr key={station.name} className="border-b border-white/5 last:border-b-0">
                    <th scope="row" className="px-5 py-4 font-semibold text-white whitespace-nowrap">{station.name}</th>
                    <td className="px-5 py-4 text-slate-300 whitespace-nowrap">{station.frequency}</td>
                    <td className="px-5 py-4 text-slate-300">{station.country}</td>
                    <td className="px-5 py-4 font-mono text-slate-300">{station.cities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-sm text-slate-400">
            Multiband 5 watches receive all of these stations except BPC.
          </p>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="container max-w-5xl mx-auto px-6 pb-28 sm:pb-36">
          <SectionHeading eyebrow="Troubleshooting" title="Not syncing?" />

          <div className="mx-auto mt-16 max-w-3xl space-y-4">
            {FAQS.map((faq) => (
              <Feature key={faq.question} title={faq.question} body={faq.answer} />
            ))}
          </div>
        </section>

        {/* Support */}
        <section id="support" className="container max-w-5xl mx-auto px-6 pb-28 sm:pb-36">
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10 sm:p-14 text-center backdrop-blur-sm">
            <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />
            <div className="relative">
              <Icon path={mdiEmailOutline} size={1.2} className="mx-auto text-orange-300" />
              <h2 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Support
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-300/80">
                Questions or problems? Email{' '}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-medium text-orange-200 underline decoration-orange-400/40 decoration-1 underline-offset-[6px] transition hover:text-white hover:decoration-orange-300"
                >
                  {SUPPORT_EMAIL}
                </a>
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
                <Link to="/multiband-station/policy" className="text-slate-300 hover:text-orange-200 transition">
                  Privacy Policy
                </Link>
                <Link to="/multiband-station/terms" className="text-slate-300 hover:text-orange-200 transition">
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10">
          <div className="container max-w-5xl mx-auto px-6 py-8 text-xs text-slate-400">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <span>© {new Date().getFullYear()} Multiband Station</span>
              <div className="flex items-center gap-6">
                <Link to="/multiband-station/policy" className="hover:text-orange-200 transition">Privacy</Link>
                <Link to="/multiband-station/terms" className="hover:text-orange-200 transition">Terms</Link>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-orange-200 transition">Contact</a>
              </div>
            </div>
            <p className="mt-6 text-center sm:text-left leading-relaxed text-slate-500">
              Multiband Station is an independent app and is not affiliated with, endorsed by,
              or sponsored by Casio Computer Co., Ltd. Casio, G-SHOCK, MULTI BAND 6 and Wave
              Ceptor are trademarks of their respective owners.
            </p>
          </div>
        </footer>
      </main>
    </div>
  </div>
);

export default MultibandStation;

export const Head = () => (
  <>
    <title>Multiband Station — Sync your radio-controlled watch</title>
    <meta
      name="description"
      content="Multiband Station turns your iPhone's speaker into a short-range JJY, WWVB, MSF, DCF77 and BPC time-signal transmitter, so a radio-controlled watch held next to it can sync its time."
    />
  </>
);
