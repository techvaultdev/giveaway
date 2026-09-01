import EntryForm from '../components/EntryForm';
import AdBanner from '../components/AdBanner';
import VideoSection from '../components/VideoSection';

function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Top Ad */}
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <AdBanner size="leaderboard" label="top-banner" />
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-6" id="hero-section">
        <div className="glass-card rounded-3xl overflow-hidden animate-fade-in">
          {/* Banner Image */}
          <div className="relative overflow-hidden">
            <img
              src="/banner.png"
              alt="Flipkart SuperCoin Giveaway Banner"
              className="w-full h-48 sm:h-64 md:h-72 object-cover"
              id="hero-banner"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-flipkart-yellow text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-float">
              🔥 LIMITED TIME
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-3" id="hero-headline">
              <span className="gradient-text">
                Flipkart SuperCoin Exclusive Giveaway!
              </span>
              <br />
              <span className="text-gray-800 text-xl sm:text-2xl md:text-3xl">
                Win ₹1 Gift Cards 🎉
              </span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Enter your details below, complete simple Instagram tasks, and
              stand a chance to win{' '}
              <span className="font-semibold text-flipkart-blue">
                Flipkart SuperCoin ₹1 Gift Cards
              </span>
              . 3 lucky winners will be selected!
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Entry Form Section */}
      <section className="max-w-md mx-auto px-4 sm:px-6 pb-8 animate-slide-up" id="form-section" style={{ animationDelay: '0.2s' }}>
        <div className="glass-card rounded-2xl p-6 sm:p-8 animate-pulse-glow">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-flipkart-blue/10 flex items-center justify-center">
              <span className="text-lg">✍️</span>
            </div>
            <h2 className="text-lg font-bold text-gray-800">
              Enter the Giveaway
            </h2>
          </div>
          <EntryForm />
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-8 animate-slide-up" style={{ animationDelay: '0.4s' }} id="how-it-works">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            How It Works
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            3 simple steps to enter the giveaway
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              step: '01',
              icon: '📝',
              title: 'Fill the Form',
              desc: 'Enter your name, email, and Instagram username above.',
            },
            {
              step: '02',
              icon: '📱',
              title: 'Complete Tasks',
              desc: 'Follow our Instagram page and like our latest reel.',
            },
            {
              step: '03',
              icon: '🏆',
              title: 'Win Prizes',
              desc: 'We pick 3 winners and verify Instagram activity manually.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="glass-card rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold text-flipkart-blue uppercase tracking-widest">
                Step {item.step}
              </span>
              <h3 className="text-sm font-bold text-gray-800 mt-1 mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Ad */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <AdBanner size="rectangle" label="bottom-banner" />
      </div>
    </div>
  );
}

export default LandingPage;
