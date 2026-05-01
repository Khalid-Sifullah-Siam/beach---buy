
const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-base-200 py-12">
            <div className="max-w-9/12 mx-auto px-4">
                {/* Hero Section */}
                <div className="text-left mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-base-content/70">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                {/* Content Card */}
                <div className="bg-base-100 rounded-lg shadow-lg p-6 md:p-8 space-y-8">
                    
                    {/* Agreement to Terms */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">1. Agreement to Terms</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            By accessing or using Summer Store's website, you agree to be bound by these Terms of Service. 
                            If you disagree with any part of these terms, you may not access the website or use our services.
                            These terms apply to all visitors, users, and customers of Summer Store.
                        </p>
                    </section>

                    {/* Products and Services */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">2. Products and Services</h2>
                        <p className="text-base-content/80 leading-relaxed mb-3">
                            Summer Store offers seasonal products including but not limited to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
                            <li>Sunglasses and eyewear</li>
                            <li>Summer outfits and clothing</li>
                            <li>Skincare and sun protection products</li>
                            <li>Beach accessories and equipment</li>
                            <li>Other seasonal merchandise</li>
                        </ul>
                        <p className="text-base-content/80 leading-relaxed mt-3">
                            We reserve the right to modify or discontinue any product without prior notice.
                        </p>
                    </section>

                    {/* Orders and Payments */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">3. Orders and Payments</h2>
                        <p className="text-base-content/80 leading-relaxed mb-3">
                            When you place an order on Summer Store, you agree to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
                            <li>Provide accurate and complete order information</li>
                            <li>Ensure you are authorized to use the payment method provided</li>
                            <li>Pay all charges incurred by you or on your behalf</li>
                            <li>Accept that all orders are subject to availability and confirmation</li>
                        </ul>
                        <p className="text-base-content/80 leading-relaxed mt-3">
                            We reserve the right to refuse or cancel any order for reasons including but not limited to product availability, 
                            errors in product description or pricing, or suspected fraudulent activity.
                        </p>
                    </section>

                    {/* Pricing */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">4. Pricing</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            All prices displayed on Summer Store are in Bangladeshi Taka (BDT) and are inclusive of applicable taxes 
                            unless otherwise stated. We reserve the right to change prices at any time without prior notice. 
                            However, price changes will not affect orders that have already been confirmed.
                        </p>
                    </section>

                    {/* Shipping and Delivery */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">5. Shipping and Delivery</h2>
                        <p className="text-base-content/80 leading-relaxed mb-3">
                            We strive to deliver your orders in a timely manner. Please note:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
                            <li>Delivery times are estimates and not guaranteed</li>
                            <li>Shipping costs will be displayed before order confirmation</li>
                            <li>Risk of loss passes to you upon delivery</li>
                            <li>We are not responsible for delays caused by external factors</li>
                        </ul>
                    </section>

                    {/* Returns and Refunds */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">6. Returns and Refunds</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            We accept returns within 7 days of delivery for unused products in original packaging. 
                            Refunds will be processed within 5-7 business days after we receive and inspect the returned item. 
                            Customized or final sale items are not eligible for return. Shipping costs for returns are non-refundable.
                        </p>
                    </section>

                    {/* User Accounts */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">7. User Accounts</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            To place orders on Summer Store, you must create an account. You are responsible for maintaining 
                            the confidentiality of your account credentials and for all activities that occur under your account. 
                            Please notify us immediately of any unauthorized use of your account.
                        </p>
                    </section>

                    {/* Prohibited Activities */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">8. Prohibited Activities</h2>
                        <p className="text-base-content/80 leading-relaxed mb-3">
                            You agree not to engage in any of the following prohibited activities:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
                            <li>Using our website for any illegal purpose</li>
                            <li>Attempting to interfere with our website's security features</li>
                            <li>Uploading malicious code or viruses</li>
                            <li>Scraping or collecting user data without permission</li>
                            <li>Impersonating another person or entity</li>
                        </ul>
                    </section>

                    {/* Intellectual Property */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">9. Intellectual Property</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            All content on Summer Store including text, graphics, logos, images, and software is our property 
                            or licensed to us and is protected by copyright and intellectual property laws. You may not reproduce, 
                            distribute, or create derivative works without our express written permission.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">10. Limitation of Liability</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            To the maximum extent permitted by law, Summer Store shall not be liable for any indirect, incidental, 
                            special, consequential, or punitive damages arising from your use of our website or purchase of our products. 
                            Our total liability shall not exceed the amount you paid for the product giving rise to the claim.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">11. Governing Law</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            These Terms of Service shall be governed by and construed in accordance with the laws of Bangladesh. 
                            Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Cox's Bazar, Bangladesh.
                        </p>
                    </section>

                    {/* Changes to Terms */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">12. Changes to Terms</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately 
                            upon posting on this page. Your continued use of Summer Store after any changes constitutes acceptance 
                            of the modified terms.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">13. Contact Us</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            If you have any questions about these Terms of Service, please contact us:
                        </p>
                        <div className="mt-4 p-4 bg-base-200 rounded-lg">
                            <p className="text-base-content/80">
                                <strong>Email:</strong> legal@beachnbuy.com<br />
                                <strong>Phone:</strong> +880 1234-56789<br />
                                <strong>Address:</strong> 123 Beach Road, Cox's Bazar, Bangladesh
                            </p>
                        </div>
                    </section>

                    {/* Acknowledgment */}
                    <section className="text-sm text-base-content/60 border-t border-base-300 pt-6">
                        <p>
                            By using Summer Store, you acknowledge that you have read, understood, and agree to be bound by 
                            these Terms of Service.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;