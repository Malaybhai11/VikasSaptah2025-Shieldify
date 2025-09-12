'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="ml-2 text-xl font-bold">Shieldify</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered Web Application Firewall for 24/7 server protection.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                    Solutions
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="/working" className="text-sm text-gray-400 hover:text-white transition-colors">
                      How it Works?
                      </Link>
                    </li>
                    <li>
                      <Link href="/setup" className="text-sm text-gray-400 hover:text-white transition-colors">
                        How To Setup?
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                    Builders
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#developer-team" className="text-sm text-gray-400 hover:text-white transition-colors">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/social" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Our Social Media
                      </Link>
                    </li>
                    <li>
                      <Link href="/social #LinkedIn" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                    Legal
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Terms
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                    Contact
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Call On +91 7016870163
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="text-sm text-gray-400 hover:text-white transition-colors">
                        mail:malay.raval11@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-center text-sm text-gray-400">
              &copy; 2025 Shieldify, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <script>
        {`
          document.getElementById("scroll-btn").addEventListener("click", () => {
            document.getElementById("developer-info").scrollIntoView({
              behavior: "smooth"
            });
          });
        `}
      </script>
    </>
  );
};

export default Footer;
