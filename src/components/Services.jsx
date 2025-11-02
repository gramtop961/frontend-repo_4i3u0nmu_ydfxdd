import React from 'react';
import { Plane, Calendar, Shield, MapPin } from 'lucide-react';

const services = [
  {
    title: 'Flights & Itineraries',
    desc: 'Global routes, preferred carriers, and dynamic rebooking when plans change.',
    icon: Plane,
  },
  {
    title: 'Scheduling & Approvals',
    desc: 'Policy-aware requests, manager approvals, and calendar integrations.',
    icon: Calendar,
  },
  {
    title: 'Duty of Care',
    desc: '24/7 monitoring, traveler tracking, and proactive safety alerts.',
    icon: Shield,
  },
  {
    title: 'On-the-ground',
    desc: 'Hotels, transfers, lounges, and concierge support in 120+ cities.',
    icon: MapPin,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">What we do</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Expertly managed corporate travel designed for reliability, cost control, and traveler comfort.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 transition hover:border-white/20">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300 ring-1 ring-inset ring-blue-500/30">
                <s.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
