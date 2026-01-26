import { cn } from '@/lib/utils';

interface EuropeMapProps {
  className?: string;
}

export function EuropeMap({ className }: EuropeMapProps) {
  // City positions (approximate positions on simplified Europe map)
  const cities = [
    { name: 'London', x: 145, y: 115 },
    { name: 'Utrecht', x: 175, y: 105 },
    { name: 'Munich', x: 200, y: 145 },
  ];

  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified Europe outline */}
        <path
          d="M120 60 L140 50 L160 55 L180 45 L200 50 L220 45 L240 55 L260 50 L280 60 L290 75 L285 90 L295 105 L290 120 L300 135 L295 150 L305 165 L300 180 L290 190 L275 185 L260 195 L245 190 L230 200 L215 195 L200 205 L185 200 L170 210 L155 205 L140 215 L125 210 L110 200 L100 185 L95 170 L90 155 L85 140 L90 125 L85 110 L90 95 L100 80 L110 70 Z"
          className="fill-secondary/50 stroke-border"
          strokeWidth="1"
        />
        
        {/* UK/Ireland area */}
        <path
          d="M100 90 L115 85 L130 90 L140 100 L145 115 L140 130 L130 140 L115 145 L100 140 L90 130 L85 115 L90 100 Z"
          className="fill-secondary/50 stroke-border"
          strokeWidth="1"
        />
        
        {/* Scandinavia simplified */}
        <path
          d="M200 20 L215 25 L230 20 L245 30 L255 45 L250 60 L240 70 L225 65 L210 70 L200 60 L195 45 L200 30 Z"
          className="fill-secondary/50 stroke-border"
          strokeWidth="1"
        />
        
        {/* Iberian Peninsula */}
        <path
          d="M80 180 L100 175 L120 180 L130 195 L125 210 L110 220 L90 225 L75 215 L70 200 L75 185 Z"
          className="fill-secondary/50 stroke-border"
          strokeWidth="1"
        />
        
        {/* Italy */}
        <path
          d="M200 170 L210 175 L220 190 L225 210 L220 225 L210 235 L200 230 L195 215 L190 195 L195 180 Z"
          className="fill-secondary/50 stroke-border"
          strokeWidth="1"
        />

        {/* City markers */}
        {cities.map((city) => (
          <g key={city.name}>
            {/* Outer pulse ring */}
            <circle
              cx={city.x}
              cy={city.y}
              r="12"
              className="fill-primary/10 animate-pulse"
            />
            {/* Inner marker */}
            <circle
              cx={city.x}
              cy={city.y}
              r="6"
              className="fill-primary stroke-background"
              strokeWidth="2"
            />
            {/* City label */}
            <text
              x={city.x}
              y={city.y + 22}
              textAnchor="middle"
              className="fill-foreground text-[10px] font-medium"
            >
              {city.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
