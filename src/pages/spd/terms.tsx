import React from 'react';
import { Link } from 'gatsby';
import SpdNavbar from '../../components/SpdNavbar';
import '../../styles/article.scss';

const SpdTerms = () => (
  <div className="min-h-screen">
    <SpdNavbar />
    <main aria-label="Content">
      <div className="container max-w-5xl mx-auto px-4">
        <article className="col-lg-8 offset-lg-2">
          <div className="post-content">
            <h2 id="why">Terms and Conditions</h2>

            <p className="post-body-text">
              <span className="font-semibold">App:</span> Seconds per day<br />
              <span className="font-semibold">Developer:</span> Hieu Pham<br />
              <span className="font-semibold">Contact:</span> <a href="mailto:hieupv.global@gmail.com">hieupv.global@gmail.com</a><br />
              <span className="font-semibold">Effective date:</span> May 9, 2026
            </p>

            <p className="post-body-text">
              By downloading, installing, or using Seconds per day (the "App"), you
              agree to these Terms and Conditions. If you do not agree, do not install
              or use the App.
            </p>

            <p className="post-body-text"><strong>1. License</strong></p>
            <p className="post-body-text">
              You are granted a personal, non-exclusive, non-transferable, revocable
              license to install and use the App on Apple-branded devices that you own
              or control, in accordance with the Apple Media Services Terms and the
              Apple App Store Usage Rules.
            </p>

            <p className="post-body-text"><strong>2. Intended use</strong></p>
            <p className="post-body-text">
              Seconds per day is a consumer tool that helps watch enthusiasts log and
              track the accuracy of their mechanical watches over time, expressed as
              seconds-per-day deviation against a reference time. Watch entries and
              measurement history you record can be synced across your devices through
              your account.
            </p>
            <p className="post-body-text">
              The App is <span className="font-semibold">not</span> a calibrated scientific instrument and is <span className="font-semibold">not</span> intended for:
            </p>
            <ul>
              <li>Medical, diagnostic, or safety-critical use of any kind.</li>
              <li>Professional watchmaking, regulation, or certification work where authoritative timing equipment is required.</li>
              <li>Industrial, navigational, or professional measurement.</li>
              <li>Any decision where an inaccurate output could result in injury, financial loss, or property damage.</li>
            </ul>
            <p className="post-body-text">
              Accuracy figures depend on the reference time source you compare against,
              the precision of your inputs, and the behaviour of the watch itself.
              Treat readings as approximate.
            </p>

            <p className="post-body-text"><strong>3. No warranty</strong></p>
            <p className="post-body-text">
              The App is provided <span className="font-semibold">"AS IS" and "AS AVAILABLE"</span>, without warranty of any
              kind, whether express, implied, statutory, or otherwise. To the maximum
              extent permitted by law, the developer disclaims all warranties, including
              (without limitation) warranties of merchantability, fitness for a
              particular purpose, accuracy, reliability, non-infringement, and
              uninterrupted operation.
            </p>

            <p className="post-body-text"><strong>4. Limitation of liability</strong></p>
            <p className="post-body-text">
              To the maximum extent permitted by applicable law, in no event shall the
              developer be liable for any indirect, incidental, special, consequential,
              exemplary, or punitive damages, or any loss of profits, data, goodwill, or
              other intangible losses, arising out of or relating to your use of, or
              inability to use, the App — even if the developer has been advised of the
              possibility of such damages.
            </p>
            <p className="post-body-text">
              In any case, the developer's aggregate liability arising out of or
              relating to the App shall not exceed the amount you paid for the App
              (which, for a free app, is zero).
            </p>

            <p className="post-body-text"><strong>5. User responsibility</strong></p>
            <p className="post-body-text">
              You are solely responsible for how you use the App and for any decisions
              you make based on its output.
            </p>

            <p className="post-body-text"><strong>6. Intellectual property</strong></p>
            <p className="post-body-text">
              All rights, title, and interest in and to the App — including its name,
              design, source code, and assets — remain with the developer. These Terms
              do not grant you any rights to the developer's trademarks or branding.
            </p>

            <p className="post-body-text"><strong>7. Privacy</strong></p>
            <p className="post-body-text">
              Use of the App is also governed by the <Link to="/spd/policy">Privacy Policy</Link>, which is
              incorporated into these Terms by reference.
            </p>

            <p className="post-body-text"><strong>8. Apple's role</strong></p>
            <p className="post-body-text">
              You acknowledge that these Terms are between you and the developer, not
              Apple, and that Apple has no responsibility for the App or its content.
              Apple is, however, a third-party beneficiary of these Terms and may
              enforce them against you. The standard Apple App Store EULA also applies
              to your use of the App.
            </p>

            <p className="post-body-text"><strong>9. Termination</strong></p>
            <p className="post-body-text">
              These Terms remain in effect while you use the App. The developer may
              update or discontinue the App at any time without notice. You may stop
              using the App at any time by uninstalling it.
            </p>

            <p className="post-body-text"><strong>10. Changes to these Terms</strong></p>
            <p className="post-body-text">
              The developer may revise these Terms from time to time. Material changes
              will be reflected in updated versions of the App. Continued use of the App
              after a change constitutes acceptance of the revised Terms.
            </p>

            <p className="post-body-text"><strong>11. Governing law</strong></p>
            <p className="post-body-text">
              These Terms shall be governed by and construed in accordance with the laws
              of the developer's place of residence, without regard to its
              conflict-of-laws rules. Disputes shall be resolved in the courts of that
              jurisdiction, except where applicable consumer-protection law requires
              otherwise.
            </p>

            <p className="post-body-text"><strong>12. Contact</strong></p>
            <p className="post-body-text">
              Questions about these Terms can be sent to <a href="mailto:hieupv.global@gmail.com">hieupv.global@gmail.com</a>.
            </p>
          </div>
        </article>
      </div>
    </main>
  </div>
);

export default SpdTerms;

export const Head = () => (
  <>
    <title>Seconds per day — Terms and Conditions</title>
    <meta name="description" content="Terms and Conditions for the Seconds per day iOS app." />
  </>
);
