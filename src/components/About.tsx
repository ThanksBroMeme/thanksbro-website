export default function About() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-4xl font-bold text-white text-center mb-12">
          What is THANKSBRO?
        </h3>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="text-2xl font-bold text-purple-300 mb-6">
              Digital Appreciation That Matters
            </h4>
            <p className="text-purple-100 text-lg leading-relaxed mb-6">
              THANKSBRO transforms simple appreciation into meaningful recognition. 
              More than just words, it&aposs a tangible gesture that shows real gratitude.
            </p>
            <p className="text-purple-100 text-lg leading-relaxed">
              Built on Solana for lightning-fast, low-cost transactions that make 
              micro-tipping practical and accessible to everyone.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="text-6xl mb-4 text-center">🤝</div>
            <h5 className="text-xl font-bold text-white text-center mb-4">
              From Memes to Meaningful
            </h5>
            <p className="text-purple-200 text-center">
              Started as internet culture, evolved into a universal language 
              of appreciation that transcends platforms and communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}