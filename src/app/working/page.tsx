'use client';

import { motion } from 'framer-motion';

export default function WorkingPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
                <div className="max-w-6xl mx-auto relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                            How Shieldify Works
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            AI-powered protection that learns and adapts to keep your applications secure
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What is a WAF Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-6">What is a Web Application Firewall?</h2>
                        <p className="text-xl text-gray-300">
                            A WAF creates a shield between a web application and the Internet, protecting against common attacks.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">The Shieldify Difference</h3>
                            <p className="text-gray-300 mb-4">
                                A Web Application Firewall (WAF) helps protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet. It typically protects against attacks such as cross-site forgery, cross-site scripting (XSS), file inclusion, and SQL injection.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Shieldify operates as a reverse proxy, sitting in front of your server to filter malicious requests before they reach your application. While traditional proxies protect clients, our reverse proxy protects your server from exposure.
                            </p>
                            <p className="text-gray-300">
                                Our WAF uses a set of rules (policies) to identify and block malicious traffic. During an attack, we can quickly implement rate limiting and other protective measures.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-cyan-500/30">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <span>Internet</span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <span>Shieldify WAF (AI Analysis)</span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span>Customer Server</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Models Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-6">Security Models</h2>
                        <p className="text-xl text-gray-300">
                            Two approaches to web application security
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="bg-gradient-to-br from-red-500/10 to-transparent p-8 rounded-2xl border border-red-500/20"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-red-400">Blocklist (Negative Security)</h3>
                            <p className="text-gray-300 mb-6">
                                Think of a blocklist WAF as a club bouncer instructed to deny admittance to guests who don't meet the dress code. It protects against known attacks by blocking malicious patterns.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                    <span>Blocks known attack patterns</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                    <span>Requires regular updates for new threats</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                    <span>May allow zero-day attacks</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-gradient-to-br from-green-500/10 to-transparent p-8 rounded-2xl border border-green-500/20"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-green-400">Allowlist (Positive Security)</h3>
                            <p className="text-gray-300 mb-6">
                                An allowlist WAF is like a bouncer at an exclusive party - only admitting people who are on the list. It only allows pre-approved traffic patterns, blocking everything else.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>Only allows known good traffic</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>Better protection against unknown threats</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>Requires careful configuration</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Shieldify is Greatest Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-6">Why Shieldify is Greatest</h2>
                        <p className="text-xl text-gray-300">
                            Unmatched accuracy through machine learning and continuous adaptation
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-500/20"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.354 3.354 0 0014.172 10M18.5 12a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Machine Learning Models</h3>
                            <p className="text-gray-300">
                                Our AI-powered system uses machine learning models that learn from every interaction, continuously improving accuracy by learning from mistakes.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Self-Learning Algorithms</h3>
                            <p className="text-gray-300">
                                Self-learning algorithms adapt to your specific traffic patterns, distinguishing between legitimate users and malicious bots with unprecedented accuracy.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-green-400">Continuous Adaptation</h3>
                            <p className="text-gray-300">
                                The system evolves protection based on emerging threats and changing traffic patterns, ensuring your application stays protected against new attack vectors.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-16 p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-cyan-500/30"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-center text-cyan-400">The Result: Unmatched Accuracy</h3>
                        <p className="text-gray-300 text-center text-lg">
                            Traditional WAFs rely on static rules and signatures, leading to high false positive rates and gaps in protection. Shieldify's machine learning approach achieves <strong>99.9% accuracy</strong> by understanding the context and behavior of each request, dramatically reducing false positives while catching more threats.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cloud-Based WAF Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-6">Cloud-Based Protection</h2>
                        <p className="text-xl text-gray-300">
                            The advantages of cloud-based WAF implementation
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">Easy Implementation</h3>
                            <p className="text-gray-300">
                                Simple DNS change redirects traffic through Shieldify - no hardware or complex setup required.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-purple-400">Always Updated</h3>
                            <p className="text-gray-300">
                                Automatic updates protect against the newest threats without any work on your end.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3-3m0 0l3-3m-3 3v12"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-green-400">Scalable Protection</h3>
                            <p className="text-gray-300">
                                Handles traffic spikes and DDoS attacks seamlessly, scaling to meet your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
