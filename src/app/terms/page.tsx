import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFFFF0] via-[#F0F8FF] to-[#FFFFF0]">
      <div className="max-w-4xl mx-auto px-5 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-cal-text-primary hover:opacity-75 transition-opacity mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-cal-text-primary mb-4">
          Terms & Conditions
        </h1>
        <p className="text-cal-text-muted mb-8">Last updated: December 3, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">1. Introduction</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              Welcome to AltSelf. These Terms and Conditions ("Terms") govern your use of the AltSelf mobile application 
              and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by 
              these Terms. If you do not agree to these Terms, please do not use the Service.
            </p>
            <p className="text-cal-text-secondary leading-relaxed">
              AltSelf is an AI-powered voice assistant that helps you manage daily tasks including cab bookings, 
              navigation, calendar management, phone calls, and media control.
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
              <li>Not share your account with unauthorized users</li>
              <li>Not attempt to gain unauthorized access to any portion of the Service</li>
              <li>Not use the Service in any manner that could damage, disable, or impair our servers</li>
              <li>Not transmit any viruses, malware, or harmful code through the Service</li>
              <li>Comply with all applicable local, state, national, and international laws</li>
              <li>Respect the intellectual property rights of AltSelf and third parties</li>
              <li>Not use the Service to harass, abuse, or harm another person</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">3. Restrictions</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              You are expressly prohibited from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Reverse engineering, decompiling, or disassembling the AltSelf application</li>
              <li>Modifying, adapting, or creating derivative works based on the Service</li>
              <li>Using the Service for any commercial purpose without our written consent</li>
              <li>Attempting to circumvent any security features of the Service</li>
              <li>Using automated systems, bots, or scripts to access the Service</li>
              <li>Collecting or harvesting any data from the Service without permission</li>
              <li>Impersonating another person or entity while using the Service</li>
              <li>Interfering with or disrupting the Service or servers/networks connected to the Service</li>
              <li>Using the Service to violate any applicable laws or regulations</li>
              <li>Removing, altering, or obscuring any copyright, trademark, or proprietary notices</li>
              <li>Sublicensing, selling, renting, leasing, or otherwise distributing the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">4. Cab-Booking Disclaimers and Limitations</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-cal-text-primary font-semibold mb-2">
                ⚠️ Important Notice
              </p>
              <p className="text-cal-text-secondary leading-relaxed">
                AltSelf acts as a facilitator and aggregator for cab booking services and does NOT directly provide 
                transportation services. We are not a transportation carrier and do not operate any vehicles.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-6">4.1 Third-Party Service Provider</h3>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              By using the cab booking feature, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li>AltSelf compares prices from Ola and Uber but does not guarantee the accuracy of pricing information displayed</li>
              <li>All cab bookings are subject to the terms and conditions of the respective ride-hailing service (Ola or Uber)</li>
              <li>Pricing shown in AltSelf may differ from final charges due to factors like surge pricing, route changes, waiting time, tolls, or cancellation fees</li>
              <li>Availability of rides depends on the third-party service providers and is not guaranteed by AltSelf</li>
              <li>You must comply with the terms of service of Ola and Uber when booking rides</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">4.2 No Liability for Transportation Services</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li>AltSelf is not responsible for the quality, safety, timeliness, or legality of rides provided by third-party services</li>
              <li>We are not liable for any acts, omissions, or conduct of drivers or transportation providers</li>
              <li>We do not conduct background checks on drivers or verify the condition of vehicles</li>
              <li>Any disputes related to rides must be resolved directly with the respective service provider (Ola or Uber)</li>
              <li>AltSelf is not responsible for cancellations, delays, route deviations, or no-shows by drivers</li>
              <li>We are not liable for any personal injury, property damage, loss, or death occurring during rides</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">4.3 User Responsibility for Ride Safety</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li>You are solely responsible for verifying driver identity, vehicle details, and license plate numbers before entering any vehicle</li>
              <li>Follow all safety guidelines provided by the ride-hailing services</li>
              <li>Report any safety concerns, suspicious behavior, or incidents directly to the service provider and local authorities</li>
              <li>Ensure you book rides only when you're certain of your travel plans to avoid cancellation charges</li>
              <li>Keep emergency contact information readily available during rides</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">4.4 Payment and Pricing</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>All payments for rides are processed directly by Ola or Uber, not by AltSelf</li>
              <li>AltSelf does not store or process payment information for ride bookings</li>
              <li>Price estimates shown are approximate and may vary based on actual ride conditions</li>
              <li>You are responsible for reviewing and accepting the fare before confirming a booking</li>
              <li>Refunds, disputes, or billing issues must be addressed with the respective service provider</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">5. Service Features</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              AltSelf provides AI-powered assistance for various tasks including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li><strong>Cab Booking:</strong> Compare prices and book rides through Ola and Uber</li>
              <li><strong>Navigation:</strong> Get directions and location information via Google Maps</li>
              <li><strong>Calendar Management:</strong> Create, view, and manage calendar events through Google Calendar</li>
              <li><strong>Voice Calling:</strong> Initiate phone calls using voice commands</li>
              <li><strong>Reminders & Alarms:</strong> Set reminders, alarms, and timers</li>
              <li><strong>Weather Information:</strong> Get current weather and forecasts</li>
              <li><strong>General Knowledge:</strong> Ask questions and get AI-powered answers</li>
              <li><strong>Media Control:</strong> Control music playback on Spotify and search/play YouTube videos</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed mt-4">
              We reserve the right to modify, suspend, or discontinue any features at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">6. Third-Party Integrations</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              AltSelf integrates with various third-party services including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li><strong>Ola & Uber:</strong> For ride-hailing and price comparison</li>
              <li><strong>Google Calendar:</strong> For calendar and event management</li>
              <li><strong>Google Maps:</strong> For navigation and location services</li>
              <li><strong>Google Contacts:</strong> For accessing contacts for calling features</li>
              <li><strong>Spotify:</strong> For music streaming control</li>
              <li><strong>YouTube:</strong> For video search and playback</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              Your use of these integrations is subject to the respective third-party's terms of service and privacy 
              policies. AltSelf is not responsible for the content, products, services, or practices of these third parties.
            </p>
            <p className="text-cal-text-secondary leading-relaxed">
              You must have active accounts with these services to use the respective integrations. We may discontinue 
              support for any third-party integration at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">7. Responsibility Statements</h2>
            
            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">7.1 User Responsibility</h3>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              You are solely responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li>Your interactions with third-party services accessed through AltSelf (cab bookings, navigation, calendar, media)</li>
              <li>The accuracy and appropriateness of voice commands and data you provide</li>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Ensuring your device meets the technical requirements for the Service</li>
              <li>Your internet or mobile data connection and associated charges</li>
              <li>Keeping your contact and payment information up to date with third-party services</li>
              <li>Complying with the terms of service of all integrated third-party platforms</li>
              <li>Any consequences resulting from your use of the Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">7.2 AltSelf's Responsibility</h3>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              While we strive to provide reliable service:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li>The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind</li>
              <li>We do not guarantee uninterrupted, timely, secure, or error-free service</li>
              <li>We may modify, suspend, or discontinue any aspect of the Service at any time</li>
              <li>We are not responsible for third-party service failures, interruptions, or inaccuracies</li>
              <li>We do not warrant that defects will be corrected or that the Service is free of viruses or harmful components</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">7.3 Service Availability</h3>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We may experience hardware, software, or other problems that could lead to service interruptions, delays, 
              or data loss. We reserve the right to interrupt the Service for maintenance, updates, or other operational needs.
            </p>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">7.4 Accuracy of Information</h3>
            <p className="text-cal-text-secondary leading-relaxed">
              We make reasonable efforts to ensure information provided through AltSelf is accurate, but we do not 
              warrant the accuracy, completeness, reliability, or usefulness of any content, including weather data, 
              navigation information, or third-party service availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">8. Intellectual Property</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              The Service and its original content, features, and functionality are owned by AltSelf and are protected by 
              international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Service 
              for your personal, non-commercial purposes, subject to these Terms.
            </p>
            <p className="text-cal-text-secondary leading-relaxed">
              "AltSelf" and associated logos are trademarks of AltSelf. You may not use these trademarks without our 
              prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">9. Limitation of Liability</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li>AltSelf shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
              <li>We are not liable for any loss of profits, revenues, data, use, goodwill, or other intangible losses</li>
              <li>We are not responsible for damages resulting from unauthorized access to or alteration of your data</li>
              <li>We are not liable for any conduct or content of third parties, including drivers, service providers, or other users</li>
              <li>Our total liability for all claims relating to the Service shall not exceed $100 USD or the amount you paid us in the past twelve months, whichever is greater</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed">
              Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above 
              limitations may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">10. Indemnification</h2>
            <p className="text-cal-text-secondary leading-relaxed">
              You agree to indemnify, defend, and hold harmless AltSelf, its officers, directors, employees, and agents 
              from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) 
              arising out of or related to your use of the Service, violation of these Terms, or infringement of any 
              third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">11. Termination</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              Upon termination, your right to use the Service will cease immediately. You may also terminate your 
              account at any time by contacting us or using the account deletion feature in the app.
            </p>
            <p className="text-cal-text-secondary leading-relaxed">
              All provisions of these Terms which by their nature should survive termination shall survive, including 
              ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">12. Modifications to Terms</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by 
              updating the "Last updated" date at the top of this page and, where appropriate, by sending an email 
              notification or displaying a notice in the app.
            </p>
            <p className="text-cal-text-secondary leading-relaxed">
              Your continued use of the Service after such modifications constitutes acceptance of the updated Terms. 
              If you do not agree to the modified Terms, you must stop using the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">13. Governing Law and Dispute Resolution</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which 
              AltSelf operates, without regard to its conflict of law provisions.
            </p>
            <p className="text-cal-text-secondary leading-relaxed">
              Any disputes arising from these Terms or your use of the Service shall be resolved through binding 
              arbitration in accordance with the rules of the applicable arbitration association, except where 
              prohibited by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">14. Severability</h2>
            <p className="text-cal-text-secondary leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited 
              or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">15. Entire Agreement</h2>
            <p className="text-cal-text-secondary leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and AltSelf 
              regarding the Service and supersede all prior agreements and understandings, whether written or oral.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">16. Contact Information</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-cal-text-secondary leading-relaxed">
                <strong>Email:</strong> <a href="mailto:legal@altself.com" className="text-blue-600 hover:underline">legal@altself.com</a>
              </p>
              <p className="text-cal-text-secondary leading-relaxed mt-2">
                <strong>Support:</strong> <a href="mailto:support@altself.com" className="text-blue-600 hover:underline">support@altself.com</a>
              </p>
              <p className="text-cal-text-secondary leading-relaxed mt-2">
                <strong>Website:</strong> <a href="https://www.altself.com" className="text-blue-600 hover:underline">www.altself.com</a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-black font-semibold hover:opacity-75 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}