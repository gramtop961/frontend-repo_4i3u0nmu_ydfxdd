import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Ava Patel',
    role: 'Operations, HexaSoft',
    text: 'Flawless planning and responsive support. Our team travels monthly and Navio has been exceptional.',
    rating: 5,
  },
  {
    name: 'Liam Chen',
    role: 'Founder, Northpeak',
    text: 'They negotiated better rates than our previous provider and the rebooking process is instant.',
    rating: 5,
  },
  {
    name: 'Sophia Martinez',
    role: 'EA, Harbor Capital',
    text: 'Reliable, calm, and professional. Every itinerary arrives clean and on time. Highly recommend.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">Trusted by teams worldwide</h2>
          <p className="mt-2 max-w-2xl text-white/70">Consistent, hospitality-grade service at scale.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/90">“{r.text}”</p>
              <div className="mt-5 text-sm text-white/70">
                <span className="font-medium text-white">{r.name}</span> • {r.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
