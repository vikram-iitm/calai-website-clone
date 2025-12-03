import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFFFF0] via-[#F0F8FF] to-[#FFFFF0]">
      <div className="max-w-4xl mx-auto px-5 py-16">
        <Link href="/" className="inline-flex items-center text-cal-text-primary hover:underline mb-8">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-cal-text-primary mb-4">
          Terms & Conditions
        </h1>
        <p className="text-cal-text-muted mb-8">Last updated: November 21, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">1. Introduction</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              Welcome to AltSelf. These Terms and Conditions ("Terms") govern your use of the AltSelf mobile application 
              and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by 
              these Terms. If you do not agree to these Terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">2. App Usage Guidelines</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              When using AltSelf, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
              <li>Provide accurate and complete information when creating an account</li>
              <li>Maintain the security of your account credentials</li>
              <li>Not attempt to gain unauthorized access to any portion of the Service</li>
              <li>Not use the Service in any manner that could damage, disable, or impair our servers</li>
              <li>Not transmit any viruses, malware, or harmful code through the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">3. Service Features</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              AltSelf provides AI-powered assistance for various tasks including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Cab booking through integration with Ola and Uber</li>
              <li>Navigation using Google Maps</li>
              <li>Calendar management, reminders, alarms, and timers</li>
              <li>Voice calling capabilities</li>
              <li>Weather information and general knowledge queries</li>
              <li>Media controls for Spotify and YouTube</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">4. Cab Booking Disclaimers and Limitations</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-cal-text-secondary leading-relaxed font-semibold">
                Important Notice:
              </p>
              <p className="text-cal-text-secondary leading-relaxed">
                AltSelf acts as a facilitator for cab booking services and does not directly provide transportation services.
              </p>
            </div>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              By using the cab booking feature, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>AltSelf compares prices from Ola and Uber but does not guarantee the accuracy of pricing information displayed</li>
              <li>All cab bookings are subject to the terms and conditions of the respective ride-hailing service (Ola or Uber)</li>
              <li>AltSelf is not responsible for the quality, safety, or timeliness of rides provided by third-party services</li>
              <li>Any disputes related to rides must be resolved directly with the respective service provider</li>
              <li>Pricing shown in AltSelf may differ from final charges due to factors like surge pricing, route changes, or waiting time</li>
              <li>Availability of rides depends on the third-party service providers and is not guaranteed by AltSelf</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">5. Third-Party Integrations</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              AltSelf integrates with various third-party services including Ola, Uber, Google ecosystem (Calendar, Maps, Contacts), 
              Spotify, and YouTube. Your use of these integrations is subject to the respective third-party's terms of service 
              and privacy policies. AltSelf is not responsible for the content, products, or services provided by these third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">6. Responsibility Statements</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              <strong>User Responsibility:</strong> You are solely responsible for your interactions with third-party services 
              accessed through AltSelf. This includes but is not limited to cab bookings, navigation routes, calendar events, 
              and media playback.
            </p>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              <strong>Service Availability:</strong> While we strive to maintain uninterrupted service, AltSelf does not guarantee 
              that the Service will be available at all times. We may experience hardware, software, or other problems that could 
              lead to service interruptions or data loss.
            </p>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              <strong>Accuracy of Information:</strong> We make reasonable efforts to ensure information provided through AltSelf 
              is accurate, but we do not warrant the accuracy, completeness, or usefulness of such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">7. Restrictions</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              You are expressly prohibited from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Reverse engineering, decompiling, or disassembling the AltSelf application</li>
              <li>Using the Service for any commercial purpose without our written consent</li>
              <li>Attempting to circumvent any security features of the Service</li>
              <li>Using automated systems or software to extract data from the Service</li>
              <li>Impersonating another person or entity while using the Service</li>
              <li>Using the Service to violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">8. Intellectual Property</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              The Service and its original content, features, and functionality are owned by AltSelf and are protected by 
              international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">9. Limitation of Liability</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              To the maximum extent permitted by law, AltSelf shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
              or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">10. Modifications to Terms</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by 
              updating the "Last updated" date at the top of this page. Your continued use of the Service after such 
              modifications constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">11. Termination</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">12. Contact Information</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us at:
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