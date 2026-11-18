import React from 'react';
import MultibandStationNavbar from '../../components/MultibandStationNavbar';
import '../../styles/article.scss';

const MultibandStationPrivacyPolicy = () => (
  <div className="min-h-screen">
    <MultibandStationNavbar />
    <main aria-label="Content">
      <div className="container max-w-5xl mx-auto px-4">
        <article className="col-lg-8 offset-lg-2">
          <div className="post-content">
            <h2 id="why" className="!mb-6">Privacy Policy</h2>

            <p className="post-body-text">
              <span className="font-semibold">App:</span> Multiband Station<br />
              <span className="font-semibold">Developer:</span> Hieu Pham<br />
              <span className="font-semibold">Contact:</span> <a href="mailto:hieupv.global@gmail.com">hieupv.global@gmail.com</a><br />
              <span className="font-semibold">Effective date:</span> November 17, 2026
            </p>

            <p className="post-body-text"><strong>Summary</strong></p>
            <p className="post-body-text">
              Multiband Station does not collect, store, transmit, or share any personal
              data. The app runs entirely on your device. There are no user accounts, no
              analytics, no advertising, and no third-party trackers.
            </p>

            <p className="post-body-text"><strong>Information we collect</strong></p>
            <p className="post-body-text">
              <span className="font-semibold">None.</span> Multiband Station does not collect any personal information,
              device identifiers, usage statistics, crash reports, or any other data about
              you or your device.
            </p>

            <p className="post-body-text"><strong>Permissions</strong></p>
            <p className="post-body-text">
              Multiband Station does not request any system permissions. It does not
              access your microphone, location, contacts, photos, or notifications. The
              app only plays audio through your iPhone's speaker or wired earphones.
            </p>
            <p className="post-body-text">
              To pick the right time-signal station and encode the current time, the app
              reads your iPhone's time zone setting and system clock. This information is:
            </p>
            <ul>
              <li>Read on your device only.</li>
              <li><span className="font-semibold">Never</span> stored.</li>
              <li><span className="font-semibold">Never</span> transmitted off the device.</li>
            </ul>

            <p className="post-body-text"><strong>Network access</strong></p>
            <p className="post-body-text">
              Multiband Station does not make any network requests. The app functions
              fully offline and does not need an internet connection.
            </p>

            <p className="post-body-text"><strong>Third parties</strong></p>
            <p className="post-body-text">
              Multiband Station does not integrate any third-party SDKs that collect data.
              There are no advertising networks, no analytics providers, and no
              crash-reporting services bundled in the app.
            </p>

            <p className="post-body-text"><strong>Children's privacy</strong></p>
            <p className="post-body-text">
              Multiband Station is suitable for all ages and does not knowingly collect
              data from anyone, including children under 13.
            </p>

            <p className="post-body-text"><strong>Your rights</strong></p>
            <p className="post-body-text">
              Because no data is collected, there is no personal data for us to access,
              correct, or delete on your behalf.
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

export default MultibandStationPrivacyPolicy;

export const Head = () => (
  <>
    <title>Multiband Station — Privacy Policy</title>
    <meta name="description" content="Privacy Policy for the Multiband Station iOS app." />
  </>
);
