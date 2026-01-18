export default function PrivacyPolicy() {

  return (
    <div className="bg-white">
      <div className="place-self-center max-w-[1020px] mx-[130px] px-[32px] py-[96px] ">
        <h1 className="heading1">Childcan Privacy Policy</h1>
        <p className="bodyText">
          The terms and conditions outlined in the following Privacy Policy
          apply to users, all people who have access to the Childcan website(s),
          and all users who have provided their personal information. By using
          this site, you agree to the terms and conditions outlined below.
        </p>
        <h3 className="heading3"> Information we collect: </h3>
        <p className="bodyText">
          Childcan (we) may collect the following information{" "}
          <strong>
            <em>voluntarily</em>
          </strong>{" "}
          provided by the user including:
        </p>
        <ul className="my-[18px] pl-10 text-body text-main-grey font-medium list-disc">
          <li className="listItem">
            {" "}
            profile information
            <ul className="list-disc pl-9">
              {/* TODO: make this bullet an open circle */}
              <li className="listItem">first name</li>
              <li className="listItem">last name</li>
              <li className="listItem">job title</li>
              <li className="listItem">industry</li>
              <li className="listItem">company name</li>
            </ul>
          </li>
          <li className="listItem">
            {" "}
            communication between the user and Childcan including:
            <ul className="list-disc pl-9">
              <li className="listItem">emails</li>
              <li className="listItem">direct messages</li>
            </ul>
          </li>
        </ul>
        <h3 className="heading3">How we collect information:</h3>
        <p className="bodyText">
          We only collect personal information that is shared{" "}
          <strong>
            <em>voluntarily</em>
          </strong>{" "}
          by the user through the following means:{" "}
        </p>
        <ol className="text-body text-main-grey font-medium list-decimal pl-20">
          <li className="listItem">registering for our newsletter(s)</li>
          <li className="listItem">
            {" "}
            filling out sign-up forms on social platforms and/or Childcan
            website(s), including:
            <ul className="text-body text-main-grey font-medium list-disc pl-9">
              <li className="listItem">
                LinkedIn lead generation and sponsored content advertisements
              </li>
              <li className="listItem">Facebook lead generation forms</li>
              <li className="listItem">Instagram lead generation forms</li>
              <li className="listItem"> Childcan website contact form(s)</li>
            </ul>
          </li>
          <li className="listItem">registering for an event</li>
          <li className="listItem">
            submitting comments through our contact form(s) or through email
          </li>
          <li className="listItem">
            by direct contact:
            <ul className="text-body text-main-grey font-medium list-disc pl-9">
              <li className="listItem">
                providing business contact information
              </li>
              <li className="listItem">
                verbally requesting to be added to our database
              </li>
            </ul>
          </li>
          <li className="listItem">
            donating online or to an event participant, unless opt out is
            selected
          </li>
        </ol>
        <h3 className="heading3">How we use personal information:</h3>
        <p className="bodyText">
          <strong>
            By providing your personal information through the above means, you
            agree to receive communications from us.
          </strong>{" "}
        </p>
        <p className="bodyText">We may use your personal information to:</p>
        <ul className="text-body text-main-grey font-medium list-disc pl-10">
          <li className="listItem">
            provide information related to our services
          </li>
          <li className="listItem">provide general information</li>
          <li className="listItem">respond to inquiries or concerns</li>
          <li className="listItem">
            notify you about company updates, news, and events
          </li>
          <li className="listItem">provide technical support</li>
        </ul>
        <p className="bodyText">
          Methods of communication include but are not limited to:
        </p>
        <ul className="text-body text-main-grey font-medium list-disc pl-10">
          <li className="listItem">newsletters</li>
          <li className="listItem">direct mail</li>
          <li className="listItem">phone calls</li>
          <li className="listItem">emails</li>
          <li className="listItem">in person meetings</li>
        </ul>
        <p className="bodyText">
          User privacy is important to us, and we adhere to strict privacy
          protocols to ensure information is stored securely and safely. Any
          personal information collected by Childcan is kept strictly
          confidential and is not shared with any third parties.{" "}
        </p>
        <p className="bodyText">
          Users may request their personal information be removed from our
          database at any time by unsubscribing from our newsletters or by{" "}
          <a
            href="/contact"
            target="_blank"
            rel="noreferrer"
            className="text-link-blue"
          >
            contacting our office
          </a>
          . Users have a right to their personal information and may request
          updates or removal at any time.
        </p>
        <h3 className="heading3">Usage and Analytics Data</h3>
        <p className="bodyText">
          In order to provide our users with the best experience possible, we
          use Google Analytics, a third party service provided by Google, Inc.
          to automatically gather and store certain information about your visit
          to our website(s). This information is anonymous and used to provide
          general statistics about our website(s) for analysis. This information
          may include, but is not limited to:
        </p>
        <ul className="my-[18px] text-body text-main-grey font-medium list-disc pl-6">
          <li className="listItem">IP address</li>
          <li className="listItem">type of device and browser</li>
          <li className="listItem">pageviews</li>
        </ul>
        <p className="bodyText">
          You can opt-out of having your site activity available to Google
          Analytics by installing the{" "}
          <a
            href="https://chrome.google.com/webstore/detail/google-analytics-opt-out/fllaojicojecljbmefodhfapmkghcbnh?hl=en"
            target="_blank"
            rel="noreferrer"
            className="text-link-blue"
          >
            Google Analytics opt-out browser add-on
          </a>
          .{" "}
        </p>
        <p className="bodyText">
          Additional information about Google’s privacy policy can be found by
          following this link:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
            className="text-link-blue"
          >
            https://policies.google.com/privacy
          </a>
          . More information regarding Google Analytics and Google Tag Manager
          policies can be found here:{" "}
          <a
            href="https://www.google.com/analytics/terms/us.html"
            className="text-link-blue"
          >
            https://www.google.com/analytics/terms/us.html
          </a>
          .
        </p>
        <h3 className="heading3">Dispute Resolution</h3>
        <p className="bodyText">
          If you encounter any issues or questions regarding this privacy
          policy, please{" "}
          <a
            href="/contact"
            target="_blank"
            rel="noreferrer"
            className="text-link-blue"
          >
            {" "}
            contact us{" "}
          </a>{" "}
          directly and we will attempt to resolve the issue.{" "}
        </p>
        <h3 className="heading3">Future Changes to the Privacy Policy</h3>
        <p className="bodyText">
          We reserve the right to make changes to the outlined privacy policy at
          any time. We recommend users familiarize themselves with the policy on
          a regular basis.{" "}
        </p>
        <p className="bodyText">
          Any changes to the privacy policy which affect the outlined policy
          protocols detailed above will be communicated directly with users in
          advance, and users will have the option to opt out of the new
          protocols by formally requesting removal of personal data from our
          database.
        </p>
        <p className="bodyText">
          By using this site, you signify your assent to our Privacy Policy.
        </p>
        <p className="bodyText">
          Thank you for your understanding. Should you have any questions,
          please feel free to reach out to our team at{" "}
          <a href="mailto:info@childcan.com" className="text-link-blue">
            info@childcan.com
          </a>{" "}
          and we’ll be happy to assist you.
        </p>
      </div>
    </div>
  );
}
