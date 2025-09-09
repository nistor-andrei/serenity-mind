export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-purple-800 font-display">
          SerenityMind
        </h3>
        <div className="flex justify-center space-x-6 my-6">
          <a className="text-gray-500 hover:text-purple-600" href="#">
            About Us
          </a>
          <a className="text-gray-500 hover:text-purple-600" href="#">
            Contact
          </a>
          <a className="text-gray-500 hover:text-purple-600" href="#">
            Privacy Policy
          </a>
          <a className="text-gray-500 hover:text-purple-600" href="#">
            Terms of Service
          </a>
        </div>
        <p className="text-gray-400">
          © {currentYear} SerenityMind. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
