import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Database } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFFFF0] via-[#F0F8FF] to-[#FFFFF0]">
      <div className="max-w-4xl mx-auto px-5 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-cal-text-primary hover:opacity-75 transition-opacity mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-cal-text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-cal-text-muted mb-8">Last updated: December 3, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">1. Introduction</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              At AltSelf, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you use our mobile application and services ("Service"). Please read 
              this Privacy Policy carefully to understand our practices regarding your personal data.
            </p>
            <p className="text-cal-text-secondary leading-relaxed">
              By using AltSelf, you agree to the collection and use of information in accordance with this Privacy Policy. 
              If you do not agree with our policies and practices, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">2. What Data SAM (AltSelf) Processes</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We collect and process various types of information to provide and improve our AI-powered voice assistant services:
            </p>
            
            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-6">2.1 Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li><strong>Account Data:</strong> Name, email address, phone number, profile picture</li>
              <li><strong>Authentication Data:</strong> Login credentials, authentication tokens, session information</li>
              <li><strong>Contact Information:</strong> Contacts you choose to share for calling features (with your explicit permission)</li>
              <li><strong>Profile Preferences:</strong> App settings, preferences, and customization choices</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">2.2 Location Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li><strong>Precise Location:</strong> GPS coordinates for navigation and ride booking (only when you grant permission)</li>
              <li><strong>Approximate Location:</strong> General location based on IP address or network</li>
              <li><strong>Location History:</strong> Previous locations for improved recommendations</li>
              <li><strong>Travel Routes:</strong> Origin and destination data for cab bookings and navigation</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">2.3 Voice and Text Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li><strong>Voice Commands:</strong> Audio recordings of your voice interactions with AltSelf</li>
              <li><strong>Voice Transcriptions:</strong> Text transcriptions of your voice commands</li>
              <li><strong>Command History:</strong> Record of commands you've issued and their outcomes</li>
              <li><strong>Text Input:</strong> Any text you manually enter into the app</li>
              <li><strong>Conversation Context:</strong> Previous interactions to provide contextual responses</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">2.4 Calendar and Schedule Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li>Calendar events, appointments, and meetings (via Google Calendar integration)</li>
              <li>Event details including time, location, attendees, descriptions, and attachments</li>
              <li>Reminders, alarms, and timer settings</li>
              <li>Recurring event patterns and schedules</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">2.5 Music and Media Preferences</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li>Music listening history and preferences (Spotify integration)</li>
              <li>Playlist information and favorite songs/artists</li>
              <li>Video viewing history and preferences (YouTube integration)</li>
              <li>Playback commands and media control actions</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">2.6 Usage and Technical Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li><strong>Device Information:</strong> Device type, model, operating system version, unique device identifiers</li>
              <li><strong>App Usage Data:</strong> Features used, screens viewed, interaction patterns, session duration</li>
              <li><strong>Performance Data:</strong> Crash reports, error logs, performance metrics, latency measurements</li>
              <li><strong>Network Information:</strong> IP address, ISP, connection type, mobile carrier</li>
              <li><strong>Analytics Data:</strong> Aggregated usage statistics and trends</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">2.7 Communication Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Phone call logs initiated through AltSelf (not call content)</li>
              <li>Support inquiries and correspondence with our team</li>
              <li>Feedback and survey responses</li>
              <li>Push notification preferences and interaction data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">3. How Data is Handled</h2>
            
            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">3.1 Data Collection Methods</h3>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We collect data through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li><strong>Direct Interactions:</strong> Information you provide when using voice commands, creating accounts, or configuring settings</li>
              <li><strong>Automated Technologies:</strong> Cookies, analytics tools, and similar technologies</li>
              <li><strong>Third-Party Services:</strong> Data received from integrated services (Ola, Uber, Google, Spotify, YouTube) when you authorize connections</li>
              <li><strong>Device Sensors:</strong> Microphone for voice input, GPS for location, etc. (with your permission)</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">3.2 How We Use Your Data</h3>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We use the collected information for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li><strong>Service Provision:</strong> To provide, operate, and maintain AltSelf's AI-powered features</li>
              <li><strong>Personalization:</strong> To understand preferences and customize your experience</li>
              <li><strong>AI Training:</strong> To improve our natural language processing and voice recognition accuracy</li>
              <li><strong>Feature Development:</strong> To develop new features and enhance existing ones</li>
              <li><strong>Communication:</strong> To send service-related notifications, updates, and support responses</li>
              <li><strong>Analytics:</strong> To analyze usage patterns and measure effectiveness</li>
              <li><strong>Security:</strong> To detect, prevent, and address fraud, abuse, and security issues</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our Terms</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">3.3 Data Storage and Retention</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li><strong>Storage Location:</strong> Data is stored on secure cloud servers in compliance with applicable data protection laws</li>
              <li><strong>Encryption:</strong> All data is encrypted both in transit (TLS 1.3+) and at rest (AES-256)</li>
              <li><strong>Retention Period:</strong> We retain personal data only as long as necessary for the purposes outlined in this policy</li>
              <li><strong>Voice Recordings:</strong> Stored for up to 90 days unless you delete them sooner</li>
              <li><strong>Account Data:</strong> Retained while your account is active or as needed to provide services</li>
              <li><strong>Analytics Data:</strong> Anonymized data may be retained for up to 2 years for analysis and improvement</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">3.4 Data Access Controls</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Access to personal data is restricted to authorized personnel only</li>
              <li>We use role-based access controls and multi-factor authentication</li>
              <li>All data access is logged and monitored for security purposes</li>
              <li>Employees sign confidentiality agreements and receive privacy training</li>
              <li>Third-party service providers access only data necessary for their specific services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">4. Voice and Text Processing Explanation</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">How AltSelf Processes Your Voice</p>
                  <p className="text-blue-800 leading-relaxed">
                    AltSelf uses advanced AI and natural language processing to understand and execute your commands. 
                    Here's a transparent explanation of how your voice and text data is processed:
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">4.1 Voice Command Processing Flow</h3>
            <ol className="list-decimal pl-6 space-y-3 text-cal-text-secondary mb-6">
              <li><strong>Voice Capture:</strong> Your voice is captured by your device's microphone when you activate AltSelf</li>
              <li><strong>Secure Transmission:</strong> Audio is encrypted and transmitted securely to our servers using TLS 1.3</li>
              <li><strong>Speech-to-Text Conversion:</strong> AI models convert your speech into written text (transcription)</li>
              <li><strong>Intent Recognition:</strong> Natural language processing analyzes the text to understand your intent</li>
              <li><strong>Command Execution:</strong> The appropriate action is taken (e.g., booking a cab, playing music, setting a reminder)</li>
              <li><strong>Response Generation:</strong> AltSelf generates and delivers a response to confirm the action</li>
            </ol>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">4.2 Natural Language Understanding (NLU)</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li>We use machine learning models to interpret conversational, natural language</li>
              <li>Context from previous interactions helps improve understanding and provide relevant responses</li>
              <li>The system learns to recognize your speech patterns, accent, and preferences over time</li>
              <li>Personal identifiable information is anonymized and aggregated when used for model training</li>
              <li>You can review transcriptions of your voice commands in the app settings</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">4.3 AI Model Training</h3>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              Your interaction data helps us improve AltSelf:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li>Anonymized voice and text data may be used to train and improve our AI models</li>
              <li>Before data is used for training, all personally identifiable information is removed</li>
              <li>Model training helps improve accuracy, understand accents, and support more languages</li>
              <li>You can opt out of data usage for AI training in your privacy settings</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">4.4 Voice Data Control</h3>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              You have full control over your voice data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li><strong>Review:</strong> View and listen to your voice recordings in the app</li>
              <li><strong>Delete:</strong> Delete individual recordings or all voice data at any time</li>
              <li><strong>Opt-Out:</strong> Choose not to store voice recordings (may reduce accuracy)</li>
              <li><strong>Download:</strong> Export a copy of all your voice transcriptions</li>
              <li><strong>Auto-Delete:</strong> Set automatic deletion after a specified period (30/60/90 days)</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">4.5 Text Input Processing</h3>
            <p className="text-cal-text-secondary leading-relaxed">
              Text commands you type are processed similarly to voice commands but without audio recording. Text inputs 
              are encrypted, analyzed for intent, and used to execute your requests. Text history can also be reviewed 
              and deleted through app settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">5. Data Usage & API Disclosure</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              AltSelf integrates with several third-party services to provide comprehensive functionality. Below is a 
              complete and transparent disclosure of how your data is shared with these services:
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start gap-3">
                <Eye className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-yellow-900 mb-2">⚠️ Important: Third-Party Data Sharing</p>
                  <p className="text-yellow-800 leading-relaxed">
                    When you use AltSelf's integrations with third-party services, your data is shared with those services 
                    to enable functionality. Each service has its own privacy policy that also governs how they handle your data.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-8">5.1 Ola API Integration</h3>
            <p className="text-cal-text-secondary leading-relaxed mb-2">
              <strong>Purpose:</strong> To facilitate cab bookings and provide ride pricing comparisons
            </p>
            <p className="text-cal-text-secondary leading-relaxed mb-3">
              <strong>Data Shared with Ola:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li>Your current location (pickup point) and destination address</li>
              <li>Contact phone number for driver coordination and trip updates</li>
              <li>Ride preferences (vehicle type, payment method)</li>
              <li>Trip history and booking details for your Ola account</li>
              <li>Approximate fare estimates and pricing information requests</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed mb-2">
              <strong>How Data is Used:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li>To calculate estimated fares and display pricing options</li>
              <li>To book rides on your behalf when you confirm a booking</li>
              <li>To provide real-time ride tracking and driver details</li>
              <li>To send booking confirmations and ride status updates</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed">
              <strong>Ola's Privacy Policy:</strong> <a href="https://www.olacabs.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.olacabs.com/privacy</a>
            </p>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-8">5.2 Uber API Integration</h3>
            <p className="text-cal-text-secondary leading-relaxed mb-2">
              <strong>Purpose:</strong> To enable ride requests, price comparisons, and ride tracking through Uber's platform
            </p>
            <p className="text-cal-text-secondary leading-relaxed mb-3">
              <strong>Data Shared with Uber:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li>Your pickup and drop-off addresses</li>
              <li>Payment information (tokenized through Uber's secure payment system)</li>
              <li>Contact information for trip coordination</li>
              <li>Ride preferences, history, and favorite locations</li>
              <li>Surge pricing acknowledgments and fare acceptance</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed mb-2">
              <strong>How Data is Used:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li>To retrieve real-time price estimates for various Uber ride types</li>
              <li>To request and confirm ride bookings on your behalf</li>
              <li>To track your ride and provide driver information</li>
              <li>To process payments through Uber's payment gateway</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed">
              <strong>Uber's Privacy Notice:</strong> <a href="https://www.uber.com/legal/privacy/notice/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.uber.com/legal/privacy/notice/</a>
            </p>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-8">5.3 Google Services Integration</h3>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              AltSelf integrates with multiple Google services. Each integration requires your explicit authorization:
            </p>

            <h4 className="text-lg font-semibold text-cal-text-primary mb-2">Google Calendar API</h4>
            <p className="text-cal-text-secondary leading-relaxed mb-3">
              <strong>Data Shared:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li>Calendar events, appointments, meetings, and reminders</li>
              <li>Event details (title, description, location, time, attendees)</li>
              <li>Calendar permissions and sharing settings</li>
              <li>OAuth access tokens for authentication</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed mb-2">
              <strong>Purpose:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li>To create, view, edit, and delete calendar events via voice or text commands</li>
              <li>To set reminders and check your schedule</li>
              <li>To provide schedule-aware suggestions (e.g., cab booking before meetings)</li>
            </ul>

            <h4 className="text-lg font-semibold text-cal-text-primary mb-2">Google Maps API</h4>
            <p className="text-cal-text-secondary leading-relaxed mb-3">
              <strong>Data Shared:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li>Location queries and navigation requests</li>
              <li>Current GPS location for directions and nearby place searches</li>
              <li>Search history for improved location recommendations</li>
              <li>Favorite locations and saved places</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed mb-2">
              <strong>Purpose:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li>To provide turn-by-turn navigation and directions</li>
              <li>To search for places, addresses, and points of interest</li>
              <li>To calculate travel time and distance</li>
              <li>To support location-based features like weather and nearby services</li>
            </ul>

            <h4 className="text-lg font-semibold text-cal-text-primary mb-2">Google Contacts API</h4>
            <p className="text-cal-text-secondary leading-relaxed mb-3">
              <strong>Data Shared:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li>Contact names and phone numbers</li>
              <li>Contact groups and labels</li>
              <li>Call history initiated through AltSelf (not call content)</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed mb-2">
              <strong>Purpose:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li>To enable voice-activated calling by contact name</li>
              <li>To search and retrieve contact information via voice commands</li>
            </ul>

            <p className="text-cal-text-secondary leading-relaxed">
              <strong>Google Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://policies.google.com/privacy</a>
            </p>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-8">5.4 Spotify API Integration</h3>
            <p className="text-cal-text-secondary leading-relaxed mb-2">
              <strong>Purpose:</strong> To control music playback and access your Spotify library via voice commands
            </p>
            <p className="text-cal-text-secondary leading-relaxed mb-3">
              <strong>Data Shared with Spotify:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li>Music playback commands (play, pause, skip, shuffle, repeat)</li>
              <li>Song, artist, album, and playlist search queries</li>
              <li>Listening preferences and recently played tracks</li>
              <li>Playlist access and library information</li>
              <li>OAuth account connection tokens</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed mb-2">
              <strong>How Data is Used:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li>To control Spotify playback on your connected devices</li>
              <li>To search for and play specific songs, artists, or playlists</li>
              <li>To provide personalized music recommendations</li>
              <li>To display currently playing track information</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed">
              <strong>Spotify Privacy Policy:</strong> <a href="https://www.spotify.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.spotify.com/privacy</a>
            </p>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3 mt-8">5.5 YouTube API Integration</h3>
            <p className="text-cal-text-secondary leading-relaxed mb-2">
              <strong>Purpose:</strong> To search, play, and control YouTube videos via voice or text commands
            </p>
            <p className="text-cal-text-secondary leading-relaxed mb-3">
              <strong>Data Shared with YouTube:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li>Video search queries and viewing requests</li>
              <li>Watch history and video preferences</li>
              <li>Subscription and channel information</li>
              <li>Playback commands and video interaction data</li>
              <li>Account authentication tokens</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed mb-2">
              <strong>How Data is Used:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li>To search YouTube's video library based on your voice commands</li>
              <li>To open and play videos in the YouTube app or browser</li>
              <li>To provide video recommendations based on your interests</li>
              <li>To access your subscriptions and playlists</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              <strong>YouTube/Google Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://policies.google.com/privacy</a>
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
              <p className="font-semibold text-blue-900 mb-2">🔐 Your Control Over Third-Party Integrations</p>
              <p className="text-blue-800 leading-relaxed mb-3">
                You have complete control over which services AltSelf can access:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-blue-800">
                <li>You must explicitly authorize each integration before AltSelf can access that service</li>
                <li>You can revoke access to any third-party service at any time through the app settings</li>
                <li>Revoking access will prevent AltSelf from using that service but won't delete your account with the third party</li>
                <li>We recommend reviewing the privacy policies of each service you connect to AltSelf</li>
                <li>You can manage permissions granted to each service through your account settings with that provider</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">6. Security Principles</h2>
            <div className="flex items-start gap-3 bg-green-50 border-l-4 border-green-400 p-6 mb-6">
              <Lock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-green-900 mb-2">Our Commitment to Security</p>
                <p className="text-green-800 leading-relaxed">
                  We implement comprehensive, industry-leading security measures to protect your personal data from 
                  unauthorized access, disclosure, alteration, and destruction.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">6.1 Technical Security Measures</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li><strong>Encryption in Transit:</strong> All data transmitted between your device and our servers uses TLS 1.3 encryption</li>
              <li><strong>Encryption at Rest:</strong> All stored data is encrypted using AES-256 encryption</li>
              <li><strong>Secure Authentication:</strong> Multi-factor authentication (MFA), secure token management, and OAuth 2.0 protocols</li>
              <li><strong>Network Security:</strong> Firewalls, intrusion detection/prevention systems (IDS/IPS), and DDoS protection</li>
              <li><strong>Secure APIs:</strong> API authentication, rate limiting, input validation, and security headers</li>
              <li><strong>Regular Security Audits:</strong> Third-party penetration testing and vulnerability assessments</li>
              <li><strong>Secure Development:</strong> Code reviews, security testing in CI/CD pipelines, and vulnerability scanning</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">6.2 Organizational Security Measures</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li><strong>Access Controls:</strong> Strict role-based access control (RBAC) and principle of least privilege</li>
              <li><strong>Employee Training:</strong> Regular security awareness training and privacy compliance education</li>
              <li><strong>Background Checks:</strong> Security screening for employees with data access</li>
              <li><strong>Confidentiality Agreements:</strong> All personnel sign NDAs and data protection agreements</li>
              <li><strong>Incident Response Plan:</strong> Comprehensive security incident response and breach notification procedures</li>
              <li><strong>Vendor Management:</strong> Security assessments of all third-party service providers</li>
              <li><strong>Data Minimization:</strong> We collect only data necessary for providing services</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">6.3 Privacy by Design</h3>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-6">
              <li>Privacy considerations are integrated into all product development from the start</li>
              <li>Default settings prioritize user privacy and data protection</li>
              <li>Regular privacy impact assessments (PIAs) for new features</li>
              <li>Transparent data practices with clear user controls</li>
              <li>Anonymization and pseudonymization of data where possible</li>
            </ul>

            <h3 className="text-xl font-semibold text-cal-text-primary mb-3">6.4 Data Breach Response</h3>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              In the event of a data breach:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li>We will notify affected users within 72 hours of discovering the breach</li>
              <li>We will inform relevant regulatory authorities as required by law</li>
              <li>We will provide details about what data was affected and steps we're taking</li>
              <li>We will offer guidance on protective measures you can take</li>
            </ul>

            <p className="text-cal-text-secondary leading-relaxed italic">
              <strong>Important:</strong> While we implement robust security measures, no method of transmission over 
              the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed 
              to using commercially reasonable means to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">7. Data Retention and Deletion</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in 
              this Privacy Policy:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li><strong>Account Data:</strong> Retained while your account is active or as needed to provide services</li>
              <li><strong>Voice Recordings:</strong> Stored for up to 90 days unless you delete them sooner</li>
              <li><strong>Command History:</strong> Retained for up to 12 months for service improvement</li>
              <li><strong>Analytics Data:</strong> Anonymized data may be retained for up to 2 years</li>
              <li><strong>Legal/Compliance:</strong> Data may be retained longer if required by law or for legal proceedings</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed mt-4">
              When data is no longer needed, we will securely delete or anonymize it. You can request deletion of your 
              data at any time through the app settings or by contacting us at privacy@altself.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">8. Your Privacy Rights</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-cal-text-secondary mb-4">
              <li><strong>Right to Access:</strong> Request a copy of all personal data we hold about you</li>
              <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Right to Deletion:</strong> Request deletion of your personal data ("right to be forgotten")</li>
              <li><strong>Right to Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing where consent is the legal basis</li>
              <li><strong>Right to Object:</strong> Object to certain types of data processing (e.g., marketing, profiling)</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation on how we use your data</li>
              <li><strong>Right to Lodge Complaint:</strong> File a complaint with your local data protection authority</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              <strong>To exercise these rights:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary">
              <li>Use the privacy controls in the AltSelf app settings</li>
              <li>Email us at privacy@altself.com with your request</li>
              <li>We will respond to your request within 30 days</li>
              <li>We may need to verify your identity before processing requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">9. Data Sharing and Disclosure</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              <strong>We do not sell your personal data.</strong> We may share your information in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
              <li><strong>Service Providers:</strong> With trusted third-party vendors who perform services on our behalf (e.g., cloud hosting, analytics)</li>
              <li><strong>API Partners:</strong> With services you choose to integrate (Ola, Uber, Google, Spotify, YouTube) as described in Section 5</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, court order, or government request</li>
              <li><strong>Safety and Protection:</strong> To protect the rights, property, or safety of AltSelf, our users, or the public</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice to you)</li>
              <li><strong>Aggregated Data:</strong> Anonymized, aggregated data that cannot identify you personally may be shared for analytics and research</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed">
              All third-party service providers are contractually obligated to maintain the confidentiality and security 
              of your data and may only use it for the specific purposes we authorize.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">10. Children's Privacy</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              AltSelf is not intended for use by children under the age of 13 (or the minimum age required in your jurisdiction). 
              We do not knowingly collect personal information from children under 13.
            </p>
            <p className="text-cal-text-secondary leading-relaxed">
              If we become aware that we have collected data from a child under 13 without parental consent, we will 
              take steps to delete such information promptly. If you are a parent or guardian and believe your child 
              has provided us with personal information, please contact us immediately at privacy@altself.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">11. International Data Transfers</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence, 
              including countries that may have different data protection laws.
            </p>
            <p className="text-cal-text-secondary leading-relaxed">
              When we transfer personal data internationally, we ensure appropriate safeguards are in place, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mt-4">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Adequacy decisions recognizing equivalent data protection standards</li>
              <li>Data Processing Agreements with third-party processors</li>
              <li>Compliance with applicable data protection regulations (GDPR, CCPA, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">12. Third-Party Links and Services</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              AltSelf may contain links to third-party websites, apps, and services not operated by us. We are not 
              responsible for the privacy practices of these third parties.
            </p>
            <p className="text-cal-text-secondary leading-relaxed">
              We strongly encourage you to read the privacy policies of any third-party sites or services you visit 
              or interact with. This Privacy Policy applies only to AltSelf.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">13. Changes to This Privacy Policy</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
              legal requirements, or other factors.
            </p>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cal-text-secondary mb-4">
              <li>Updating the "Last updated" date at the top of this page</li>
              <li>Sending an email notification (if you have provided your email)</li>
              <li>Displaying a prominent notice in the app</li>
              <li>Requiring you to accept updated terms before continued use (for significant changes)</li>
            </ul>
            <p className="text-cal-text-secondary leading-relaxed">
              We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. 
              Your continued use of the Service after changes become effective constitutes your acceptance of the revised Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cal-text-primary mb-4">14. Contact Us</h2>
            <p className="text-cal-text-secondary leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <Database className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-cal-text-primary mb-2">AltSelf Privacy Team</p>
                  <p className="text-cal-text-secondary leading-relaxed mb-1">
                    <strong>Email:</strong> <a href="mailto:privacy@altself.com" className="text-blue-600 hover:underline">privacy@altself.com</a>
                  </p>
                  <p className="text-cal-text-secondary leading-relaxed mb-1">
                    <strong>Support:</strong> <a href="mailto:support@altself.com" className="text-blue-600 hover:underline">support@altself.com</a>
                  </p>
                  <p className="text-cal-text-secondary leading-relaxed">
                    <strong>Website:</strong> <a href="https://www.altself.com" className="text-blue-600 hover:underline">www.altself.com</a>
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                We aim to respond to all privacy inquiries and requests within 30 days of receipt. For urgent 
                security concerns, please include "URGENT" in your subject line.
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