import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const spots = [
  {
    city: 'Tokyo',
    country: 'Japan',
    img: 'https://images.unsplash.com/photo-1505066829862-0b7a1d5f8f58?q=80&w=1600&auto=format&fit=crop',
  },
  {
    city: 'New York',
    country: 'USA',
    img: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=1600&auto=format&fit=crop',
  },
  {
    city: 'Dubai',
    country: 'UAE',
    img: 'https://images.unsplash.com/photo-1498496294664-ef1e558fd1da?q=80&w=1600&auto=format&fit=crop',
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Featured routes</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              High-frequency business corridors with negotiated rates and seamless support.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium transition hover:bg-white/10"
          >
            View all
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {spots.map((s) => (
            <div key={s.city} className="group relative overflow-hidden rounded-xl">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.city}, ${s.country}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <MapPin size={16} className="text-blue-300" />
                    {s.country}
                  </div>
                  <h3 className="text-xl font-semibold">{s.city}</h3>
                </div>
                <button className="inline-flex items-center gap-2 rounded-md bg-blue-500/90 px-3 py-1.5 text-sm font-medium text-white backdrop-blur transition hover:bg-blue-400">
                  Book
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
