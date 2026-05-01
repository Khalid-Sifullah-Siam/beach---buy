
const ReturnsPolicy = () => {
    return (
        <div className="min-h-screen bg-base-200 py-12">
            <div className="max-w-9/12 mx-auto px-4">
                {/* Hero Section */}
                <div className="text-left mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Returns Policy
                    </h1>
                    <p className="text-base-content/70">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                {/* Content Card */}
                <div className="bg-base-100 rounded-lg shadow-lg p-6 md:p-8 space-y-8">
                    
                    {/* Overview */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Returns Overview</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            At Summer Store, we want you to love your seasonal purchases. If you're not completely satisfied 
                            with your order, we're here to help. This policy outlines our return and refund process for all 
                            products purchased from our website.
                        </p>
                    </section>

                    {/* Return Eligibility */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Return Eligibility</h2>
                        <p className="text-base-content/80 leading-relaxed mb-3">
                            To be eligible for a return, your item must meet the following criteria:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
                            <li>Return requested within <strong>7 days</strong> of delivery date</li>
                            <li>Item is unused and in original condition</li>
                            <li>All original tags, packaging, and accessories are included</li>
                            <li>Item is not marked as final sale or clearance</li>
                            <li>Proof of purchase (order number or receipt) is provided</li>
                        </ul>
                    </section>

                    {/* Non-Returnable Items */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Non-Returnable Items</h2>
                        <p className="text-base-content/80 leading-relaxed mb-3">
                            The following items cannot be returned:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
                            <li>Swimwear and undergarments (hygiene reasons)</li>
                            <li>Customized or personalized products</li>
                            <li>Final sale or clearance items</li>
                            <li>Gift cards and vouchers</li>
                            <li>Products damaged by misuse or improper care</li>
                            <li>Skincare products that have been opened or used</li>
                        </ul>
                    </section>

                    {/* Return Process */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">How to Return an Item</h2>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="badge badge-primary badge-lg">1</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Initiate Return</h3>
                                    <p className="text-base-content/80">Log into your account and go to "My Orders". Select the order and item you wish to return, then fill out the return request form.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="badge badge-primary badge-lg">2</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Get Approval</h3>
                                    <p className="text-base-content/80">Wait for our team to review and approve your return request (usually within 1-2 business days). You'll receive a return authorization via email.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="badge badge-primary badge-lg">3</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Pack and Ship</h3>
                                    <p className="text-base-content/80">Pack the item securely in original packaging. Include the return authorization form. Ship to our returns address using a trackable shipping method.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="badge badge-primary badge-lg">4</div>
                                <div>
                                    <h3 className="font-semibold mb-1">Inspection</h3>
                                    <p className="text-base-content/80">Once we receive your return, our team will inspect the item within 3-5 business days to verify its condition.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Refunds */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Refunds</h2>
                        <p className="text-base-content/80 leading-relaxed mb-3">
                            Once your return is approved and inspected, we will process your refund. Please note:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
                            <li>Refunds are issued to your original payment method</li>
                            <li>Processing time: 5-7 business days after inspection</li>
                            <li>Original shipping costs are non-refundable</li>
                            <li>You will receive a confirmation email once refund is processed</li>
                            <li>Depending on your bank, refunds may take 3-10 days to appear in your account</li>
                        </ul>
                    </section>

                    {/* Exchanges */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Exchanges</h2>
                        <p className="text-base-content/80 leading-relaxed">
                            Want a different size or color? We offer exchanges for eligible items. 
                            To exchange an item, please initiate a return for the original item and place a new order for 
                            the desired item. This ensures you get the replacement quickly without waiting for the return to process.
                        </p>
                    </section>

                    {/* Damaged or Defective Items */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Damaged or Defective Items</h2>
                        <p className="text-base-content/80 leading-relaxed mb-3">
                            If you receive a damaged, defective, or incorrect item, please contact us immediately:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
                            <li>Report within 48 hours of delivery</li>
                            <li>Provide photos showing the damage or defect</li>
                            <li>Keep all original packaging</li>
                            <li>We will cover return shipping costs for defective items</li>
                            <li>We offer full refund or replacement at no additional cost</li>
                        </ul>
                    </section>

                    {/* Shipping Costs for Returns */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Return Shipping Costs</h2>
                        <div className="overflow-x-auto">
                            <table className="table table-sm">
                                <thead>
                                    <tr className="bg-base-200">
                                        <th>Return Reason</th>
                                        <th>Who Pays?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Changed mind / Not satisfied</td>
                                        <td>Customer</td>
                                    </tr>
                                    <tr>
                                        <td>Wrong size / color ordered</td>
                                        <td>Customer</td>
                                    </tr>
                                    <tr>
                                        <td>Damaged / Defective item</td>
                                        <td>Summer Store</td>
                                    </tr>
                                    <tr>
                                        <td>Wrong item shipped</td>
                                        <td>Summer Store</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-base-content/60 mt-2">
                            * We recommend using a trackable shipping service. Summer Store is not responsible for returns lost in transit.
                        </p>
                    </section>

                    {/* Seasonal Products Note */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Important Note for Seasonal Products</h2>
                        <p className="text-base-content/80 leading-relaxed bg-info/10 p-4 rounded-lg">
                            ⚠️ As we specialize in seasonal summer products, please check your items promptly after delivery. 
                            Returns for summer products requested near the end of summer season may be processed differently 
                            due to seasonal inventory changes. Contact our support team for assistance.
                        </p>
                    </section>

                    {/* Contact for Returns */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Contact Our Returns Team</h2>
                        <p className="text-base-content/80 leading-relaxed mb-3">
                            For any return-related questions or assistance, please reach out to us:
                        </p>
                        <div className="mt-4 p-4 bg-base-200 rounded-lg">
                            <p className="text-base-content/80">
                                <strong>Returns Email:</strong> returns@beachnbuy.com<br />
                                <strong>Customer Support:</strong> support@beachnbuy.com<br />
                                <strong>Phone:</strong> +880 1234-56789 (Mon-Fri, 9 AM - 6 PM)<br />
                                <strong>Returns Address:</strong><br />
                                Summer Store Returns Dept.<br />
                                123 Beach Road, Cox's Bazar<br />
                                Bangladesh
                            </p>
                        </div>
                    </section>

                    {/* Quick Summary Box */}
                    <section className="bg-primary/10 p-5 rounded-lg border border-primary/20">
                        <h3 className="text-lg font-semibold mb-2 text-primary">Quick Summary</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            <div>✅ <strong>Return Window:</strong> 7 days from delivery</div>
                            <div>💰 <strong>Refund Time:</strong> 5-7 business days after inspection</div>
                            <div>📦 <strong>Condition:</strong> Unused with original packaging</div>
                            <div>🚫 <strong>Final Sale:</strong> Not eligible for return</div>
                        </div>
                    </section>

                    {/* Policy Updates */}
                    <section className="text-sm text-base-content/60 border-t border-base-300 pt-6">
                        <p>
                            Summer Store reserves the right to update this Returns Policy at any time. Changes will be effective 
                            immediately upon posting. Please review this policy periodically. For returns initiated before policy 
                            changes, the previous policy will apply.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ReturnsPolicy;