export default function Tokenomics() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-white text-center mb-12">
          Tokenomics
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
          <TokenStat 
            title="Total Supply" 
            value="1B" 
            description="THANKSBRO tokens"
          />
          <TokenStat 
            title="Network" 
            value="Solana" 
            description="Lightning fast & cheap"
          />
          <TokenStat 
            title="Decimals" 
            value="6" 
            description="Micro-tipping enabled"
          />
          <TokenStat 
            title="Launch" 
            value="Fair" 
            description="No presale, no VCs"
          />
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
          <h4 className="text-2xl font-bold text-white text-center mb-6">
            Distribution
          </h4>
          <div className="space-y-4">
            <DistributionItem label="Community & Airdrops" percentage="40%" />
            <DistributionItem label="Liquidity Pool" percentage="30%" />
            <DistributionItem label="Development & Marketing" percentage="20%" />
            <DistributionItem label="Team (6mo vest)" percentage="10%" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TokenStat({ title, value, description }: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20">
      <h4 className="text-purple-300 text-sm font-medium mb-2">{title}</h4>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <p className="text-purple-200 text-sm">{description}</p>
    </div>
  );
}

function DistributionItem({ label, percentage }: {
  label: string;
  percentage: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-purple-200">{label}</span>
      <span className="text-white font-bold">{percentage}</span>
    </div>
  );
}