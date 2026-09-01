import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2 group" id="header-logo">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-flipkart-blue to-flipkart-dark flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <span className="text-white text-lg font-black">F</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base font-bold text-gray-800 tracking-tight">
              SuperCoin
            </span>
            <span className="text-[10px] sm:text-xs text-flipkart-blue font-semibold -mt-0.5">
              Giveaway
            </span>
          </div>
        </Link>

        {/* Badge */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-flipkart-yellow/20 to-flipkart-orange/10 text-xs font-semibold text-flipkart-orange border border-flipkart-yellow/30">
            <span className="w-1.5 h-1.5 rounded-full bg-flipkart-green animate-pulse" />
            Live Now
          </span>
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-flipkart-blue/5 text-xs font-semibold text-flipkart-blue border border-flipkart-blue/10">
            🎁 ₹1 Gift Cards
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
