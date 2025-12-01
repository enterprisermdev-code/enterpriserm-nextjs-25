import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function TermsPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="py-24 pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
              <p className="text-gray-600">Last Updated: January 2025</p>
            </div>

            <div className="prose lg:prose-lg max-w-none mx-auto text-gray-700 space-y-6">
              <p>
                Welcome to EnterpriseRM.ai (“EnterpriseRM.ai”, “we”, “our”, “us”). These Terms & Conditions (“Terms”) govern your access to and use of our website, platform, mobile applications, and related services (collectively, the “Services”).
              </p>
              <p>
                By using our Services, you agree to be bound by these Terms. If you do not agree, do not use EnterpriseRM.ai.
              </p>

              <h2 id="eligibility">1. Eligibility</h2>
              <p>By using the Services, you represent that:</p>
              <ul>
                <li>You are at least 18 years old.</li>
                <li>You have the authority to bind your organization to these Terms.</li>
                <li>Your use of the platform complies with all applicable laws and regulations.</li>
              </ul>

              <h2 id="account-registration">2. Account Registration</h2>
              <p>To access certain features, you must create an account. You agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your login credentials</li>
                <li>Notify us immediately of unauthorized access</li>
                <li>Take full responsibility for all activity under your account</li>
              </ul>
              <p>We are not liable for losses caused by unauthorized account access.</p>

              <h2 id="use-of-services">3. Use of the Services</h2>
              <p>You may use EnterpriseRM.ai solely for lawful business purposes. You agree not to:</p>
              <ul>
                <li>Copy, modify, reverse engineer, or decompile the software</li>
                <li>Use the Services to transmit harmful or illegal content</li>
                <li>Interfere with platform operation or security</li>
                <li>Access the platform using automated scripts or bots</li>
                <li>Share login credentials with unapproved users</li>
                <li>Upload data you do not have rights to share</li>
              </ul>
              <p>Violation of these rules may result in termination.</p>

              <h2 id="subscription">4. Subscription, Billing & Payments</h2>
              <h3>4.1 Subscription Plans</h3>
              <p>Access to paid features requires a subscription. Plan details, features, and pricing are available on our website.</p>
              <h3>4.2 Billing</h3>
              <p>Subscriptions are billed in advance on a recurring basis (monthly or annual, depending on your plan). By subscribing, you authorize us to charge your payment method.</p>
              <h3>4.3 Renewals</h3>
              <p>Subscriptions renew automatically unless canceled before the next billing cycle.</p>
              <h3>4.4 Taxes</h3>
              <p>You are responsible for any applicable taxes or government charges.</p>

              <h2 id="cancellations">5. Cancellations & Refunds</h2>
              <h3>5.1 Cancellation</h3>
              <p>You may cancel your subscription anytime through your account settings.</p>
              <h3>5.2 Refunds</h3>
              <p>Unless otherwise stated:</p>
              <ul>
                <li>Subscription fees are non-refundable.</li>
                <li>Cancellations stop future charges but do not refund past payments.</li>
                <li>We may offer refunds at our sole discretion (e.g., billing errors).</li>
              </ul>

              <h2 id="privacy">6. User Data & Privacy</h2>
              <p>Your use of EnterpriseRM.ai is also governed by our Privacy Policy, which explains what data we collect, how we store it, how we protect it, and your rights regarding personal data. By using the platform, you agree to the terms outlined in our Privacy Policy.</p>

              <h2 id="customer-content">7. Customer Content</h2>
              <p>You retain ownership of all data, documents, files, and information uploaded to the platform (“Customer Content”). You grant EnterpriseRM.ai a limited license to store, process, display, transmit, secure, and analyze your data solely for delivering and improving the Services. We do not sell or share Customer Content with third parties except as required to operate the platform or by law.</p>

              <h2 id="ip-rights">8. Intellectual Property Rights</h2>
              <p>All intellectual property, including software, code, interface, design, features, documentation, trademarks, logos, algorithms, and models, belong to EnterpriseRM.ai and its licensors. You may not copy, distribute, or create derivative works without our written consent.</p>

              <h2 id="service-availability">9. Service Availability</h2>
              <p>We strive to maintain high uptime but do not guarantee uninterrupted access. We may perform maintenance, update features, modify functionality, or discontinue services with or without prior notice.</p>

              <h2 id="third-party">10. Third-Party Services</h2>
              <p>Some features may integrate with third-party tools (e.g., cloud storage, communication apps). We are not responsible for third-party terms, data handling, outages, or security issues. Use them at your own risk.</p>

              <h2 id="liability">11. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law: EnterpriseRM.ai is not liable for indirect, incidental, punitive, or consequential damages. Our total liability for any claim is limited to the amount you paid us in the previous 12 months. We are not responsible for lost profits, business interruptions, corrupted data, or unauthorized access due to user negligence.</p>

              <h2 id="indemnification">12. Indemnification</h2>
              <p>You agree to indemnify and hold EnterpriseRM.ai harmless from any claims, losses, or damages arising from misuse of the platform, violation of these Terms, infringement of third-party rights, or data uploaded by your users.</p>

              <h2 id="termination">13. Suspension & Termination</h2>
              <p>We may suspend or terminate your account if you violate these Terms, your payment fails repeatedly, you engage in fraud or abuse, or we detect security risks or misuse. Upon termination, your access is revoked, and we may delete or archive your data (as allowed by law).</p>

              <h2 id="governing-law">14. Governing Law</h2>
              <p>These Terms are governed by the laws of Singapore / India (choose based on your company’s registration) without regard to conflict-of-law principles. Any disputes will be resolved in the courts of the governing region.</p>

              <h2 id="changes-to-terms">15. Changes to These Terms</h2>
              <p>We may update these Terms periodically. Updated versions will be posted here with a new “Last Updated” date. Continued use of the Services indicates acceptance of the updated Terms.</p>

              <h2 id="contact-us">16. Contact Us</h2>
              <p>For legal or account-related questions:</p>
              <p>
                📧 <a href="mailto:legal@enterpriserm.ai" className="text-[#120174] hover:underline">legal@enterpriserm.ai</a><br />
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
