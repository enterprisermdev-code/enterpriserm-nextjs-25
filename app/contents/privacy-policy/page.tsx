import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="py-24 pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-gray-600">Last Updated: January 2025</p>
            </div>

            <div className="prose lg:prose-lg max-w-none mx-auto text-gray-700 space-y-6">
              <p>
                EnterpriseRM.ai (“we”, “our”, “us”) is committed to protecting your personal information and your right to privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, platform, and related services.
              </p>
              <p>
                If you have any questions, please contact us at: <a href="mailto:privacy@enterpriserm.ai" className="text-[#120174] hover:underline">privacy@enterpriserm.ai</a>
              </p>

              <h2 id="info-we-collect">1. Information We Collect</h2>
              <p>We may collect the following categories of information:</p>
              
              <h3>1.1 Personal Information</h3>
              <p>When you interact with our site or platform, we may collect:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Job title</li>
                <li>Account login information</li>
                <li>Billing details (via our payment provider)</li>
              </ul>

              <h3>1.2 Usage Data</h3>
              <p>Automatically collected data includes:</p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time spent on the platform</li>
                <li>Clickstream and interaction data</li>
                <li>Log files and system events</li>
              </ul>

              <h3>1.3 Platform Data</h3>
              <p>When you use EnterpriseRM.ai, you may upload organizational data such as:</p>
              <ul>
                <li>Risk registers</li>
                <li>Compliance documents</li>
                <li>Assessments</li>
                <li>Audit evidence</li>
                <li>Team information</li>
                <li>Uploaded files and attachments</li>
              </ul>
              <p>This data is stored securely and used only to provide platform functionality.</p>

              <h3>1.4 Cookies & Tracking Technologies</h3>
              <p>We may use:</p>
              <ul>
                <li>Cookies</li>
                <li>Web beacons</li>
                <li>Analytical tools</li>
                <li>Session identifiers</li>
              </ul>
              <p>You can manage cookies through your browser settings.</p>

              <h2 id="how-we-use">2. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li>To provide, operate, and maintain our platform</li>
                <li>To create and manage your account</li>
                <li>To improve platform functionality and user experience</li>
                <li>To process payments and subscriptions</li>
                <li>To send alerts, notifications, and service updates</li>
                <li>To deliver customer support</li>
                <li>To analyze product performance and usage trends</li>
                <li>To comply with legal and regulatory obligations</li>
                <li>To protect against unauthorized access or misuse</li>
              </ul>
              <p>We never sell your personal information to third parties.</p>

              <h2 id="how-we-share">3. How We Share Information</h2>
              <p>We may share information with:</p>

              <h3>3.1 Service Providers</h3>
              <p>Trusted vendors who help us operate our platform, including:</p>
              <ul>
                <li>Cloud infrastructure providers</li>
                <li>Payment processors</li>
                <li>Email and communication tools</li>
                <li>Analytics providers</li>
                <li>Security vendors</li>
              </ul>
              <p>All providers are bound by strict confidentiality and data-processing agreements.</p>

              <h3>3.2 Legal Compliance</h3>
              <p>We may disclose information if required to:</p>
              <ul>
                <li>Comply with laws</li>
                <li>Respond to legal requests</li>
                <li>Protect our rights, users, or the public</li>
              </ul>

              <h3>3.3 Business Transfers</h3>
              <p>If EnterpriseRM.ai merges, acquires, or undergoes asset transfers, customer data may be transferred as part of the transaction.</p>

              <h2 id="data-security">4. Data Storage & Security</h2>
              <p>We use industry-standard security measures to protect your data, including:</p>
              <ul>
                <li>Encryption at rest and in transit</li>
                <li>Role-based access controls</li>
                <li>Multi-factor authentication</li>
                <li>Annual security audits</li>
                <li>Logging and monitoring</li>
                <li>Regular backups</li>
              </ul>
              <p>Despite safeguards, no system is 100% secure, and we cannot guarantee absolute protection.</p>

              <h2 id="data-retention">5. Data Retention</h2>
              <p>We retain your personal and platform data only as long as necessary for:</p>
              <ul>
                <li>Providing our services</li>
                <li>Fulfilling contractual obligations</li>
                <li>Meeting legal or regulatory requirements</li>
              </ul>
              <p>You may request deletion of your account and data at any time.</p>

              <h2 id="your-rights">6. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion (“right to be forgotten”)</li>
                <li>Restrict or object to processing</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p>To exercise these rights, contact: <a href="mailto:privacy@enterpriserm.ai" className="text-[#120174] hover:underline">privacy@enterpriserm.ai</a></p>

              <h2 id="international-transfers">7. International Data Transfers</h2>
              <p>Your information may be stored and processed in multiple regions. We ensure compliance with applicable data protection laws (including GDPR) through contractual safeguards and standard data protection clauses.</p>

              <h2 id="childrens-privacy">8. Children’s Privacy</h2>
              <p>EnterpriseRM.ai does not knowingly collect data from anyone under 16. If you believe a minor’s data has been processed, contact us for removal.</p>

              <h2 id="third-party-links">9. Third-Party Links</h2>
              <p>Our website may contain links to external websites. We are not responsible for their privacy practices or content.</p>

              <h2 id="changes-to-policy">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Updates will be posted here with a revised “Last Updated” date. Continued use of our platform means you accept the updated policy.</p>

              <h2 id="contact-us">11. Contact Us</h2>
              <p>For questions, concerns, or requests related to your privacy, contact us:</p>
              <p>
                📧 <a href="mailto:privacy@enterpriserm.ai" className="text-[#120174] hover:underline">privacy@enterpriserm.ai</a><br />
                📍 EnterpriseRM.ai Inc.<br />
                Support Portal: <a href="https://support.enterpriserm.ai" target="_blank" rel="noopener noreferrer" className="text-[#120174] hover:underline">support.enterpriserm.ai</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
