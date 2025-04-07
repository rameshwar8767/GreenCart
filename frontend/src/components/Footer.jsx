import React from 'react';
import { assets, footerLinks } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-[#a6e2c7] text-gray-900 mt-24 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="py-12 border-b border-gray-300/30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Brand Info */}
        <div>
          <img
            src={assets.logo}
            alt="Brand Logo"
            className="w-28 md:w-32 mb-5"
          />
          <p className="max-w-md text-sm leading-relaxed text-gray-700">
            We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.
          </p>
        </div>

        {/* Footer Links */}
        <div className="md:col-span-1 lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-gray-900 font-semibold text-base mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="hover:underline hover:text-gray-900 transition"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Copy */}
      <p className="text-center text-sm md:text-base py-6 text-gray-500/80">
        © {new Date().getFullYear} GreenCart. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
