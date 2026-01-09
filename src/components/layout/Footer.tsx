import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
export function Footer() {
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-xl font-semibold tracking-tight text-foreground">
              Virida Capital
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Investing in breakthrough hardware companies that transform industrial systems
              and unlock the future of clean energy. Based in Europe, building globally.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="mailto:info@virida-capital.com" className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/virida-capital/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Navigate</h4>
            <ul className="space-y-3">
              {['Thesis', 'Portfolio', 'Team', 'News', 'Contact'].map(item => <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/sfdr" className="text-muted-foreground hover:text-foreground transition-colors">
                  EU SFDR Disclosures
                </Link>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Virida Capital. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Amsterdam · Berlin · London
          </p>
        </div>
      </div>
    </footer>;
}