export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            THANKSBRO
            <span className="text-4xl md:text-6xl ml-4">👊</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-200 font-light">
            The Universal Gesture of Appreciation
          </h2>
        </div>

        <p className="text-lg md:text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          When words aren't enough, send a THANKSBRO. Built on Solana for instant, 
          meaningful recognition that actually matters.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105">
            Coming Soon
          </button>
          <button className="border-2 border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900 font-bold py-4 px-8 rounded-full text-lg transition-all">
            Join Waitlist
          </button>
        </div>

        <div className="mt-8">
          <span className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm animate-pulse">
            🚀 LAUNCHING SOON ON SOLANA
          </span>
        </div>
      </div>
    </section>
  );
}