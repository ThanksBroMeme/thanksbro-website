export default function Community() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold text-white mb-8">
          Join the Movement
        </h3>
        
        <p className="text-lg text-purple-200 mb-12 max-w-2xl mx-auto">
          Be part of the community that's building the future of digital appreciation.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <CommunityCard
            icon="💬"
            title="Discord"
            description="Join our main community hub for discussions, updates, and daily appreciation!"
            link="#"
            buttonText="Coming Soon"
          />
          <CommunityCard
            icon="📱"
            title="Telegram"
            description="Get instant updates and chat with the community in real-time."
            link="#"
            buttonText="Coming Soon"
          />
          <CommunityCard
            icon="🐦"
            title="Twitter"
            description="Follow for the latest news, memes, and community highlights."
            link="#"
            buttonText="Coming Soon"
          />
        </div>
      </div>
    </section>
  );
}

function CommunityCard({ icon, title, description, link, buttonText }: {
  icon: string;
  title: string;
  description: string;
  link: string;
  buttonText: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
      <p className="text-purple-200 mb-6">{description}</p>
      <a 
        href={link}
        className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all"
      >
        {buttonText}
      </a>
    </div>
  );
}