
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-100 py-8 mt-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a to="/" className="text-xl font-bold tracking-tight text-gray-900">
              Shop<span className="text-blue-600">Craft</span>
            </a>
          </div>

          {/* Minimal as */}
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <a to="" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a to="" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
              Products
            </a>
            <a to="" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="mailto:sujansah.dev@gmail.com" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-400 font-medium">
            &copy; {currentYear} ShopCraft
          </p>
          
        </div>
      </div>
    </footer>
  );
}