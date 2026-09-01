function VideoSection() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-8 animate-slide-up" id="video-section">
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Watch How The ₹1 SuperCoin Trick Works! 🎬
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Follow the quick guide below to see live proof
        </p>
      </div>

      <div className="glass-card rounded-3xl p-4 sm:p-6 shadow-sm border border-white/50">
        {/* Video Player Container */}
        <div className="relative rounded-2xl overflow-hidden bg-black/5 aspect-[9/16] sm:aspect-video w-full max-w-sm sm:max-w-none mx-auto border border-gray-200/50 shadow-inner">
          
          {/* LOCAL VIDEO PLAYER */}
          <video 
            className="w-full h-full object-cover"
            controls 
            preload="metadata"
            poster="/banner.png" 
          >
            <source src="/trick-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* YOUTUBE / INSTAGRAM EMBED ALTERNATIVE (Commented Out) */}
          {/* 
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe> 
          */}
        </div>

        {/* Creator Credit Badge */}
        <div className="mt-5 flex justify-center">
          <a 
            href="https://www.instagram.com/rishabh_tech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-orange-400/10 hover:from-pink-500/20 hover:to-orange-400/20 border border-pink-500/20 transition-all duration-300 group"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-700 group-hover:text-pink-600 transition-colors">
              Original Reel by @rishab_tech
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
