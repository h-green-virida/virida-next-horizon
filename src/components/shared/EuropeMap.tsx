import { cn } from '@/lib/utils';

interface EuropeMapProps {
  className?: string;
}

export function EuropeMap({ className }: EuropeMapProps) {
  // Using Google Maps embed centered on Western Europe to show London, Utrecht, and Munich
  // Center point approximately between the three cities: lat 50.5, lng 5.0, zoom level 5
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5000000!2d5.0!3d50.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snl!4v1706000000000!5m2!1sen!2snl";

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
      
      {/* Legend overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
        <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          London
        </div>
        <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          Utrecht
        </div>
        <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          Munich
        </div>
      </div>
    </div>
  );
}
