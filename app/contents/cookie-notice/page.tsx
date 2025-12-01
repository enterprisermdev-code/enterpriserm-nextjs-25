import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function CookieNoticePage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="py-24 pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Cookie Notice</h1>
              <p className="text-gray-600">Last Updated: January 2025</p>
            </div>

            <div className="prose lg:prose-lg max-w-none mx-auto text-gray-700 space-y-6">
              <p>
                EnterpriseRM.ai (“we”, “our”, “us”) uses cookies and similar tracking technologies to enhance your experience, analyze usage, and improve our Services. This Cookie Notice explains what cookies are, how we use them, and how you can manage your preferences.
              </p>
              <p>
                By continuing to browse or use our website, you agree to our use of cookies as described below.
              </p>

              <h2 id="what-are-cookies">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device when you visit a website. They help us:
              </p>
              <ul>
                <li>recognize your device</li>
                <li>remember your preferences</li>
                <li>improve website performance</li>
                <li>analyze how visitors use our site</li>
              </ul>
              <p>
                Cookies may be set by EnterpriseRM.ai (“first-party cookies”) or by third-party providers (“third-party cookies”).
              </p>

              <h2 id="types-of-cookies">2. Types of Cookies We Use</h2>
              <h3>2.1 Essential Cookies</h3>
              <p>Required for our website to function properly. They allow you to:</p>
              <ul>
                <li>log in securely</li>
                <li>load pages correctly</li>
                <li>access essential features</li>
              </ul>
              <p>These cookies cannot be disabled.</p>

              <h3>2.2 Performance & Analytics Cookies</h3>
              <p>Used to understand how visitors interact with the website. We use tools such as:</p>
              <ul>
                <li>Google Analytics</li>
                <li>internal analytics</li>
              </ul>
              <p>These cookies help us:</p>
              <ul>
                <li>monitor traffic</li>
                <li>identify pages visited</li>
                <li>optimize performance</li>
              </ul>

              <h3>2.3 Functional Cookies</h3>
              <p>Enable enhanced features and personalization, such as:</p>
              <ul>
                <li>remembering preferences</li>
                <li>storing language or region settings</li>
                <li>saving session states</li>
              </ul>

              <h3>2.4 Marketing & Advertising Cookies</h3>
              <p>Used to deliver relevant ads and track campaign performance. Examples include:</p>
              <ul>
                <li>retargeting pixels</li>
                <li>ad network cookies</li>
                <li>social media tracking</li>
              </ul>
              <p>These may share limited information with advertising partners.</p>

              <h2 id="third-party-cookies">3. Third-Party Cookies</h2>
              <p>Some cookies are set by third parties for services such as:</p>
              <ul>
                <li>analytics</li>
                <li>cloud hosting</li>
                <li>support chat</li>
                <li>social media integrations</li>
                <li>embedded content</li>
              </ul>
              <p>We do not control these cookies. Refer to their privacy policies for details.</p>

              <h2 id="manage-cookies">4. How You Can Manage Cookies</h2>
              <p>You can manage, disable, or delete cookies through your browser settings. Common options include:</p>
              <ul>
                <li>blocking all cookies</li>
                <li>blocking third-party cookies</li>
                <li>clearing cookies when closing the browser</li>
                <li>viewing cookie details</li>
              </ul>
              <p>Note: Disabling certain cookies may limit functionality of the EnterpriseRM.ai website or platform.</p>

              <h2 id="updates-to-notice">5. Updates to This Cookie Notice</h2>
              <p>
                We may update this Cookie Notice from time to time. Changes will be posted here with a revised “Last Updated” date. Continued use of our website indicates acceptance of the updated notice.
              </p>

              <h2 id="contact-us">6. Contact Us</h2>
              <p>If you have any questions about our cookie practices:</p>
              <p>
                📧 <a href="mailto:privacy@enterpriserm.ai" className="text-[#120174] hover:underline">privacy@enterpriserm.ai</a><br />
                📍 EnterpriseRM.ai Inc.<br />
                Website: <a href="https://www.enterpriserm.ai" target="_blank" rel="noopener noreferrer" className="text-[#120174] hover:underline">www.enterpriserm.ai</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
