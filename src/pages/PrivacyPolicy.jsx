import { useEffect } from "react";
import "./Home.css";
import "./Mission.css";
import "./PrivacyPolicy.css";

// Keep the visible policy text in sync with public/PrivacyPolicy.html
// (the static file is what Google's OAuth crawler reads).

const FIREBASE_PRIVACY_URL = "https://firebase.google.com/support/privacy";
const EXPO_PRIVACY_URL = "https://expo.dev/privacy";
const GOOGLE_USER_DATA_POLICY_URL =
  "https://developers.google.com/terms/api-services-user-data-policy";

function PrivacyPolicy() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Privacy Policy | Lume";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="mission-page">
      <section className="mission-hero">
        <div className="mission-hero-content">
          <p className="privacy-kicker">Lume · The mobile dating game</p>
          <p className="home-section-title mission-section-title">
            Privacy Policy
          </p>
          <article className="privacy-paper">
            <header className="privacy-paper-header">
              <h1 className="privacy-doc-title">Lume Privacy Policy</h1>
              <p className="privacy-effective">Effective as of 2025-09-11</p>
            </header>

            <p>
              This privacy policy applies to the Lume app (hereby referred to as
              &quot;Application&quot;) for mobile devices that was created by
              Tanner Kopel (hereby referred to as &quot;Service Provider&quot;)
              as a Freemium service. This service is intended for use &quot;AS
              IS&quot;.
            </p>

            <h2>Information Collection and Use</h2>
            <p>
              The Application collects information when you download and use it.
              This information may include information such as:
            </p>
            <ul>
              <li>
                Your device&apos;s Internet Protocol address (e.g. IP address)
              </li>
              <li>
                The pages of the Application that you visit, the time and date
                of your visit, the time spent on those pages
              </li>
              <li>The time spent on the Application</li>
              <li>The operating system you use on your mobile device</li>
            </ul>
            <p>
              The Application collects your device&apos;s location, which helps
              the Service Provider determine your approximate geographical
              location and make use of it in the following ways:
            </p>
            <ul>
              <li>
                <strong>Geolocation Services:</strong> The Service Provider
                utilizes location data to provide features such as personalized
                content, relevant recommendations, and location-based services.
              </li>
              <li>
                <strong>Analytics and Improvements:</strong> Aggregated and
                anonymized location data helps the Service Provider analyze
                user behavior, identify trends, and improve the overall
                performance and functionality of the Application.
              </li>
              <li>
                <strong>Third-Party Services:</strong> Periodically, the Service
                Provider may transmit anonymized location data to external
                services. These services assist them in enhancing the
                Application and optimizing their offerings.
              </li>
            </ul>
            <p>
              The Service Provider may use the information you provide to
              contact you from time to time to provide you with important
              information, required notices, and marketing promotions.
            </p>
            <p>
              If you connect your Google Calendar, the Application accesses your
              calendar availability solely to help schedule dates within the
              app; this data is not shared with third parties and is not used to
              develop or train AI/ML models.
            </p>
            <p>
              For a better experience, while using the Application, the Service
              Provider may require you to provide certain personally
              identifiable information, including but not limited to email,
              phone number, name, birthday, gender, location, ethnicity, height,
              and personal photos. The information that the Service Provider
              requests will be retained and used as described in this privacy
              policy.
            </p>

            <h2>Google Calendar Data</h2>
            <p>
              If you choose to connect your Google account, the Application
              accesses Google Calendar availability (busy/free times) through
              Google APIs. The Application uses this Google user data solely to
              provide a user-facing feature: helping you schedule dates within
              Lume. The Application does not use Google Calendar data for
              advertising, does not sell it, and does not share it with third
              parties.
            </p>
            <p>
              Google Calendar data is processed to determine when you appear
              free so the Application can suggest date times. It is retained
              only as needed to provide that scheduling feature, and is
              otherwise handled according to the Data Retention Policy below.
              You can disconnect Google Calendar in the Application at any time,
              and you may request deletion of User Provided Data as described
              below.
            </p>
            <p>
              Lume&apos;s use and transfer to any other app of information
              received from Google APIs will adhere to the{" "}
              <a
                href={GOOGLE_USER_DATA_POLICY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google API Services User Data Policy
              </a>, including the Limited Use requirements. Google user data is not
              used to develop, improve, or train generalized or
              non-personalized AI/ML models.
            </p>

            <h2>Third Party Access</h2>
            <p>
              Only aggregated, anonymized data is periodically transmitted to
              external services to aid the Service Provider in improving the
              Application and their service. The Service Provider may share
              your information with third parties in the ways that are
              described in this privacy statement.
            </p>
            <p>
              Please note that the Application utilizes third-party services
              that have their own Privacy Policy about handling data. Below are
              the third-party service providers used by the Application:
            </p>
            <ul>
              <li>
                <a
                  href={FIREBASE_PRIVACY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics for Firebase
                </a>
              </li>
              <li>
                <a
                  href={FIREBASE_PRIVACY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase Crashlytics
                </a>
              </li>
              <li>
                <a
                  href={EXPO_PRIVACY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Expo
                </a>
              </li>
            </ul>
            <p>
              The Service Provider may disclose User Provided and Automatically
              Collected Information:
            </p>
            <ul>
              <li>
                As required by law, such as to comply with a subpoena or similar
                legal process
              </li>
              <li>
                When they believe in good faith that disclosure is necessary to
                protect their rights, protect your safety or the safety of
                others, investigate fraud, or respond to a government request
              </li>
              <li>
                With their trusted service providers who work on their behalf,
                do not have an independent use of the information disclosed to
                them, and have agreed to adhere to the rules set forth in this
                privacy statement
              </li>
            </ul>
            <p>
              Except as described in this policy, the Service Provider does not
              transfer or disclose your information to third parties for
              purposes other than providing or improving the Application.
            </p>

            <h2>Opt-Out Rights</h2>
            <p>
              You can stop all collection of information by the Application
              easily by uninstalling it. You may use the standard uninstall
              processes as may be available as part of your mobile device or
              via the mobile application marketplace or network.
            </p>

            <h2>Data Retention Policy</h2>
            <p>
              The Service Provider will retain User Provided data for as long
              as you use the Application and for a reasonable time thereafter.
              If you&apos;d like them to delete User Provided Data that you have
              provided via the Application, please contact them at{" "}
              <a href="mailto:tanner@kopelfamily.com">
                tanner@kopelfamily.com
              </a>
              , and they will respond in a reasonable time.
            </p>

            <h2>Children</h2>
            <p>
              The Service Provider does not use the Application to knowingly
              solicit data from or market to children under the age of 13.
            </p>
            <p>
              The Application does not address anyone under the age of 13. The
              Service Provider does not knowingly collect personally
              identifiable information from children under 13 years of age. In
              the case the Service Provider discovers that a child under 13 has
              provided personal information, the Service Provider will
              immediately delete this from their servers. If you are a parent
              or guardian and you are aware that your child has provided
              personal information, please contact the Service Provider at{" "}
              <a href="mailto:tanner@kopelfamily.com">
                tanner@kopelfamily.com
              </a>{" "}
              so that they can take the necessary actions.
            </p>

            <h2>Security</h2>
            <p>
              The Service Provider is concerned about safeguarding the
              confidentiality of your information, including sensitive personal
              data such as your birthday, gender, ethnicity, height, location,
              and photos. The Service Provider provides physical, electronic,
              and procedural safeguards to protect the information the Service
              Provider processes and maintains, including the use of encryption
              to protect data both in transit and at rest, access controls that
              limit who can view or handle your information, and secure storage
              through the Application&apos;s third-party infrastructure
              providers. Security procedures are in place to protect the
              confidentiality of your data.
            </p>

            <h2>Changes</h2>
            <p>
              This Privacy Policy may be updated from time to time for any
              reason. The Service Provider will notify you of any changes to
              the Privacy Policy by updating this page with the new Privacy
              Policy. You are advised to consult this Privacy Policy regularly
              for any changes, as continued use is deemed approval of all
              changes.
            </p>
            <p>This privacy policy is effective as of 2025-09-11.</p>

            <h2>Your Consent</h2>
            <p>
              By using the Application, you are consenting to the processing of
              your information as set forth in this Privacy Policy now and as
              amended by us.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions regarding privacy while using the
              Application, or have questions about the practices, please
              contact the Service Provider via email at{" "}
              <a href="mailto:lumedating@gmail.com">lumedating@gmail.com</a>.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
