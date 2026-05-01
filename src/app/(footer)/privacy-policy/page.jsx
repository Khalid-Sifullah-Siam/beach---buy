
const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-base-200 py-12">
            <div className="max-w-9/12 mx-auto px-4">
                {/* Hero Section */}
                <div className="text-left mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-base-content/70">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                {/* Content Card */}
                <div className="bg-base-100 rounded-lg shadow-lg p-6 md:p-8 space-y-8">
                    {/* Introduction */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Introduction</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            Welcome to Summer Store. We respect your privacy and are committed to protecting your personal data. 
                            This privacy policy will inform you about how we handle your personal information when you visit our website 
                            and make purchases from our summer collection.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Information We Collect</h2>
                        <p className="text-base-content/80 leading-relaxed mb-3">
                            We may collect, use, store and transfer different kinds of personal data about you:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
                            <li><strong>Identity Data:</strong> Name, username, or similar identifier</li>
                            <li><strong>Contact Data:</strong> Billing address, delivery address, email address, and phone numbers</li>
                            <li><strong>Transaction Data:</strong> Details about products you have purchased from us</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                            <li><strong>Profile Data:</strong> Your username and password, purchases, preferences, feedback</li>
                        </ul>
                    </section>

                    {/* How We Use Your Information */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">How We Use Your Information</h2>
                        <p className="text-base-content/80 leading-relaxed mb-3">
                            We use your personal data for the following purposes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
                            <li>To process and deliver your orders</li>
                            <li>To manage your account</li>
                            <li>To communicate with you about your orders and inquiries</li>
                            <li>To improve our products and services</li>
                            <li>To comply with legal obligations</li>
                        </ul>
                    </section>

                    {/* Cookies */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Cookies</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            We use cookies to enhance your browsing experience on our website. Cookies help us understand how you 
                            interact with our site, remember your preferences, and improve our services. You can control cookie 
                            settings through your browser preferences.
                        </p>
                    </section>

                    {/* Data Security */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Data Security</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, 
                            used, or accessed in an unauthorized way. We limit access to your personal data to those employees and 
                            partners who have a business need to know.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Your Legal Rights</h2>
                        <p className="text-base-content/80 leading-relaxed mb-3">
                            Under certain circumstances, you have rights under data protection laws including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
                            <li>The right to access your personal data</li>
                            <li>The right to correct inaccurate personal data</li>
                            <li>The right to erase your personal data</li>
                            <li>The right to object to processing of your personal data</li>
                            <li>The right to data portability</li>
                        </ul>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Contact Us</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        </p>
                        <div className="mt-4 p-4 bg-base-200 rounded-lg">
                            <p className="text-base-content/80">
                                <strong>Email:</strong> privacy@beachnbuy.com<br />
                                <strong>Phone:</strong> +880 1234-56789<br />
                                <strong>Address:</strong> 123 Beach Road, Cox's Bazar, Bangladesh
                            </p>
                        </div>
                    </section>

                    {/* Policy Updates */}
                    <section className="text-sm text-base-content/60 border-t border-base-300 pt-6">
                        <p>
                            We may update this privacy policy from time to time. Any changes will be posted on this page with an 
                            updated revision date. We encourage you to review this privacy policy periodically.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;