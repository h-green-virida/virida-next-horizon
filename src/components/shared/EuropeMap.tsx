import { cn } from '@/lib/utils';
import europeMap from '@/assets/europe-map.png';

interface EuropeMapProps {
  className?: string;
}

export function EuropeMap({ className }: EuropeMapProps) {
  // City positions as percentages relative to the map image
  const cities = [
    { name: 'London', left: '24%', top: '38%' },
    { name: 'Utrecht', left: '36%', top: '34%' },
    { name: 'Munich', left: '44%', top: '48%' },
  ];

  return (
    <div className={cn("relative", className)}>
      <img 
        src={europeMap} 
        alt="Map of Europe" 
        className="w-full h-auto opacity-80 dark:invert dark:opacity-60"
      />
      
      {/* City markers */}
      {cities.map((city) => (
        <div
          key={city.name}
          className="absolute flex flex-col items-center"
          style={{ left: city.left, top: city.top, transform: 'translate(-50%, -50%)' }}
        >
          {/* Outer glow */}
          <div className="absolute w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
          {/* Middle ring */}
          <div className="absolute w-5 h-5 rounded-full bg-primary/40" />
          {/* Inner marker */}
          <div className="relative w-3 h-3 rounded-full bg-primary border-2 border-background shadow-lg" />
          {/* City label */}
          <span className="mt-3 text-xs font-medium text-foreground whitespace-nowrap">
            {city.name}
          </span>
        </div>
      ))}
    </div>
  );
}
