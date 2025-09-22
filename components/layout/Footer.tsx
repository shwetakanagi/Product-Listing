import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-sky-200 text-black-600 px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8">
        {/* Row 1 */}
        {/* E-comm */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">E-comm</h3>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum has een the industry's standard
            dummy text ever. Since the 1500s, when an unknown printer.
          </p>
        </div>

        {/* Follow Us (spans 2 cols) */}
        <div className="col-span-2">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <p className="text-sm">
            Since the 1500s, when an unknow
             printer took a gallery of type and scrambled.
          </p>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-900">Facebook</a></li>
            <li><a href="#" className="hover:text-gray-900">Twitter</a></li>
            <li><a href="#" className="hover:text-gray-900">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-900">LinkedIn</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <address className="not-italic text-sm space-y-1">
            <p>E-Comm, 4578</p>
            <p>Marmora Road,</p>
            <p>Glasgow D04 89GR</p>
          </address>
        </div>

        {/* Row 2 */}
        {/* Information */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-900">About Us</a></li>
            <li><a href="#" className="hover:text-gray-900">Information</a></li>
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Service */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-900">About Us</a></li>
            <li><a href="#" className="hover:text-gray-900">Information</a></li>
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* My Account */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">My Account</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-900">About Us</a></li>
            <li><a href="#" className="hover:text-gray-900">Information</a></li>
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Our Offers */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Our Offers</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-900">About Us</a></li>
            <li><a href="#" className="hover:text-gray-900">Information</a></li>
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
          </ul>
        </div>

      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Ecommerce theme by www.bisenbaev.com
      </div>
    </footer>
  );
}
