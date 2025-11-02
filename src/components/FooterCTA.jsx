import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const FooterCTA = () => {
  return (
    <footer id="contact" className="w-full bg-neutral-950 pb-16 pt-14 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/15 via-white/5 to-transparent p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.25),transparent_60%)]" />
          <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">Ready to plan your next trip?</h3>
              <p className="mt-2 max-w-xl text-white/80">
                Get a tailored itinerary within 24 hours. Simple, transparent pricing with no hidden fees.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="mailto:hello@navio.travel" className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400">
                  <Mail size={16} />
                  hello@navio.travel
                </a>
                <a href="tel:+1234567890" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">
                  <Phone size={16} />
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="md:justify-self-end">
              <a
                href="#destinations"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
              >
                Explore destinations
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Navio Travel Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
