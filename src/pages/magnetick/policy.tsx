import React from 'react';
import MagnetickNavbar from '../../components/MagnetickNavbar';
import '../../styles/article.scss';

const MagnetickPrivacyPolicy = () => (
  <div className="min-h-screen">
    <MagnetickNavbar />
    <main aria-label="Content">
      <div className="container max-w-5xl mx-auto px-4">
        <article className="col-lg-8 offset-lg-2">
          <div className="post-content">
            <h2 id="why" className="!mb-6">Privacy Policy</h2>

            <p className="post-body-text">
              <span className="font-semibold">App:</span> Magnetick<br />
              <span className="font-semibold">Developer:</span> Hieu Pham<br />
              <span className="font-semibold">Contact:</span> <a href="mailto:hieupv.global@gmail.com">hieupv.global@gmail.com</a><br />
              <span className="font-semibold">Effective date:</span> April 28, 2026
            </p>

            <p className="post-body-text"><strong>Summary</strong></p>
            <p className="post-body-text">
              Magnetick does not collect, store, transmit, or share any personal data.
              The app runs entirely on your device. There are no user accounts, no
              analytics, no advertising, and no third-party trackers.
            </p>

            <p className="post-body-text"><strong>Information we collect</strong></p>
            <p className="post-body-text">
              <span className="font-semibold">None.</span> Magnetick does not collect any personal information,
              device identifiers, usage statistics, crash reports, or any other data about
              you or your device.
            </p>

            <p className="post-body-text"><strong>Sensor access</strong></p>
            <p className="post-body-text">
              Magnetick reads data from your device's magnetometer (the same sensor used
              by the built-in Compass app) through Apple's Core Motion framework. This
              requires the system permission described in your iPhone's Info.plist as
              "Motion &amp; Fitness."
            </p>
            <p className="post-body-text">The magnetometer readings are:</p>
            <ul>
              <li>Used only to display the live magnetic field reading on screen.</li>
              <li>Held briefly in memory (a 30-second rolling window) so the app can draw a chart and detect stabilization.</li>
              <li><strong>Never</strong> transmitted off the device.</li>
              <li><strong>Never</strong> stored to disk.</li>
              <li>Discarded when you close the app.</li>
            </ul>

            <p className="post-body-text"><strong>Network access</strong></p>
            <p className="post-body-text">
              Magnetick does not make any network requests. The app functions fully
              offline and does not need an internet connection.
            </p>

            <p className="post-body-text"><strong>Third parties</strong></p>
            <p className="post-body-text">
              Magnetick does not integrate any third-party SDKs that collect data. There
              are no advertising networks, no analytics providers, and no crash-reporting
              services bundled in the app.
            </p>

            <p className="post-body-text"><strong>Children's privacy</strong></p>
            <p className="post-body-text">
              Magnetick is suitable for all ages and does not knowingly collect data from
              anyone, including children under 13.
            </p>

            <p className="post-body-text"><strong>Your rights</strong></p>
            <p className="post-body-text">
              Because no data is collected, there is no personal data for us to access,
              correct, or delete on your behalf. Uninstalling the app removes any
              in-memory readings.
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

export default MagnetickPrivacyPolicy;

export const Head = () => (
  <>
    <title>Magnetick — Privacy Policy</title>
    <meta name="description" content="Privacy Policy for the Magnetick iOS app." />
  </>
);
