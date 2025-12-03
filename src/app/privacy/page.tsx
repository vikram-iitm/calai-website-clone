import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFFFF0] via-[#F0F8FF] to-[#FFFFF0]">
      <div className="max-w-4xl mx-auto px-5 py-16">
        <Link href="/" className="inline-flex items-center text-cal-text-primary hover:underline mb-8">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-cal-text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-cal-text-muted mb-8">Last updated: November 21, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">1. Introduction</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              At AltSelf, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you use our mobile application and services. Please read this Privacy 
              Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">2. What Data AltSelf Processes</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We collect and process the following types of information:
            </p>
            
            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-6">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials and authentication data</li>
              <li>Profile information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-6">Usage Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Voice commands and text inputs you provide to the AI assistant</li>
              <li>Calendar events, reminders, and alarms you create</li>
              <li>Contact information accessed for calling features</li>
              <li>Location data for navigation and cab booking services</li>
              <li>Music preferences and playback history from Spotify integration</li>
              <li>Search queries and interaction history</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-6">Device Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Device type, operating system, and version</li>
              <li>Unique device identifiers</li>
              <li>Mobile network information</li>
              <li>IP address and general location information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">3. How Data is Handled</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li><strong>Service Provision:</strong> To provide, maintain, and improve AltSelf's AI-powered assistance features</li>
              <li><strong>Personalization:</strong> To understand user preferences and customize your experience</li>
              <li><strong>Communication:</strong> To send you service-related notifications and updates</li>
              <li><strong>Analytics:</strong> To analyze usage patterns and improve our service performance</li>
              <li><strong>Security:</strong> To protect against fraud, abuse, and unauthorized access</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">4. Voice and Text Processing</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-cal-text-secondary leading-relaxed">
                AltSelf uses advanced AI to process your voice commands and text inputs. Here's what you need to know:
              </p>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Voice recordings are converted to text and processed to understand your intent</li>
              <li>Both voice and text data are analyzed to provide accurate responses and execute commands</li>
              <li>Processing may involve secure transmission to our servers and third-party AI services</li>
              <li>We retain interaction history to improve accuracy and provide context-aware responses</li>
              <li>You can delete your interaction history at any time through the app settings</li>
              <li>Voice recordings are not stored longer than necessary for processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">5. Data Usage & API Disclosure</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              AltSelf integrates with various third-party services to provide comprehensive assistance. Below is a 
              detailed disclosure of how we interact with these services:
            </p>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-6">Ola API</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Used for: Retrieving ride pricing and booking information</li>
              <li>Data shared: Your location, destination, and booking preferences</li>
              <li>Purpose: To enable cab booking comparisons and facilitate ride reservations</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-6">Uber API</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Used for: Retrieving ride pricing and booking information</li>
              <li>Data shared: Your location, destination, and booking preferences</li>
              <li>Purpose: To enable cab booking comparisons and facilitate ride reservations</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-6">Google Calendar API</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Used for: Managing calendar events, reminders, and schedules</li>
              <li>Data shared: Calendar events, dates, times, and event details you create through AltSelf</li>
              <li>Purpose: To create, modify, and retrieve calendar information via voice or text commands</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-6">Google Maps API</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Used for: Navigation and location services</li>
              <li>Data shared: Current location, search queries, and destination addresses</li>
              <li>Purpose: To provide navigation directions and location-based services</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-6">Google Contacts API</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Used for: Accessing contact information for calling features</li>
              <li>Data shared: Contact names and phone numbers (with your permission)</li>
              <li>Purpose: To enable voice-activated calling by name</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-6">Spotify API</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Used for: Music playback control</li>
              <li>Data shared: Playback commands, track information, and listening preferences</li>
              <li>Purpose: To control music playback via voice or text commands</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-6">YouTube API</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Used for: Video search and playback</li>
              <li>Data shared: Search queries and video preferences</li>
              <li>Purpose: To find and open YouTube videos based on your requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">6. Security Principles</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li><strong>Encryption:</strong> All data transmitted between your device and our servers is encrypted using SSL/TLS</li>
              <li><strong>Access Controls:</strong> We limit access to personal information to authorized personnel only</li>
              <li><strong>Secure Storage:</strong> Data at rest is encrypted and stored on secure servers</li>
              <li><strong>Regular Audits:</strong> We conduct regular security assessments and vulnerability testing</li>
              <li><strong>Third-Party Security:</strong> We only partner with third-party services that maintain strong security practices</li>
              <li><strong>Data Minimization:</strong> We only collect and retain data necessary for service functionality</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive 
              to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">7. Data Retention</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We retain your personal information only for as long as necessary to provide our services and fulfill the 
              purposes outlined in this Privacy Policy. When data is no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">8. Your Privacy Rights</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li><strong>Access:</strong> Request access to the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where consent is the legal basis</li>
              <li><strong>Object:</strong> Object to certain types of data processing</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed mt-4">
              To exercise these rights, please contact us at support@altself.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">9. Third-Party Links and Services</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              AltSelf may contain links to third-party websites and services. We are not responsible for the privacy 
              practices of these third parties. We encourage you to read their privacy policies before providing any 
              personal information to them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">10. Children's Privacy</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              AltSelf is not intended for use by children under the age of 13. We do not knowingly collect personal 
              information from children under 13. If we become aware that we have collected data from a child under 13, 
              we will take steps to delete such information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by updating the 
              "Last updated" date at the top of this page and, for material changes, we will provide a more prominent notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">12. Contact Us</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <p className="text-cal-text-secondary leading-relaxed">
              Email: <a href="mailto:support@altself.com" className="text-blue-600 hover:underline">support@altself.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}