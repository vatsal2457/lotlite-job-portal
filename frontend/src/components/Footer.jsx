import React from 'react';
import Logo from './shared/Logo';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-300 max-w-md">
              Lotlite Technology is a leading global education technology company offering professional certifications, degree programs, and career-focused training to help you advance your career.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#3b82f6] mr-3" />
                <span className="text-gray-300">+91 8805843309</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#3b82f6] mr-3" />
                <span className="text-gray-300">contact@lotlitetechnology.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#3b82f6] mr-3 mt-1" />
                <span className="text-gray-300">Lotlite Technology Pvt Ltd. Office - 122, Gera Imperium, Opp- Wipro, Hinjewadi Phase 2, Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3b82f6]">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Data Science</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Software Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Foreign Degree</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Foreign Exchange Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Product Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3b82f6]">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3b82f6]">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Student Success</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Career Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Scholarships</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">Webinars</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} Lotlite. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#3b82f6] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap justify-center md:justify-start space-x-4 text-sm text-gray-300">
            <a href="#" className="hover:text-[#3b82f6] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#3b82f6] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#3b82f6] transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-[#3b82f6] transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 