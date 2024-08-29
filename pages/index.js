export default function Home() {
  return (
    <section className="lg:w-3/4 mx-auto p-4">
      <h1 className="font-bold text-lg">Privacy Policy</h1>
      <br />
      <section>
        <h2 className="font-semibold">Introduction</h2>
        <hr />
        <p>
          At Kibtaxi, we respect the privacy of our users and take the necessary
          measures to protect your personal data. This privacy policy explains
          how our app collects, uses and protects user data. By using our app,
          you agree to this policy.
        </p>
      </section>
      <br />
      <section>
        <h2 className="font-semibold">
          Information Collected and Purposes of Use
        </h2>
        <hr />
        <p className="mb-1">
          Location Information: Our app collects the device's location data to
          list taxi businesses around the user by getting the user's current
          location. This location information is only used to show the taxi
          businesses closest to the user and is not stored for any other purpose
          or shared with third parties.
        </p>
        <p className="mb-1">
          Google Places API Data: Our app receives and displays information
          about taxi businesses, such as reviews, star ratings, and photos, via
          the Google Places API. This information is provided by Google and is
          used by our app for informational purposes only.
        </p>
        <p>
          Contact Information: There are buttons that allow users to make a
          WhatsApp or phone call to directly contact taxi companies. These
          functions direct the user directly to the WhatsApp application or the
          phone call feature of the device. Our application does not collect
          user data during these communication processes.
        </p>
      </section>
      <br />
      <section>
        <h2 className="font-semibold">Sharing of Information</h2>
        <hr />
        <p className="mb-1">
          Third Party Services: Our app collects data using third party services
          like the Google Places API. These services have their own privacy
          policies. For more information about Google's data collection and
          processing practices, please visit the Google Privacy Policy page.
        </p>
        <p>
          Data Sharing: Our application does not share, sell or rent users'
          personal data with third parties. Location information is used only to
          show taxi businesses close to the user.
        </p>
      </section>
      <br />
      <section>
        <h2 className="font-semibold">Data Security</h2>
        <hr />
        <p className="mb-1">
          Our app does not directly collect or store user data. All data
          displayed to users is provided via the Google Places API. Therefore,
          data security is largely dependent on Google's data processing and
          security policies:
        </p>
        <p className="mb-1">
          Google Places API: Our app uses the Google Places API to provide
          information about taxi businesses. This API provides reviews, star
          ratings, photos, and contact information for taxi businesses. Google
          uses strong security measures and encryption techniques to protect
          user data. For more information about Google's data security and
          privacy, please visit the Google Privacy Policy page.
        </p>
        <p className="mb-1">
          Location Data: Our app only uses the current location of users to show
          taxi businesses around them. Location information is not stored or
          shared with third parties in any way.
        </p>
        <p className="mb-1">
          Güvenli Sunucular: Uygulamanın backend sunucusu, güvenilir ve güvenli
          bir platform olan AWS üzerinde barındırılmaktadır. AWS, veri
          güvenliğini sağlamak için ileri düzey güvenlik önlemleri ve altyapı
          çözümleri sunar.
        </p>
        <p>
          Our application strives to comply with the data security and privacy
          standards provided by Google. In case of any security issue regarding
          users' data, we will immediately investigate the situation, take the
          necessary measures and inform our users.
        </p>
      </section>
      <br />
      <section>
        <h2 className="font-semibold">User Rights and Options</h2>
        <hr />
        <p>
          Location Sharing: Users can disable location sharing from the app
          settings or their device settings. However, some features of our app
          may not work properly in this case.
        </p>
      </section>
      <br />
      <section>
        <h2 className="font-semibold">Contact</h2>
        <hr />
        <p>
          If you have any questions or concerns about this privacy policy,
          please contact us: contact@hsyntes.com
        </p>
      </section>
    </section>
  );
}
