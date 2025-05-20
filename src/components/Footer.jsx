
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Test Your Skin", path: "/test" },
    { name: "Skin Care", path: "/skin-care" },
    { name: "Precautions", path: "/precautions" },
    { name: "Find Hospitals", path: "/hospitals" },
    { name: "Contact Us", path: "/contact" }
  ];
  
  const resourceLinks = [
    { name: "Skin Conditions", path: "#" },
    { name: "Blog", path: "#" },
    { name: "FAQ", path: "#" },
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                SkinWise
              </span>
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              AI-powered skin disease detection to help you identify potential conditions and connect with specialists.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-skinwise-accent transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-skinwise-accent transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-skinwise-accent transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-skinwise-accent transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-600 hover:text-skinwise-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-600 hover:text-skinwise-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-800 mb-4">Contact Us</h3>
            <address className="not-italic text-sm text-gray-600">
              <p className="flex items-center mb-2">
                <Globe className="mr-2" size={16} />
                Sharda University
              </p>
              <p className="mb-2">Greater Noida, Uttar Pradesh, India</p>
              <p className="mb-2">
                <a href="mailto:info@skinwise.com" className="hover:text-skinwise-accent transition-colors">
                  info@skinwise.com
                </a>
              </p>
              <p>
                <a href="tel:+919259618606" className="hover:text-skinwise-accent transition-colors">
                  +91 9259618606
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} SkinWise Diagnostics. All rights reserved.
            </p>
            <p className="text-xs text-gray-400">
              The scan results are not a diagnosis. Always consult with your doctor.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
