import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "Test Your Skin",
    path: "/test"
  }, {
    name: "Skin Care",
    path: "/skin-care"
  }, {
    name: "Find Hospitals",
    path: "/hospitals"
  }, {
    name: "Contact Us",
    path: "/contact"
  }, {
    name: "Sign Up",
    path: "/register"
  }];
  const resourceLinks = [{
    name: "Skin Conditions",
    path: "#"
  }, {
    name: "Blog",
    path: "#"
  }, {
    name: "FAQ",
    path: "#"
  }, {
    name: "Privacy Policy",
    path: "#"
  }, {
    name: "Terms of Service",
    path: "#"
  }];
  return <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                SkinWise Diagnostics
              </span>
            </h3>
            <p className="text-gray-600 mb-4">
              AI-powered skin disease detection to help you identify potential skin 
              conditions quickly and connect with healthcare providers when needed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-skinwise-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-skinwise-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.017 10.017 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-skinwise-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => <li key={index}>
                  <Link to={link.path} className="text-gray-600 hover:text-skinwise-accent transition-colors link-underline inline-block">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
          
          {/* Resources */}
          
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} SkinWise Diagnostics. All rights reserved.
            <br />
            <span className="text-xs">
              The scan results are not a diagnosis. Always consult with your doctor for an accurate assessment.
            </span>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;