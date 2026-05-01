
const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-auto">
            <div className="max-w-9/12 mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="mailto:support@summerstore.com" className="hover:link">
                                    support@beachnbuy.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+880123456789" className="hover:link">
                                    +880 1234-56789
                                </a>
                            </li>
                            <li>123 Beach Road, Cox's Bazar, Bangladesh</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:link" target="_blank" rel="noopener noreferrer">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:link" target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:link" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:link" target="_blank" rel="noopener noreferrer">
                                    TikTok
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Privacy Policy & Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/privacy-policy" className="hover:link">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms-of-service" className="hover:link">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/returns-policy" className="hover:link">
                                    Returns Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-base-300 mt-8 pt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Summer Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;