import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text contrast - does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-500" />
            <span className="text-lg font-semibold tracking-tight">Navio Travel</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm text-white/80 transition hover:text-white">Services</a>
            <a href="#destinations" className="text-sm text-white/80 transition hover:text-white">Destinations</a>
            <a href="#testimonials" className="text-sm text-white/80 transition hover:text-white">Reviews</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/10">
              <Phone size={16} />
              Call us
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400">
              Get a quote
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Hero copy */}
        <div className="flex grow flex-col items-start justify-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/90 backdrop-blur">
            Premium Corporate Travel
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Navigate the world with confidence.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            End-to-end travel planning for modern teams. From flights and stays to on-the-ground support, we handle every detail so you can stay focused on what matters.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#destinations" className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400">
              Explore destinations
              <ArrowRight size={16} />
            </a>
            <a href="mailto:hello@navio.travel" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
              <Mail size={16} />
              hello@navio.travel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
