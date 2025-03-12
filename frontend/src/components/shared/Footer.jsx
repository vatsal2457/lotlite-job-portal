import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <footer className="border-t border-t-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="mb-4 md:mb-0 w-full md:w-auto text-center md:text-left">
              <h2 className="text-xl font-bold">Job Hunt</h2>
              <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
            </div>

            <div className="flex space-x-4 mt-4 md:mt-0 justify-center md:justify-start w-full md:w-auto">
              {[{
                href: "https://facebook.com",
                label: "Facebook",
                path: "M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.293H9.293v-3.621h3.527V8.414c0-3.494 2.134-5.399 5.251-5.399 1.494 0 2.78.112 3.154.163v3.649h-2.163c-1.69 0-2.016.803-2.016 1.978v2.594h4.032l-.525 3.621h-3.507V24h6.88C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"
              }, {
                href: "https://twitter.com",
                label: "Twitter",
                path: "M23.954 4.569c-.885.389-1.83.654-2.825.774 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.956-2.173-1.555-3.591-1.555-2.719 0-4.924 2.206-4.924 4.923 0 .386.045.762.127 1.124C7.688 8.087 4.064 6.128 1.64 3.161c-.423.723-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.23-.616v.062c0 2.386 1.693 4.377 3.946 4.828-.413.111-.849.17-1.296.17-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.42-1.683 1.32-3.809 2.105-6.115 2.105-.397 0-.79-.023-1.177-.067 2.18 1.398 4.768 2.215 7.548 2.215 9.057 0 14.01-7.506 14.01-14.011 0-.213-.004-.426-.014-.637.961-.695 1.797-1.562 2.457-2.549z"
              }, {
                href: "https://linkedin.com",
                label: "LinkedIn",
                path: "M22.225 0H1.771C.792 0 0 .773 0 1.733v20.533C0 23.227.792 24 1.771 24h20.454C23.205 24 24 23.227 24 22.267V1.733C24 .773 23.205 0 22.225 0zM7.12 20.452H3.562V9.03H7.12v11.422zM5.34 7.573c-1.155 0-2.091-.935-2.091-2.089S4.184 3.393 5.34 3.393c1.156 0 2.091.935 2.091 2.091 0 1.155-.935 2.089-2.091 2.089zm15.11 12.879h-3.56v-5.903c0-1.41-.028-3.226-1.965-3.226-1.967 0-2.268 1.537-2.268 3.123v6.006H9.093V9.03h3.414v1.561h.047c.476-.9 1.635-1.848 3.365-1.848 3.6 0 4.268 2.368 4.268 5.453v6.256z"
              }].map((icon, index) => (
                <motion.a 
                  key={index} 
                  href={icon.href} 
                  className="hover:text-gray-400" 
                  aria-label={icon.label}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
