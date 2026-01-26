import { cn } from '@/lib/utils';

interface EuropeMapProps {
  className?: string;
}

export function EuropeMap({ className }: EuropeMapProps) {
  // City positions calibrated to the SVG viewBox coordinates
  const cities = [
    { name: 'London', x: 470, y: 335 },
    { name: 'Utrecht', x: 530, y: 310 },
    { name: 'Munich', x: 590, y: 390 },
  ];

  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox="300 150 500 450"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Portugal */}
        <path
          d="M380 480 L385 450 L390 430 L385 410 L390 390 L400 395 L405 420 L410 450 L405 480 L395 500 L380 495 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Spain */}
        <path
          d="M390 390 L410 370 L440 360 L480 365 L510 380 L520 400 L515 430 L500 460 L470 480 L430 485 L400 480 L395 450 L400 420 L390 390 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* France */}
        <path
          d="M440 360 L460 340 L490 330 L520 320 L550 330 L560 350 L555 380 L540 400 L515 410 L490 400 L470 380 L450 370 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* United Kingdom */}
        <path
          d="M445 280 L460 270 L480 275 L495 290 L500 315 L495 340 L480 355 L460 350 L445 335 L440 310 L445 290 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Ireland */}
        <path
          d="M410 290 L425 280 L440 290 L445 310 L438 330 L420 335 L405 320 L408 300 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Belgium */}
        <path
          d="M510 315 L525 310 L535 320 L530 335 L515 338 L508 325 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Netherlands */}
        <path
          d="M520 290 L540 285 L550 295 L548 310 L535 318 L520 312 L518 300 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Germany */}
        <path
          d="M545 295 L570 280 L600 285 L620 305 L625 340 L615 375 L590 395 L560 390 L545 365 L535 335 L540 310 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Switzerland */}
        <path
          d="M545 385 L560 378 L575 385 L572 400 L555 408 L542 398 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Austria */}
        <path
          d="M575 385 L605 378 L630 385 L635 400 L620 415 L590 418 L572 405 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Italy */}
        <path
          d="M555 410 L575 400 L590 420 L600 450 L605 490 L595 530 L575 545 L560 530 L565 490 L555 455 L548 430 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Denmark */}
        <path
          d="M560 255 L575 248 L588 260 L582 280 L568 285 L555 275 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Norway */}
        <path
          d="M560 160 L580 155 L600 165 L610 190 L605 220 L590 245 L570 250 L555 235 L558 200 L555 175 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Sweden */}
        <path
          d="M600 165 L620 170 L635 195 L640 235 L630 270 L610 285 L595 270 L590 235 L600 200 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Finland */}
        <path
          d="M650 155 L675 165 L690 200 L685 245 L665 275 L640 270 L635 235 L645 195 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Poland */}
        <path
          d="M620 300 L655 295 L685 310 L690 345 L675 375 L640 380 L615 365 L610 330 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Czech Republic */}
        <path
          d="M600 350 L625 345 L640 360 L635 378 L615 385 L598 372 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Hungary */}
        <path
          d="M635 400 L665 395 L685 410 L680 435 L655 445 L630 435 L628 415 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Romania */}
        <path
          d="M680 410 L720 400 L750 420 L755 455 L735 480 L695 475 L675 450 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Bulgaria */}
        <path
          d="M695 480 L730 475 L755 495 L750 525 L720 535 L690 520 L688 495 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Greece */}
        <path
          d="M665 530 L690 520 L710 540 L720 575 L705 600 L675 595 L655 570 L660 545 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />
        
        {/* Baltic States */}
        <path
          d="M655 275 L680 268 L700 285 L698 315 L680 328 L655 320 L650 295 Z"
          className="fill-secondary/40 stroke-border/60"
          strokeWidth="1"
        />

        {/* City markers */}
        {cities.map((city) => (
          <g key={city.name}>
            {/* Outer glow */}
            <circle
              cx={city.x}
              cy={city.y}
              r="14"
              className="fill-primary/15"
            />
            {/* Middle ring */}
            <circle
              cx={city.x}
              cy={city.y}
              r="9"
              className="fill-primary/30"
            />
            {/* Inner marker */}
            <circle
              cx={city.x}
              cy={city.y}
              r="5"
              className="fill-primary stroke-background"
              strokeWidth="2"
            />
            {/* City label */}
            <text
              x={city.x}
              y={city.y + 24}
              textAnchor="middle"
              className="fill-foreground text-[14px] font-medium"
              style={{ fontFamily: 'inherit' }}
            >
              {city.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
