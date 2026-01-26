import { cn } from '@/lib/utils';

interface EuropeMapProps {
  className?: string;
}

export function EuropeMap({ className }: EuropeMapProps) {
  // City positions based on actual geographic locations on the map
  const cities = [
    { name: 'London', x: 128, y: 108 },
    { name: 'Utrecht', x: 152, y: 100 },
    { name: 'Munich', x: 172, y: 125 },
  ];

  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox="0 0 300 250"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Iceland */}
        <path
          d="M45 25 Q55 20 65 25 Q70 30 68 38 Q60 42 50 40 Q42 35 45 25"
          className="fill-secondary/50 stroke-border"
          strokeWidth="0.5"
        />
        
        {/* Norway/Sweden/Finland */}
        <path
          d="M155 5 Q165 8 175 5 Q185 10 190 20 Q188 35 195 50 Q190 65 185 75 Q175 80 165 75 Q155 70 150 60 Q145 45 150 30 Q152 15 155 5"
          className="fill-secondary/50 stroke-border"
          strokeWidth="0.5"
        />
        
        {/* UK */}
        <path
          d="M110 85 Q115 80 125 82 Q135 85 140 95 Q142 105 138 115 Q130 125 120 128 Q110 125 105 115 Q100 105 105 95 Q108 88 110 85"
          className="fill-secondary/50 stroke-border"
          strokeWidth="0.5"
        />
        
        {/* Ireland */}
        <path
          d="M90 95 Q98 90 105 95 Q108 102 105 110 Q98 115 90 112 Q85 105 90 95"
          className="fill-secondary/50 stroke-border"
          strokeWidth="0.5"
        />
        
        {/* France */}
        <path
          d="M115 130 Q130 125 145 130 Q155 140 150 155 Q140 170 125 175 Q110 170 105 155 Q108 140 115 130"
          className="fill-secondary/50 stroke-border"
          strokeWidth="0.5"
        />
        
        {/* Spain/Portugal */}
        <path
          d="M85 165 Q100 160 120 165 Q130 175 128 190 Q120 205 100 210 Q80 205 75 190 Q78 175 85 165"
          className="fill-secondary/50 stroke-border"
          strokeWidth="0.5"
        />
        
        {/* Germany/Benelux/Poland */}
        <path
          d="M145 90 Q160 85 180 90 Q195 100 195 115 Q190 130 175 135 Q155 132 145 120 Q140 105 145 90"
          className="fill-secondary/50 stroke-border"
          strokeWidth="0.5"
        />
        
        {/* Italy */}
        <path
          d="M160 145 Q170 140 175 150 Q180 165 175 185 Q165 200 155 195 Q150 180 152 165 Q155 152 160 145"
          className="fill-secondary/50 stroke-border"
          strokeWidth="0.5"
        />
        
        {/* Eastern Europe */}
        <path
          d="M195 75 Q215 70 235 80 Q250 95 250 120 Q245 145 230 155 Q210 160 195 150 Q185 135 190 115 Q192 90 195 75"
          className="fill-secondary/50 stroke-border"
          strokeWidth="0.5"
        />
        
        {/* Greece/Balkans */}
        <path
          d="M195 155 Q210 150 220 160 Q225 175 218 190 Q205 200 192 195 Q185 180 190 165 Q192 158 195 155"
          className="fill-secondary/50 stroke-border"
          strokeWidth="0.5"
        />

        {/* City markers */}
        {cities.map((city) => (
          <g key={city.name}>
            {/* Outer pulse ring */}
            <circle
              cx={city.x}
              cy={city.y}
              r="8"
              className="fill-primary/20"
            />
            {/* Inner marker */}
            <circle
              cx={city.x}
              cy={city.y}
              r="4"
              className="fill-primary stroke-background"
              strokeWidth="1.5"
            />
            {/* City label */}
            <text
              x={city.x}
              y={city.y + 14}
              textAnchor="middle"
              className="fill-foreground text-[8px] font-medium"
            >
              {city.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
