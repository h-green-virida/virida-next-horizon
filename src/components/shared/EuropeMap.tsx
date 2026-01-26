import { cn } from '@/lib/utils';
import { MapPin } from 'lucide-react';

interface EuropeMapProps {
  className?: string;
}

export function EuropeMap({ className }: EuropeMapProps) {
  // Google Maps embed centered on Western Europe
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5000000!2d5.0!3d50.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snl!4v1706000000000!5m2!1sen!2snl";

  // City marker positions (percentages relative to the map container)
  const cities = [
    { name: 'London', left: '38%', top: '38%' },
    { name: 'Utrecht', left: '48%', top: '36%' },
    { name: 'Munich', left: '54%', top: '48%' },
  ];

  return (
    <div className={cn("relative rounded-2xl overflow-hidden border border-border bg-card", className)}>
      <iframe
        src={embedUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Virida Capital Office Locations"
        className="w-full"
      />
      
      {/* City pin markers */}
      {cities.map((city) => (
        <div
          key={city.name}
          className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-full pointer-events-none"
          style={{ left: city.left, top: city.top }}
        >
          <div className="bg-primary text-primary-foreground text-xs font-medium px-2 py-0.5 rounded-full mb-1 whitespace-nowrap shadow-md">
            {city.name}
          </div>
          <MapPin className="w-6 h-6 text-primary drop-shadow-lg" fill="currentColor" />
        </div>
      ))}
    </div>
  );
}