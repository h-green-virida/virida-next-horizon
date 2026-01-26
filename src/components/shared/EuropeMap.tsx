import { cn } from '@/lib/utils';
import europeMap from '@/assets/europe-map.webp';

interface EuropeMapProps {
  className?: string;
}

export function EuropeMap({ className }: EuropeMapProps) {
  // City positions precisely calibrated to the Europe map
  // London: southeastern England
  // Utrecht: central Netherlands  
  // Munich: southern Germany (Bavaria)
  const cities = [
    { name: 'London', left: '17%', top: '48%' },
    { name: 'Utrecht', left: '30.5%', top: '44%' },
    { name: 'Munich', left: '36.5%', top: '56%' },
  ];

  return (
    <div className={cn("relative", className)}>
      <img 
        src={europeMap} 
        alt="Map of Europe" 
        className="w-full h-auto dark:invert dark:opacity-70"
      />
      
      {/* City markers */}
      {cities.map((city) => (
        <div
          key={city.name}
          className="absolute flex flex-col items-center"
          style={{ left: city.left, top: city.top, transform: 'translate(-50%, -50%)' }}
        >
          {/* Outer glow */}
          <div className="absolute w-6 h-6 rounded-full bg-primary/20" />
          {/* Middle ring */}
          <div className="absolute w-4 h-4 rounded-full bg-primary/40" />
          {/* Inner marker */}
          <div className="relative w-2.5 h-2.5 rounded-full bg-primary border-2 border-background shadow-lg" />
          {/* City label */}
          <span className="mt-2 text-[10px] font-medium text-foreground whitespace-nowrap">
            {city.name}
          </span>
        </div>
      ))}
    </div>
  );
}
