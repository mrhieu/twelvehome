import React from 'react';
import SpdNavbar from '../../components/SpdNavbar';
import '../../styles/article.scss';

const SpdPrivacyPolicy = () => (
  <div className="min-h-screen">
    <SpdNavbar />
    <main aria-label="Content">
      <div className="container max-w-5xl mx-auto px-4">
        <article className="col-lg-8 offset-lg-2">
          <div className="post-content">
            <h2 id="why" className="!mb-6">Privacy Policy</h2>

            <p className="post-body-text">
              <span className="font-semibold">App:</span> Seconds per day<br />
              <span className="font-semibold">Developer:</span> Hieu Pham<br />
              <span className="font-semibold">Contact:</span> <a href="mailto:hieupv.global@gmail.com">hieupv.global@gmail.com</a><br />
              <span className="font-semibold">Effective date:</span> May 9, 2026
            </p>

            <p className="post-body-text"><strong>Summary</strong></p>
            <p className="post-body-text">
              Seconds per day is a watch-accuracy tracking app for iOS. To sync your
              watch entries and measurement history across your devices, the app uses a
              user account and a hosted backend. The app also uses analytics SDKs to
              understand aggregate usage. This policy explains what is collected, why,
              and how it is handled.
            </p>

            <p className="post-body-text"><strong>Information we collect</strong></p>
            <p className="post-body-text">We collect the following categories of information:</p>
            <ul>
              <li><span className="font-semibold">Watch entries you create</span> — names, brands, models, and any photos or notes you attach to a watch in the app.</li>
              <li><span className="font-semibold">Measurement history</span> — the timestamps and accuracy readings (seconds per day deviation) you record against each watch.</li>
              <li><span className="font-semibold">Account information</span> — the identifier you sign in with (e.g. an email address, or the anonymized identifier returned by Sign in with Apple) so your data can be associated with your account and synced across your devices.</li>
              <li><span className="font-semibold">Device identifiers and analytics</span> — anonymized device and usage identifiers, app session events, performance data, and crash diagnostics, used in aggregate to understand how the app is used and to fix bugs.</li>
            </ul>

            <p className="post-body-text"><strong>Network access</strong></p>
            <p className="post-body-text">Seconds per day makes network requests to the following destinations:</p>
            <ul>
              <li><span className="font-semibold">Our backend, hosted on Supabase</span>, to authenticate your account and sync your watch entries and measurement history across the devices where you are signed in.</li>
              <li><span className="font-semibold">Analytics providers</span> (see "Third parties" below) to send aggregate usage and diagnostic events.</li>
            </ul>
            <p className="post-body-text">
              The app does not require an internet connection for local entry of
              measurements, but sync and account features need network access.
            </p>

            <p className="post-body-text"><strong>Third parties</strong></p>
            <p className="post-body-text">Seconds per day integrates the following third-party SDKs:</p>
            <ul>
              <li><span className="font-semibold">Supabase</span> — used to host your account and the watch entries / measurement history you sync. Data sent to Supabase is governed by Supabase's terms and privacy policy.</li>
              <li><span className="font-semibold">Amplitude</span> — used for product analytics. Receives anonymized usage events and device identifiers to help us understand how features are used in aggregate.</li>
              <li><span className="font-semibold">Google Firebase Analytics</span> — used for product analytics and crash/performance diagnostics. Receives anonymized usage and device data.</li>
            </ul>
            <p className="post-body-text">
              We do not sell your personal data, and we do not use it for advertising.
            </p>

            <p className="post-body-text"><strong>Children's privacy</strong></p>
            <p className="post-body-text">
              Seconds per day is suitable for general audiences and is not directed at
              children under 13. We do not knowingly collect personal information from
              children under 13.
            </p>

            <p className="post-body-text"><strong>Your rights</strong></p>
            <p className="post-body-text">
              You can request access to, correction of, or deletion of the data
              associated with your account at any time by emailing <a href="mailto:hieupv.global@gmail.com">hieupv.global@gmail.com</a>.
              Deleting your account removes your synced watch entries and measurement
              history from our backend. Uninstalling the app removes any locally stored
              data from your device.
            </p>

            <p className="post-body-text"><strong>Changes to this policy</strong></p>
            <p className="post-body-text">
              If this policy ever changes, the updated version will be published at the
              same URL with a new effective date. Material changes will be reflected in
              app updates.
            </p>

            <p className="post-body-text"><strong>Contact</strong></p>
            <p className="post-body-text">
              Questions about this policy can be sent to <a href="mailto:hieupv.global@gmail.com">hieupv.global@gmail.com</a>.
            </p>
          </div>
        </article>
      </div>
    </main>
  </div>
);

export default SpdPrivacyPolicy;

export const Head = () => (
  <>
    <title>Seconds per day — Privacy Policy</title>
    <meta name="description" content="Privacy Policy for the Seconds per day iOS app." />
  </>
);
